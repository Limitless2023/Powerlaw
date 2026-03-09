import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Color4Bg: {
      BlurGradientBg: new (options: {
        dom: string;
        colors: string[];
        loop: boolean;
      }) => void;
    };
  }
}

interface GradientBgProps {
  colors: string[];
}

export default function GradientBg({ colors }: GradientBgProps) {
  const prevColorsRef = useRef<string[]>([]);

  useEffect(() => {
    // Skip if colors haven't changed
    const colorsKey = colors.join(",");
    if (colorsKey === prevColorsRef.current.join(",")) return;
    prevColorsRef.current = colors;

    // Destroy old canvas children in bg-root
    const bgRoot = document.getElementById("bg-root");
    if (bgRoot) {
      while (bgRoot.firstChild) {
        bgRoot.removeChild(bgRoot.firstChild);
      }
    }

    // Initialize new background
    try {
      new window.Color4Bg.BlurGradientBg({
        dom: "bg-root",
        colors,
        loop: true,
      });
    } catch (err) {
      console.warn("Color4Bg initialization failed:", err);
    }
  }, [colors]);

  return null;
}
