"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  CheckCircleIcon,
  MailIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  XCircleIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";

interface AppointmentConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  appointmentDetails: {
    doctorName: string;
    appointmentDate: string;
    appointmentTime: string;
    userEmail: string;
  } | null;
}

export function AppointmentConfirmationModal({
  open,
  onOpenChange,
  appointmentDetails,
}: AppointmentConfirmationModalProps) {
  useEffect(() => {
    if (open && appointmentDetails) {
      // ✅ Success toast
      toast.success("Appointment Confirmed", {
        description: `Your appointment with ${appointmentDetails.doctorName} on ${appointmentDetails.appointmentDate} at ${appointmentDetails.appointmentTime} has been successfully booked.`,
        duration: 5000,
      });
    } else if (open && !appointmentDetails) {
      // ❌ Failure toast
      toast.error("Booking Failed", {
        description:
          "We couldn’t confirm your appointment. Please try again later.",
        duration: 5000,
      });
    }
  }, [open, appointmentDetails]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            {appointmentDetails ? (
              <CheckCircleIcon className="h-8 w-8 text-primary" />
            ) : (
              <XCircleIcon className="h-8 w-8 text-destructive" />
            )}
          </div>

          <DialogTitle className="text-xl font-semibold text-center">
            {appointmentDetails
              ? "Appointment Confirmed!"
              : "Appointment Not Confirmed"}
          </DialogTitle>

          <DialogDescription className="text-center text-muted-foreground">
            {appointmentDetails
              ? "Your appointment has been successfully booked"
              : "Something went wrong while confirming your appointment"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {appointmentDetails && (
            <>
              {/* Email Notification Section */}
              <div className="flex flex-col items-center space-y-3">
                <Image
                  src="/email-sent.png"
                  alt="Email sent"
                  width={120}
                  height={120}
                  className="mx-auto"
                />

                <div className="text-center space-y-1">
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary">
                    <MailIcon className="h-4 w-4" />
                    Details sent to your inbox
                  </div>
                  {appointmentDetails?.userEmail && (
                    <p className="text-xs text-muted-foreground">
                      {appointmentDetails.userEmail}
                    </p>
                  )}
                </div>
              </div>

              {/* Appointment Summary */}
              <div className="bg-muted/30 rounded-lg p-4 space-y-3 border border-border/50 hover:border-primary/40 transition-all duration-300">
                <h4 className="font-medium text-sm text-center mb-3">
                  Quick Summary
                </h4>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm">
                    <UserIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">
                      {appointmentDetails.doctorName}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span>{appointmentDetails.appointmentDate}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <ClockIcon className="h-4 w-4 text-muted-foreground" />
                    <span>{appointmentDetails.appointmentTime}</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            {appointmentDetails && (
              <Link href="/appointments" className="w-full">
                <Button
                  className="w-full shadow-sm hover:shadow-md transition-all"
                  onClick={() => onOpenChange(false)}
                >
                  View My Appointments
                </Button>
              </Link>
            )}

            <Button
              variant="outline"
              className="w-full hover:bg-muted/40 transition-all"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>

          {/* Additional Info */}
          {appointmentDetails && (
            <div className="text-center text-xs text-muted-foreground border-t pt-4">
              <p>
                Please arrive 15 minutes early for your appointment.
                <br />
                Need to reschedule? Contact us 24 hours in advance.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
