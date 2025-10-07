"use client";

import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  const avatars = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 sm:pt-24 md:pt-28">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      {/* GRADIENT ORBS */}
      <div className="absolute top-20 left-1/4 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl animate-float" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-8 md:space-y-10 text-center lg:text-left">
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm mx-auto lg:mx-0">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">
                  Smart AI Dental Assistant
                </span>
              </div>

              {/* HEADING */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Talk to Ivory,
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  your AI dental
                </span>
                <br />
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  care companion
                </span>
              </h1>

              {/* SUBTEXT */}
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Ivory gives you instant answers to dental questions, helps you
                book appointments, and provides personalized oral care guidance
                — all through natural, human-like voice conversations.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-base sm:text-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 shadow-lg"
                  >
                    <MicIcon className="mr-2 h-5 w-5" />
                    Talk to Ivory
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-base sm:text-lg border-primary/30 hover:bg-primary/10"
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    Schedule a Visit
                  </Button>
                </SignUpButton>
              </div>

              {/* TESTIMONIALS */}
              <div className="pt-6 sm:pt-8">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                  <div className="flex -space-x-3">
                    {avatars.map((src, i) => (
                      <Image
                        key={i}
                        src={src}
                        alt={`User avatar ${i + 1}`}
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 sm:ring-4 ring-background transition-transform duration-300 hover:scale-110"
                      />
                    ))}
                  </div>

                  <div className="text-center sm:text-left space-y-1">
                    <div className="flex justify-center sm:justify-start items-center gap-1 sm:gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                      <span className="text-sm sm:text-base font-bold text-foreground">
                        4.9/5
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Trusted by{" "}
                      <span className="font-semibold text-foreground">
                        1,200+ patients
                      </span>{" "}
                      and dental professionals worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative lg:pl-8 flex justify-center">
              {/* FLOATING DECORATIVE SHAPES */}
              <div className="absolute -top-4 -left-4 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl animate-float-slow"></div>

              <Image
                src="/hero.png"
                alt="Ivory AI Assistant"
                width={500}
                height={500}
                priority
                className="w-64 sm:w-80 md:w-[500px] lg:w-[550px] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
