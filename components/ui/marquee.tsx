"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export function Marquee({ items, speed = 30 }: MarqueeProps) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrapper py-4">
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm font-mono text-neutral-400 whitespace-nowrap"
          >
            <span className="w-1 h-1 rounded-full bg-[#4a7cb8] opacity-60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
