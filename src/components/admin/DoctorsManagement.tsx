import { useGetDoctors } from "@/hooks/use-doctors";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  EditIcon,
  MailIcon,
  PhoneIcon,
  PlusIcon,
  StethoscopeIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";

import { Doctor } from "@prisma/client";
import EditDoctorDialog from "./EditDoctorDialog";
import AddDoctorDialog from "./AddDoctorDialog";

function DoctorsManagement() {
  const { data: doctors = [] } = useGetDoctors();

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleEditDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <>
      <Card className="mb-12 border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl bg-gradient-to-br from-background to-muted/30">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-4">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              <StethoscopeIcon className="w-5 h-5 text-primary" />
              Doctors Management
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Manage your clinic’s doctors, update their details, and track
              activity.
            </CardDescription>
          </div>

          <Button
            onClick={() => setIsAddDialogOpen(true)}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/100 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
          >
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Doctor
          </Button>
        </CardHeader>

        <CardContent className="p-6">
          {doctors.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
              <StethoscopeIcon className="w-12 h-12 text-muted-foreground opacity-70" />
              <p className="text-lg font-medium text-muted-foreground">
                No doctors found
              </p>
              <p className="text-sm text-muted-foreground">
                Add a doctor to get started managing your clinic’s team.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-gradient-to-r from-background to-muted/40 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  {/* Doctor Info */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={doctor.imageUrl}
                      alt={doctor.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full object-cover border border-primary/20 shadow-sm"
                    />

                    <div>
                      <div className="font-semibold text-foreground text-base">
                        {doctor.name}
                      </div>
                      <div className="text-sm text-muted-foreground mt-0.5">
                        {doctor.speciality || "General Dentistry"}
                        <span className="ml-2 px-2 py-0.5 bg-muted rounded text-xs font-medium">
                          {doctor.gender === "MALE" ? "Male" : "Female"}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MailIcon className="w-3 h-3" />
                          {doctor.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <PhoneIcon className="w-3 h-3" />
                          {doctor.phone}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <div className="font-semibold text-primary">
                        {doctor.appointmentCount}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Appointments
                      </div>
                    </div>

                    {doctor.isActive ? (
                      <Badge className="bg-green-100 text-green-800 border border-green-200 hover:bg-green-100">
                        Active
                      </Badge>
                    ) : (
                      <Badge variant="destructive">Inactive</Badge>
                    )}

                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 px-3 hover:bg-primary/10 transition-all"
                      onClick={() => handleEditDoctor(doctor)}
                    >
                      <EditIcon className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <AddDoctorDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
      />

      <EditDoctorDialog
        key={selectedDoctor?.id}
        isOpen={isEditDialogOpen}
        onClose={handleCloseEditDialog}
        doctor={selectedDoctor}
      />
    </>
  );
}

export default DoctorsManagement;
