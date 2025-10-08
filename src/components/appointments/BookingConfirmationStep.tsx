import { APPOINTMENT_TYPES } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  ChevronLeftIcon,
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  Pencil,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import DoctorInfo from "./DoctorInfo";

interface BookingConfirmationStepProps {
  selectedDentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  isBooking: boolean;
  onBack: () => void;
  onConfirm: () => void;
  onModify: () => void;
}

function BookingConfirmationStep({
  selectedDentistId,
  selectedDate,
  selectedTime,
  selectedType,
  isBooking,
  onBack,
  onConfirm,
  onModify,
}: BookingConfirmationStepProps) {
  const appointmentType = APPOINTMENT_TYPES.find((t) => t.id === selectedType);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeftIcon className="w-4 h-4" />
          Back
        </Button>
        <h2 className="text-2xl font-semibold tracking-tight">
          Confirm Your Appointment
        </h2>
      </div>

      {/* Summary Card */}
      <Card className="max-w-2xl border border-border/60 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-foreground">
            Appointment Summary
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Doctor Info */}
          <DoctorInfo doctorId={selectedDentistId} />

          {/* Appointment Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border/50">
            <Detail label="Appointment Type" value={appointmentType?.name} />
            <Detail label="Duration" value={appointmentType?.duration} />
            <Detail
              label="Date"
              icon={<Calendar className="w-4 h-4 text-muted-foreground" />}
              value={new Date(selectedDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
            <Detail
              label="Time"
              icon={<Clock className="w-4 h-4 text-muted-foreground" />}
              value={selectedTime}
            />
            <Detail
              label="Location"
              icon={<MapPin className="w-4 h-4 text-muted-foreground" />}
              value="Dental Center"
            />
            <Detail
              label="Cost"
              icon={<CreditCard className="w-4 h-4 text-muted-foreground" />}
              value={appointmentType?.price}
              highlight
            />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <Button
          variant="outline"
          onClick={onModify}
          className="border border-border hover:border-primary/60 hover:bg-muted/40 transition-all flex items-center gap-2"
        >
          <Pencil className="w-4 h-4 text-muted-foreground" />
          Modify Appointment
        </Button>

        <Button
          onClick={onConfirm}
          disabled={isBooking}
          className="bg-primary text-white hover:bg-primary/90 transition-all flex items-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4" />
          {isBooking ? "Booking..." : "Confirm Booking"}
        </Button>
      </div>
    </div>
  );
}

/* Reusable detail row */
function Detail({
  label,
  value,
  icon,
  highlight,
}: {
  label: string;
  value?: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col space-y-1.5">
      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
        {icon}
        {label}
      </p>
      <p
        className={`font-medium ${
          highlight ? "text-primary" : "text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default BookingConfirmationStep;
