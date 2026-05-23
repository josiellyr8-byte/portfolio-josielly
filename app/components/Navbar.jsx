"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/"
        className={pathname === "/" ? "active" : ""}
      >
        Home
      </Link>

      <Link
        href="/sobre"
        className={pathname === "/sobre" ? "active" : ""}
      >
        Sobre
      </Link>

      <Link
        href="/academico"
        className={pathname === "/academico" ? "active" : ""}
      >
        Acadêmico
      </Link>

      <Link
        href="/profissional"
        className={pathname === "/profissional" ? "active" : ""}
      >
        Profissional
      </Link>

      <Link
        href="/projetos"
        className={pathname === "/projetos" ? "active" : ""}
      >
        Projetos
      </Link>
    </nav>
  );
}