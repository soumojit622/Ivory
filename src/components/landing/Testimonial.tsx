"use client";

import Image from "next/image";
import { StarIcon, QuoteIcon, MessageCircleHeartIcon } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Mehta",
    role: "Dental Surgeon, SmileCare Clinic",
    feedback:
      "Ivory helps me explain treatments easily and improves communication with patients. It's like having a digital assistant for my clinic.",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Rahul Sharma",
    role: "Patient from Mumbai",
    feedback:
      "I used Ivory to understand my tooth pain symptoms and it gave me instant, clear insights. I even booked an appointment in minutes!",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Dr. Sofia Thomas",
    role: "Orthodontist, Align Dental Studio",
    feedback:
      "Ivory saves me so much time. It's intuitive, accurate, and helps keep patients informed even when I'm not available.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Amit Verma",
    role: "Patient from Delhi",
    feedback:
      "Ivory explained my dental issue in seconds and helped me find a nearby dentist. It’s genuinely a smart companion.",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Dr. Emily Roy",
    role: "Cosmetic Dentist",
    feedback:
      "Ivory is the future of dental support — clear answers, great UX, and always available for patients.",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-primary/10 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-primary/10 blur-2xl rounded-full animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full border border-primary/20 backdrop-blur-sm mb-8">
          <MessageCircleHeartIcon className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">
            Trusted by Dentists & Patients
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
            Real voices from
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            the Ivory community
          </span>
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-20 leading-relaxed">
          Hear how Ivory is transforming patient communication and simplifying
          dental care for professionals everywhere.
        </p>

        {/* Scrolling Testimonials */}
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll-slow">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[320px] sm:min-w-[360px] md:min-w-[400px] bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border border-border/40 rounded-3xl p-8 transition-all duration-500 hover:scale-[1.03] hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 relative"
              >
                <QuoteIcon className="absolute top-6 right-6 text-primary/30 w-6 h-6" />
                <div className="flex flex-col items-center text-center gap-5">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-primary/20 object-cover shadow-md"
                  />
                  <div className="flex gap-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed italic bg-muted/20 p-4 rounded-2xl border border-border/30">
                    “{testimonial.feedback}”
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edge Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}
