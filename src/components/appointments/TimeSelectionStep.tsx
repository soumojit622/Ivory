import { useBookedTimeSlots } from "@/hooks/use-appointment";
import {
  APPOINTMENT_TYPES,
  getAvailableTimeSlots,
  getNext5Days,
} from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ClockIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface TimeSelectionStepProps {
  selectedDentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onTypeChange: (type: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

function TimeSelectionStep({
  onBack,
  onContinue,
  onDateChange,
  onTimeChange,
  onTypeChange,
  selectedDate,
  selectedDentistId,
  selectedTime,
  selectedType,
}: TimeSelectionStepProps) {
  const { data: bookedTimeSlots = [] } = useBookedTimeSlots(
    selectedDentistId,
    selectedDate
  );

  const availableDates = getNext5Days();
  const availableTimeSlots = getAvailableTimeSlots();

  const handleDateSelect = (date: string) => {
    onDateChange(date);
    onTimeChange(""); // reset time
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all"
          >
            <ChevronLeftIcon className="w-4 h-4" />
            Back
          </Button>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
            Select Date & Time
          </h2>
        </div>
        <p className="text-muted-foreground mt-1 md:mt-0 text-sm max-w-md">
          Choose an appointment type, date, and time that fits your schedule.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Appointment Type */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Appointment Type</h3>
          <div className="space-y-3">
            {APPOINTMENT_TYPES.map((type) => (
              <Card
                key={type.id}
                onClick={() => onTypeChange(type.id)}
                className={`cursor-pointer transition-all duration-300 rounded-2xl border border-border bg-background hover:border-primary/50 hover:shadow-md ${
                  selectedType === type.id
                    ? "ring-2 ring-primary bg-primary/10"
                    : ""
                }`}
              >
                <CardContent className="p-5 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-foreground font-medium text-lg">
                        {type.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {type.duration}
                      </p>
                    </div>
                    <span className="font-semibold text-primary">
                      {type.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Date & Time Selection */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Available Dates</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {availableDates.map((date) => (
              <Button
                key={date}
                onClick={() => handleDateSelect(date)}
                variant={selectedDate === date ? "default" : "outline"}
                className={`p-3 h-auto border border-border/30 rounded-lg transition-all duration-300 ${
                  selectedDate === date
                    ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-md hover:shadow-lg"
                    : "hover:bg-primary/5"
                }`}
              >
                <div className="text-center">
                  <div className="font-medium">
                    {new Date(date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </Button>
            ))}
          </div>

          {selectedDate && (
            <div className="space-y-4 mt-4">
              <h4 className="font-medium text-lg">Available Times</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {availableTimeSlots.map((time) => {
                  const isBooked = bookedTimeSlots.includes(time);
                  const isSelected = selectedTime === time;
                  return (
                    <Button
                      key={time}
                      onClick={() => !isBooked && onTimeChange(time)}
                      size="sm"
                      disabled={isBooked}
                      className={`
              flex items-center justify-center gap-1 text-sm rounded-lg 
              border border-border/30 px-3 py-2 transition-all duration-300
              ${
                isSelected
                  ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-md hover:shadow-lg"
                  : "bg-background hover:bg-primary/5 hover:shadow-sm"
              }
              ${isBooked ? "opacity-50 cursor-not-allowed" : ""}
            `}
                    >
                      <ClockIcon
                        className={`w-3 h-3 ${
                          isSelected ? "text-white" : "text-primary"
                        }`}
                      />
                      {time}
                      {isBooked && (
                        <span className="ml-1 text-xs text-muted-foreground">
                          (Booked)
                        </span>
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Continue Button */}
      {selectedType && selectedDate && selectedTime && (
        <div className="flex justify-end mt-6">
          <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/100 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-lg border border-border/30">
            Review Booking
          </Button>
        </div>
      )}
    </div>
  );
}

export default TimeSelectionStep;
