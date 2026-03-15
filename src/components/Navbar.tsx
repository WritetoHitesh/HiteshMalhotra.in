"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/teardowns", label: "Teardowns" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-border/40">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-lg">
          Hitesh Malhotra.
        </Link>
        <nav className="flex gap-6 relative">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-1 py-2 text-sm transition-colors ${
                pathname === item.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
