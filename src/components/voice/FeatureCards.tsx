import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MicIcon, ShieldIcon, CalendarIcon } from "lucide-react";

function FeatureCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {/* How to Use Card */}
      <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-primary/20 rounded-2xl">
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-lg md:text-xl font-bold">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/25 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MicIcon className="h-6 w-6 text-primary" />
            </div>
            How to Use
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Quick steps to start with voice assistance
          </CardDescription>
        </CardHeader>

        <CardContent className="relative space-y-3">
          {[
            "Click the microphone button to start talking",
            "Ask questions about dental health and treatments",
            "Receive instant AI voice responses",
            "View conversation transcripts in real-time",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 animate-pulse-slow" />
              <span className="text-sm md:text-base">{step}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Features Card */}
      <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-primary/20 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-lg md:text-xl font-bold">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/25 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ShieldIcon className="h-6 w-6 text-primary" />
            </div>
            Features
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Advanced capabilities for smarter dental care
          </CardDescription>
        </CardHeader>

        <CardContent className="relative space-y-3">
          {[
            {
              icon: <MicIcon className="h-4 w-4 text-primary" />,
              text: "Real-time Voice Recognition",
            },
            {
              icon: <ShieldIcon className="h-4 w-4 text-primary" />,
              text: "AI-Powered Responses",
            },
            {
              icon: <CalendarIcon className="h-4 w-4 text-primary" />,
              text: "Conversation History",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-center p-3 bg-muted/30 rounded-xl transition-all hover:bg-primary/10 hover:shadow-md"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mr-3">
                {feature.icon}
              </div>
              <span className="font-medium text-sm md:text-base">
                {feature.text}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default FeatureCards;
