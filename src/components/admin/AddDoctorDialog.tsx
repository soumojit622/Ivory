import { useCreateDoctor } from "@/hooks/use-doctors";
import { Gender } from "@prisma/client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { formatPhoneNumber } from "@/lib/utils";
import {
  User,
  Mail,
  Phone,
  Stethoscope,
  VenusAndMars,
  ActivitySquare,
  Plus,
  Loader2,
  X,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";

interface AddDoctorDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddDoctorDialog({ isOpen, onClose }: AddDoctorDialogProps) {
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    email: "",
    phone: "",
    speciality: "",
    gender: "MALE" as Gender,
    isActive: true,
  });

  const createDoctorMutation = useCreateDoctor();

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    setNewDoctor({ ...newDoctor, phone: formatted });
  };

  const handleSave = () => {
    if (!newDoctor.name || !newDoctor.email || !newDoctor.speciality) {
      toast.error("Please fill all required fields before saving.", {
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
      });
      return;
    }

    createDoctorMutation.mutate(
      { ...newDoctor },
      {
        onSuccess: () => {
          toast.success("Doctor added successfully!", {
            icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
          });
          handleClose();
        },
        onError: () => {
          toast.error("Failed to add doctor. Please try again.", {
            icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
          });
        },
      }
    );
  };

  const handleClose = () => {
    onClose();
    setNewDoctor({
      name: "",
      email: "",
      phone: "",
      speciality: "",
      gender: "MALE",
      isActive: true,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[520px] p-6 rounded-2xl border border-border/40 shadow-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold tracking-tight flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Add New Doctor
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Fill in the details below to add a new doctor to your practice.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="new-name" className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                Full Name *
              </Label>
              <Input
                id="new-name"
                value={newDoctor.name}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, name: e.target.value })
                }
                placeholder="Dr. John Smith"
                className="focus-visible:ring-2 focus-visible:ring-primary/40"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="new-speciality"
                className="flex items-center gap-2"
              >
                <Stethoscope className="h-4 w-4 text-muted-foreground" />
                Speciality *
              </Label>
              <Input
                id="new-speciality"
                value={newDoctor.speciality}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, speciality: e.target.value })
                }
                placeholder="Cardiologist"
                className="focus-visible:ring-2 focus-visible:ring-primary/40"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-email" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              Email *
            </Label>
            <Input
              id="new-email"
              type="email"
              value={newDoctor.email}
              onChange={(e) =>
                setNewDoctor({ ...newDoctor, email: e.target.value })
              }
              placeholder="doctor@example.com"
              className="focus-visible:ring-2 focus-visible:ring-primary/40"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              Phone
            </Label>
            <Input
              id="new-phone"
              value={newDoctor.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              placeholder="(555) 123-4567"
              className="focus-visible:ring-2 focus-visible:ring-primary/40"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="new-gender" className="flex items-center gap-2">
                <VenusAndMars className="h-4 w-4 text-muted-foreground" />
                Gender
              </Label>
              <Select
                value={newDoctor.gender || ""}
                onValueChange={(value) =>
                  setNewDoctor({ ...newDoctor, gender: value as Gender })
                }
              >
                <SelectTrigger className="focus-visible:ring-2 focus-visible:ring-primary/40">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MALE">Male</SelectItem>
                  <SelectItem value="FEMALE">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-status" className="flex items-center gap-2">
                <ActivitySquare className="h-4 w-4 text-muted-foreground" />
                Status
              </Label>
              <Select
                value={newDoctor.isActive ? "active" : "inactive"}
                onValueChange={(value) =>
                  setNewDoctor({ ...newDoctor, isActive: value === "active" })
                }
              >
                <SelectTrigger className="focus-visible:ring-2 focus-visible:ring-primary/40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <DialogFooter className="pt-4 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={handleClose}
            className="transition-all hover:bg-muted/60 flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            Cancel
          </Button>

          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-sm transition-all flex items-center gap-2"
            disabled={
              !newDoctor.name ||
              !newDoctor.email ||
              !newDoctor.speciality ||
              createDoctorMutation.isPending
            }
          >
            {createDoctorMutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Adding...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Add Doctor
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddDoctorDialog;
