import { forwardRef, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  onVisible?: () => void;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className, onVisible }, forwardedRef) => {
    const internalRef = useRef<HTMLElement>(null);

    // Merge refs
    const setRef = (el: HTMLElement | null) => {
      (internalRef as React.MutableRefObject<HTMLElement | null>).current = el;
      if (typeof forwardedRef === "function") forwardedRef(el);
      else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = el;
    };

    useEffect(() => {
      const el = internalRef.current;
      if (!el || !onVisible) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) onVisible();
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [onVisible]);

    return (
      <section
        ref={setRef}
        id={id}
        className={cn(
          "min-h-screen flex flex-col justify-center relative z-10",
          className
        )}
      >
        <div className="max-w-6xl mx-auto w-full px-6 md:px-12 py-16">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
