import { CalendarIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

function NoNextAppointments() {
  return (
    <Card className="relative overflow-hidden rounded-2xl border border-border/20 shadow-sm hover:shadow-lg transition-shadow duration-500">
      {/* Decorative background orbs */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse-slow pointer-events-none" />

      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground text-xl md:text-2xl font-bold">
          <CalendarIcon className="w-5 h-5 text-primary" />
          Your Appointments
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          No scheduled visits yet. Schedule one today!
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="text-center py-10">
          {/* Icon Container */}
          <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 shadow-md group-hover:scale-105 transition-transform duration-300">
            <CalendarIcon className="w-10 h-10 text-primary/80" />
          </div>

          {/* Message */}
          <p className="text-base md:text-lg text-foreground/70 font-medium mb-6">
            You have no upcoming appointments
          </p>

          {/* Button */}
          <Link href="/appointments">
            <Button size="sm" variant="default" className="w-full">
              Schedule Your Next Visit
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default NoNextAppointments;
