import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CrownIcon, LockIcon, MicIcon } from "lucide-react";
import Link from "next/link";

function ProPlanRequired() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24 space-y-12">
        {/* Access Denied Section */}
        <div className="relative overflow-hidden">
          {/* Background Glow Orbs */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse-slow pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 bg-gradient-to-br from-primary/10 to-background/60 rounded-3xl p-8 border border-primary/20 shadow-lg hover:shadow-2xl transition-shadow duration-500">
            {/* Left Content */}
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-md">
                <LockIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Pro Feature
                </span>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
                  Voice Assistant Access Required
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed">
                  Upgrade to AI Pro or AI Basic to unlock unlimited voice
                  consultations with Ivory’s AI dental assistant.
                </p>
              </div>
            </div>

            {/* Right Icon */}
            <div className="hidden lg:flex items-center justify-center w-36 h-36 bg-gradient-to-br from-primary/25 to-primary/10 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-500 animate-fadeIn">
              <MicIcon className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>

        {/* Upgrade Card */}
        <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-primary/20 rounded-2xl max-w-2xl mx-auto">
          {/* Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

          <CardContent className="relative p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
              <LockIcon className="w-12 h-12 text-primary" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Upgrade Required
            </h3>
            <p className="text-muted-foreground text-base md:text-lg mb-6">
              The voice assistant is exclusive to AI Pro and AI Basic
              subscribers. Get instant dental advice via natural voice
              conversations.
            </p>

            <div className="space-y-3 mb-6">
              {[
                "24/7 voice consultations",
                "Professional dental guidance",
                "Instant pain relief advice",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 justify-center">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse-slow" />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/pro">
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                <CrownIcon className="mr-2 h-5 w-5" />
                Upgrade to Pro
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ProPlanRequired;
