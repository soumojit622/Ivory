import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

function HowItWorks() {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto z-10">
      {/* HEADER */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full border border-primary/20 backdrop-blur-md mb-6 shadow-sm">
          <ZapIcon className="size-5 text-primary animate-pulse" />
          <span className="text-sm font-semibold text-primary">
            Easy & Intuitive
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
            3 simple steps
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            to smarter dental care
          </span>
        </h2>

        <p className="text-xl md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Ivory guides you through effortless dental care—fast, reliable, and
          personalized for your oral health.
        </p>
      </div>

      {/* STEPS */}
      <div className="relative">
        {/* CONNECTION LINE */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          {[
            {
              number: 1,
              icon: "/audio.png",
              alt: "Voice Interaction",
              title: "Ask Your Questions",
              desc: "Connect with Ivory to get immediate answers to any dental concerns, from symptoms to treatments and oral care tips.",
              tags: ["24/7 Support", "Instant Answers"],
            },
            {
              number: 2,
              icon: "/brain.png",
              alt: "AI Insights",
              title: "Receive Tailored Advice",
              desc: "Ivory uses advanced AI to provide professional, personalized dental guidance based on real-world cases.",
              tags: ["AI-Powered", "Personalized"],
            },
            {
              number: 3,
              icon: "/calendar.png",
              alt: "Appointment Booking",
              title: "Book & Receive Care",
              desc: "Schedule appointments with verified dentists and get follow-up care easily while tracking your oral health journey.",
              tags: ["Verified Dentists", "Continuous Care"],
            },
          ].map((step) => (
            <div key={step.number} className="relative group h-full flex">
              <div className="relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl rounded-3xl p-8 border border-border/30 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 flex flex-col h-full">
                <div className="absolute -top-4 left-8 w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-base font-bold shadow-lg">
                  {step.number}
                </div>

                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6 shadow-sm">
                  <Image
                    src={step.icon}
                    alt={step.alt}
                    width={48}
                    height={48}
                    className="w-16"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed mb-6 flex-grow">
                  {step.desc}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {step.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="text-center mt-16">
        <SignUpButton mode="modal">
          <Button size="lg" className="hover:scale-105 transition-transform">
            <ArrowRightIcon className="mr-2 size-5" />
            Get Started with Ivory
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
}

export default HowItWorks;
