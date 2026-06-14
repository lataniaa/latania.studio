import Link from "next/link";

export default function SlideButton({ label, href, className = "" }: { label: string; href?: string; className?: string }) {
  const inner = (
    <div>
      <span>{label}</span>
      <span>{label}</span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={`slide-btn-wrapper ${className}`}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={`slide-btn-wrapper ${className}`}>
      {inner}
    </button>
  );
}