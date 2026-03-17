interface StatPillProps {
  value: string;
  label?: string;
}

export function StatPill({ value, label }: StatPillProps) {
  return (
    <div
      className="flex flex-col items-center px-6 py-4 rounded-xl transition-all duration-300"
      style={{
        background: "var(--site-card)",
        border: "1px solid var(--site-border)",
      }}
    >
      <span
        className="text-2xl font-bold font-serif"
        style={{ color: "var(--site-accent)" }}
      >
        {value}
      </span>
      {label && (
        <span
          className="text-xs mt-1 uppercase tracking-widest font-mono"
          style={{ color: "var(--site-text-3)" }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
