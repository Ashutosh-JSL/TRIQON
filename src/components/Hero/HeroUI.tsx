
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#22E3D6]/20 bg-[#22E3D6]/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#22E3D6]">
      <Sparkles size={14} />
      {children}
    </span>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#22E3D6] to-[#13CFCB] px-6 py-3.5 text-sm font-extrabold text-[#02152B] shadow-[0_0_28px_rgba(34,227,214,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_36px_rgba(34,227,214,0.32)]"
    >
      {children}
      <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
