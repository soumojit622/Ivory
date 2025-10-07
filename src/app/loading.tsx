"use client";

import React from "react";

const LoadingPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background px-6">
      {/* Subtle Grid + Glow */}
      <div className="absolute inset-0">
        {/* Glowing blue center pulse */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e9df2_0%,transparent_70%)] opacity-20 animate-pulse-slow" />
        {/* Subtle dotted grid */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1e9df2_0.5px,transparent_1px),linear-gradient(180deg,#1e9df2_0.5px,transparent_1px)] bg-[length:6rem_6rem] opacity-[0.04]" />
      </div>

      {/* Floating particles for movement */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary/10 rounded-full blur-sm animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8">
        {/* Loader ring */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-[5px] border-primary/20 border-t-primary animate-spin-slow" />
          <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full opacity-40 animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gradient bg-gradient-to-r from-primary to-primary/70 animate-gradient-x">
          Preparing your experience
        </h1>

        {/* Subtext */}
        <p className="text-muted-foreground max-w-md text-base sm:text-lg leading-relaxed">
          Please wait a moment while we securely set up your dashboard and load
          your data.
        </p>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-xs text-muted-foreground text-center w-full">
        © {new Date().getFullYear()} Ivory. AI-powered dental care made simple.
      </p>
    </div>
  );
};

export default LoadingPage;
