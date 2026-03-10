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
          "min-h-screen relative z-10 border-t border-white/5 first:border-t-0",
          className
        )}
      >
        <div className="w-full mx-auto max-w-[1400px] px-8 md:px-16 pt-28 pb-12">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
