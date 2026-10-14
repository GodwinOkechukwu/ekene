export default function Tag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${className}`}
    >
      {children}
    </span>
  );
}
