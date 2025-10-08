"use client";

import AdminStats from "@/components/admin/AdminStats";
import DoctorsManagement from "@/components/admin/DoctorsManagement";
import RecentAppointments from "@/components/admin/RecentAppointments";
import Navbar from "@/components/Navbar";
import { useGetAppointments } from "@/hooks/use-appointment";
import { useGetDoctors } from "@/hooks/use-doctors";
import { useUser } from "@clerk/nextjs";
import { SettingsIcon } from "lucide-react";

function AdminDashboardClient() {
  const { user } = useUser();
  const { data: doctors = [], isLoading: doctorsLoading } = useGetDoctors();
  const { data: appointments = [], isLoading: appointmentsLoading } =
    useGetAppointments();

  const stats = {
    totalDoctors: doctors.length,
    activeDoctors: doctors.filter((doc) => doc.isActive).length,
    totalAppointments: appointments.length,
    completedAppointments: appointments.filter(
      (app) => app.status === "COMPLETED"
    ).length,
  };

  if (doctorsLoading || appointmentsLoading) return <LoadingUI />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24 space-y-12">
        {/* Welcome Section */}
        <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-primary/10 via-primary/5 to-background shadow-md backdrop-blur-sm">
          {/* Soft Background Accents */}
          <div className="absolute inset-0">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/30 blur-3xl opacity-20" />
            <div className="absolute -bottom-16 -right-10 w-48 h-48 bg-primary/20 blur-3xl opacity-25" />
            <div className="absolute inset-0 bg-grid-white/[0.05]" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-10">
            {/* Left Content */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-md">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Admin Dashboard
                </span>
              </div>

              <div>
                <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Welcome back, {user?.firstName || "Admin"}!
                </h1>
                <p className="text-muted-foreground mt-2 max-w-md text-base leading-relaxed">
                  Manage your clinic’s professionals, monitor appointments, and
                  track performance — all in one powerful dashboard.
                </p>
              </div>
            </div>

            {/* Right Icon */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="w-36 h-36 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center shadow-inner">
                <SettingsIcon className="w-16 h-16 text-primary" />
              </div>
              <div className="absolute inset-0 blur-2xl bg-primary/30 opacity-20 rounded-full -z-10 animate-pulse-slow" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
          <AdminStats
            totalDoctors={stats.totalDoctors}
            activeDoctors={stats.activeDoctors}
            totalAppointments={stats.totalAppointments}
            completedAppointments={stats.completedAppointments}
          />
        </div>

        {/* Doctors Management */}
        <div className="rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
          <DoctorsManagement />
        </div>

        {/* Recent Appointments */}
        <div className="rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
          <RecentAppointments />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardClient;

function LoadingUI() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <div className="flex flex-col items-center justify-center h-[70vh] space-y-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full animate-pulse" />
          </div>
          <p className="text-muted-foreground text-sm tracking-wide">
            Loading your dashboard...
          </p>
        </div>
      </div>
    </div>
  );
}
