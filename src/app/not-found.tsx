import React from "react";
import Link from "next/link";
import { SearchIcon, ArrowLeftIcon } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-muted/5 via-background to-muted/10 overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e9df2_0%,transparent_70%)] opacity-10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#e2e8f0_1px,transparent_1px),linear-gradient(180deg,#e2e8f0_1px,transparent_1px)] bg-[length:6rem_6rem] opacity-5"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-7xl md:text-8xl font-extrabold text-gradient bg-gradient-to-r from-primary to-primary/70 mb-6">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Oops! Page not found
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          The page you’re looking for doesn’t exist, may have been moved, or is
          temporarily unavailable.
        </p>

        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search for content..."
              className="w-full px-4 py-3 rounded-xl border border-muted/50 focus:border-primary focus:ring focus:ring-primary/20 outline-none transition-all duration-300 bg-background text-foreground placeholder:text-muted-foreground"
            />
            <SearchIcon className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" passHref>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-xl shadow-lg hover:from-primary/95 hover:to-primary/85 transition-all duration-300">
              <ArrowLeftIcon className="h-5 w-5" />
              Go Back Home
            </button>
          </Link>
          <Link href="/contact" passHref>
            <button className="px-6 py-3 border-2 border-primary/30 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300">
              Contact Support
            </button>
          </Link>
        </div>
      </div>

      {/* Footer Note */}
      <p className="absolute bottom-6 text-xs text-muted-foreground text-center w-full">
        © {new Date().getFullYear()} Ivory. Helping people with AI dental
        assistance.
      </p>
    </div>
  );
};

export default NotFound;
