import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MicIcon, CalendarIcon } from "lucide-react";

function CTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-muted/10 via-background to-muted/5">
      {/* Background Glow, Pattern & Particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#e2e8f0_1px,transparent_1px),linear-gradient(180deg,#e2e8f0_1px,transparent_1px)] bg-[length:4rem_4rem] opacity-10"></div>
        <div className="absolute inset-0">
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full border border-primary/20 backdrop-blur-sm animate-fade-in">
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
              <span className="text-xs font-semibold text-primary">
                Here for You Anytime
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                Take control of
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                your dental wellness
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Join over 1,200 patients who trust our AI for fast guidance,
              personalized tips, and reliable dental care anytime, anywhere.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="flex items-center justify-center gap-2 px-6 py-3 font-semibold bg-gradient-to-r from-primary to-primary/90  shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
              >
                <MicIcon className="h-5 w-5" />
                Start Free Chat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center justify-center gap-2 px-6 py-3 font-semibold border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 rounded-xl"
              >
                <CalendarIcon className="h-5 w-5" />
                Schedule Appointment
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Badge */}
              <div className="absolute -top-6 left-4 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg z-10 flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                24/7 Availability
              </div>

              {/* Main Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl scale-110 animate-pulse-slow"></div>
                <Image
                  src="/cta.png"
                  alt="Ivory AI Assistant"
                  width={380}
                  height={380}
                  className="relative w-80 h-auto drop-shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Decorative Floating Shapes */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -top-12 -right-14 w-20 h-20 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full blur-3xl animate-float-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
