import { MicIcon } from "lucide-react";

function WelcomeSection() {
  return (
    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background/60 rounded-3xl p-8 border border-primary/20 mb-12 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
      {/* Left Content */}
      <div className="space-y-4 text-center lg:text-left">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-md">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary">
            Voice Assistant Ready
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
            AI Voice Assistant
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed">
            Talk to your AI dental assistant using natural voice commands for
            instant advice and professional guidance.
          </p>
        </div>
      </div>

      {/* Right Icon */}
      <div className="hidden lg:flex items-center justify-center w-36 h-36 mt-6 lg:mt-0 bg-gradient-to-br from-primary/25 to-primary/10 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
        <MicIcon className="w-16 h-16 text-primary" />
      </div>

      {/* Background Glow Orbs */}
      <div className="absolute -top-12 -left-12 w-44 h-44 bg-primary/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-52 h-52 bg-primary/15 rounded-full blur-2xl animate-pulse-slow pointer-events-none" />

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce-slow opacity-50" />
        <div className="absolute bottom-16 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-bounce-slower opacity-40" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-bounce-slower opacity-30" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-bounce-slow opacity-30" />
      </div>
    </div>
  );
}

export default WelcomeSection;
