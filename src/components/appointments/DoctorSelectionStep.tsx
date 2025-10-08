import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import {
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  ShieldCheckIcon,
  Users2Icon,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { DoctorCardsLoading } from "./DoctorCardsLoading";
import { useAvailableDoctors } from "@/hooks/use-doctors";

interface DoctorSelectionStepProps {
  selectedDentistId: string | null;
  onSelectDentist: (dentistId: string) => void;
  onContinue: () => void;
}

function DoctorSelectionStep({
  onContinue,
  onSelectDentist,
  selectedDentistId,
}: DoctorSelectionStepProps) {
  const { data: dentists = [], isLoading } = useAvailableDoctors();

  if (isLoading)
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Choose Your Dentist
        </h2>
        <DoctorCardsLoading />
      </div>
    );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Choose Your Dentist
        </h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Select from our trusted professionals and book your next visit with
          confidence.
        </p>
      </div>

      {/* Dentist Grid or Empty State */}
      {dentists.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dentists.map((dentist) => {
            const isSelected = selectedDentistId === dentist.id;

            return (
              <Card
                key={dentist.id}
                onClick={() => onSelectDentist(dentist.id)}
                className={`group relative overflow-hidden cursor-pointer rounded-2xl transition-all duration-300 border bg-gradient-to-br from-background to-muted/40 hover:shadow-xl hover:-translate-y-1 ${
                  isSelected
                    ? "ring-2 ring-primary shadow-md"
                    : "hover:ring-1 hover:ring-primary/20"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Image
                        src={dentist.imageUrl!}
                        alt={dentist.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover border border-primary/20 shadow-sm group-hover:scale-105 transition-transform duration-300"
                      />
                      {isSelected && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full ring-2 ring-background" />
                      )}
                    </div>

                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold">
                        {dentist.name}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {dentist.speciality || "General Dentistry"}
                      </CardDescription>

                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          <StarIcon className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-medium">5.0</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({dentist.appointmentCount} appointments)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-primary" />
                    <span>Ivory Clinic</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-primary" />
                    <span>{dentist.phone}</span>
                  </div>

                  <p className="leading-relaxed">
                    {dentist.bio ||
                      "Delivering personalized, compassionate dental care with a focus on long-term health."}
                  </p>

                  <div className="flex items-center gap-2 pt-1">
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <ShieldCheckIcon className="w-3 h-3 text-primary" />
                      Licensed Professional
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        // Empty State
        <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed rounded-2xl bg-muted/30 backdrop-blur-sm">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <Users2Icon className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            No Dentists Available
          </h3>
          <p className="text-muted-foreground mt-2 text-sm max-w-md">
            We're currently updating our list of professionals. Please check
            back later or contact support for assistance.
          </p>
        </div>
      )}

      {/* Continue Button */}
      {selectedDentistId && (
        <div className="flex justify-end">
          <Button
            size="lg"
            onClick={onContinue}
            className="shadow-md hover:shadow-lg transition-all duration-300"
          >
            Continue to Time Selection
          </Button>
        </div>
      )}
    </div>
  );
}

export default DoctorSelectionStep;
