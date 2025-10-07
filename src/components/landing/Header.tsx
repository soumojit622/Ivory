"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Brain, CreditCard, Info, LogIn, UserPlus } from "lucide-react";

function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 transition-all">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.svg"
            alt="Ivory Logo"
            width={36}
            height={36}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-semibold text-xl tracking-tight group-hover:text-primary transition-colors">
            Ivory
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Brain className="w-4 h-4" />
            How it Works
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <CreditCard className="w-4 h-4" />
            Pricing
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Info className="w-4 h-4" />
            About
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 hover:shadow-sm hover:border-primary/40 transition-all"
            >
              <LogIn className="w-4 h-4" />
              Log In
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button
              size="sm"
              className="flex items-center gap-2 bg-primary text-primary-foreground hover:shadow-md hover:bg-primary/90 transition-all"
            >
              <UserPlus className="w-4 h-4" />
              Get Started
            </Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
}

export default Header;
