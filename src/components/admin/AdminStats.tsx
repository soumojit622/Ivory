import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, UserCheck, Clock } from "lucide-react";

interface AdminStatsProps {
  totalDoctors: number;
  activeDoctors: number;
  totalAppointments: number;
  completedAppointments: number;
}

function AdminStats({
  activeDoctors,
  totalDoctors,
  completedAppointments,
  totalAppointments,
}: AdminStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {/* Total Doctors */}
      <Card className="group border border-primary/10 bg-gradient-to-br from-background to-muted/40 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-primary/25 to-primary/10 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">{totalDoctors}</p>
            <p className="text-sm text-muted-foreground">Total Doctors</p>
          </div>
        </CardContent>
      </Card>

      {/* Active Doctors */}
      <Card className="group border border-green-500/10 bg-gradient-to-br from-background to-green-100/30 dark:to-green-900/10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-green-400/20 to-green-400/10 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
            <UserCheck className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">
              {activeDoctors}
            </p>
            <p className="text-sm text-muted-foreground">Active Doctors</p>
          </div>
        </CardContent>
      </Card>

      {/* Total Appointments */}
      <Card className="group border border-blue-500/10 bg-gradient-to-br from-background to-blue-100/30 dark:to-blue-900/10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-400/20 to-blue-400/10 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
            <Calendar className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">
              {totalAppointments}
            </p>
            <p className="text-sm text-muted-foreground">Total Appointments</p>
          </div>
        </CardContent>
      </Card>

      {/* Completed Appointments */}
      <Card className="group border border-orange-500/10 bg-gradient-to-br from-background to-orange-100/30 dark:to-orange-900/10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-400/20 to-orange-400/10 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
            <Clock className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">
              {completedAppointments}
            </p>
            <p className="text-sm text-muted-foreground">
              Completed Appointments
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminStats;
