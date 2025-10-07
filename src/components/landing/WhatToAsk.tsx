import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";

function WhatToAsk() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full border border-primary/20 backdrop-blur-sm mb-6">
            <MessageCircleIcon className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              AI-Powered Guidance
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
              Ask about
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              any dental concern
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether it’s a simple question or a detailed concern, Ivory provides
            expert guidance trained on thousands of real-world dental cases.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Chat Examples */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8">
              Common questions Ivory can answer:
            </h3>

            {[
              {
                title: "My tooth hurts when I bite down",
                desc: "Discover possible causes, pain relief tips, and guidance on when to visit a dentist.",
                tags: ["Quick Response", "Pain Management"],
              },
              {
                title: "How much does teeth whitening cost?",
                desc: "Compare prices, explore treatment options, and choose the best whitening solution for your budget.",
                tags: ["Cost Insights", "Treatment Options"],
              },
              {
                title: "When should I replace my filling?",
                desc: "Learn about filling longevity, warning signs of wear, and the right timing for replacement.",
                tags: ["Preventive Care", "Maintenance Tips"],
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                      <MessageSquareIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                        <p className="font-semibold text-primary">
                          {item.title}
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                        <div className="flex gap-2 mt-3 flex-wrap">
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - AI Illustration */}
          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 flex items-center justify-center">
            <Image
              src="/confused.png"
              alt="Ivory AI Assistant"
              width={500}
              height={500}
              className="w-full h-auto max-w-lg object-contain animate-fadeIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatToAsk;
