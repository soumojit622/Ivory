import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";

export default async function WelcomeSection() {
  const user = await currentUser();

  return (
    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-primary/15 via-primary/5 to-background/70 rounded-3xl p-8 border border-primary/20 mb-12 overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
      {/* Left Content */}
      <div className="space-y-5 text-center lg:text-left">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/15 rounded-full border border-primary/25 backdrop-blur-md">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-primary">
            Online & Ready
          </span>
        </div>

        {/* Greeting */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-foreground to-primary/90 bg-clip-text text-transparent pb-2">
            Good{" "}
            {new Date().getHours() < 12
              ? "morning"
              : new Date().getHours() < 18
              ? "afternoon"
              : "evening"}
            , {user?.firstName}!
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed">
            Your AI dental assistant is here to help you maintain strong,
            healthy teeth with smart guidance.
          </p>
        </div>
      </div>

      {/* Right Logo */}
      <div className="lg:flex hidden items-center justify-center w-36 h-36 mt-6 lg:mt-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-500 animate-fadeIn">
        <Image
          src="/logo.png"
          alt="Ivory"
          width={72}
          height={72}
          className="w-18 h-18"
        />
      </div>

      {/* Background Glow Orbs */}
      <div className="absolute -top-14 -left-14 w-48 h-48 bg-primary/30 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-14 -right-14 w-56 h-56 bg-primary/20 rounded-full blur-2xl animate-pulse-slow pointer-events-none" />

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce-slow opacity-60" />
        <div className="absolute bottom-24 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-bounce-slower opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-bounce-slower opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-bounce-slow opacity-50" />
      </div>
    </div>
  );
}
