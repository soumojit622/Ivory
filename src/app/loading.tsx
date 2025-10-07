import React from "react";

const LoadingPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-muted/5 via-background to-muted/10 overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e9df2_0%,transparent_70%)] opacity-10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#e2e8f0_1px,transparent_1px),linear-gradient(180deg,#e2e8f0_1px,transparent_1px)] bg-[length:6rem_6rem] opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gradient bg-gradient-to-r from-primary to-primary/70 animate-gradient-x mb-6">
          Loading...
        </h1>
        <p className="text-muted-foreground text-lg mb-10">
          Please wait while we prepare your dashboard. Your data is being loaded
          securely.
        </p>

        {/* Loader */}
        <div className="flex justify-center items-center space-x-3">
          <div className="w-4 h-4 bg-primary rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-primary rounded-full animate-bounce200"></div>
          <div className="w-4 h-4 bg-primary rounded-full animate-bounce400"></div>
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-xs text-muted-foreground text-center w-full">
        © {new Date().getFullYear()} Ivory. Helping people with AI dental
        assistance.
      </p>
    </div>
  );
};

export default LoadingPage;
