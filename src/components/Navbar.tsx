"use client";

import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  CalendarIcon,
  CrownIcon,
  HomeIcon,
  MicIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { user } = useUser();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: HomeIcon },
    { href: "/appointments", label: "Appointments", icon: CalendarIcon },
    { href: "/voice", label: "Voice", icon: MicIcon },
    { href: "/pro", label: "Pro", icon: CrownIcon },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-xl bg-background/70 border-b border-border/50 shadow-md">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 relative">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Ivory Logo"
            width={40}
            height={40}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="hidden sm:inline text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Ivory
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {links.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* User Info */}
          <div className="hidden lg:flex flex-col items-end leading-tight max-w-[180px] truncate">
            <span className="text-sm font-semibold text-foreground truncate">
              {user?.firstName} {user?.lastName}
            </span>
            <span className="text-xs text-muted-foreground truncate">
              {user?.emailAddresses?.[0]?.emailAddress}
            </span>
          </div>

          {/* User Button */}
          <UserButton
            appearance={{
              elements: {
                avatarBox:
                  "ring-2 ring-primary/20 hover:ring-primary/40 transition-all",
              },
            }}
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/20 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/90 backdrop-blur-lg border-t border-border/30 shadow-lg flex flex-col items-center py-4 md:hidden animate-fadeIn">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`w-full flex items-center gap-2 px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  pathname === href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Glowing Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />
    </nav>
  );
}
