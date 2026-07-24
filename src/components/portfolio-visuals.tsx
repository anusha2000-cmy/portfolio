import type { LucideIcon } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

export function useSequentialReveal<T extends HTMLElement = HTMLElement>(
  count: number,
  interval = 450,
) {
  const ref = useRef<T>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleCount(count);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  useEffect(() => {
    if (!started || visibleCount >= count) return;

    const delay = visibleCount === 0 ? 120 : interval;
    const timer = window.setTimeout(() => {
      setVisibleCount((current) => current + 1);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [started, visibleCount, count, interval]);

  return {
    ref,
    isVisible: (index: number) => index < visibleCount,
    visibleCount,
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        from === "left" && "reveal-left",
        from === "right" && "reveal-right",
        from === "up" && "reveal",
        visible &&
          (from === "up"
            ? "reveal-visible"
            : from === "left"
              ? "reveal-left-visible"
              : "reveal-right-visible"),
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function FloatingOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float absolute -left-16 top-24 h-56 w-56 rounded-full bg-brand/15 blur-3xl" />
      <div
        className="animate-float absolute right-0 top-12 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        style={{ animationDelay: "-2s", animationDuration: "9s" }}
      />
      <div
        className="animate-float absolute bottom-8 left-1/3 h-40 w-40 rounded-full bg-brand/10 blur-3xl"
        style={{ animationDelay: "-4s", animationDuration: "11s" }}
      />
    </div>
  );
}

export function TechMarquee({
  items,
}: {
  items: { icon: LucideIcon; label: string }[];
}) {
  const track = [...items, ...items];

  return (
    <section className="border-y border-border bg-surface/80 py-4" aria-label="Tech stack">
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max gap-3 px-3">
          {track.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm shadow-sm"
            >
              <item.icon className="h-4 w-4 shrink-0 text-brand" />
              <span className="whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
