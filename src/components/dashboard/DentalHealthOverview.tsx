import { getUserAppointmentStats } from "@/lib/actions/appointments";
import { currentUser } from "@clerk/nextjs/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BrainIcon, MessageSquareIcon } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "../ui/button";

async function DentalHealthOverview() {
  const appointmentStats = await getUserAppointmentStats();
  const user = await currentUser();

  return (
    <Card className="lg:col-span-2 relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-500 border border-border/20">
      {/* Decorative background orbs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse-slow pointer-events-none" />

      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground text-xl md:text-2xl font-bold">
          <BrainIcon className="w-5 h-5 text-primary" />
          Your Dental Health
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Keep track of your dental care journey
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              value: appointmentStats.completedAppointments,
              label: "Completed Visits",
            },
            {
              value: appointmentStats.totalAppointments,
              label: "Total Appointments",
            },
            {
              value: format(new Date(user?.createdAt!), "MMM yyyy"),
              label: "Member Since",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
              <MessageSquareIcon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg md:text-xl font-semibold text-primary mb-1">
                Ready to get started?
              </h4>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Book your first appointment or try our AI voice assistant for
                instant dental guidance.
              </p>
              <div className="flex flex-col md:flex-row gap-3">
                <Link href="/voice">
                  <Button className="w-full md:w-auto  py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    Try AI Assistant
                  </Button>
                </Link>
                <Link href="/appointments">
                  <Button
                    variant="outline"
                    className="w-full md:w-auto border-2 border-primary/20 hover:border-primary/40 font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DentalHealthOverview;
