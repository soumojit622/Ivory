import { useUpdateDoctor } from "@/hooks/use-doctors";
import { formatPhoneNumber } from "@/lib/utils";
import { Doctor, Gender } from "@prisma/client";
import { useState, useEffect } from "react";
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
import {
  User,
  Mail,
  Phone,
  Stethoscope,
  VenusAndMars,
  ActivitySquare,
  Loader2,
  CheckCircle2,
  X,
} from "lucide-react";
import { toast } from "sonner";

interface EditDoctorDialogProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
}

function EditDoctorDialog({ doctor, isOpen, onClose }: EditDoctorDialogProps) {
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(doctor);

  const updateDoctorMutation = useUpdateDoctor();

  useEffect(() => {
    setEditingDoctor(doctor);
  }, [doctor]);

  const handlePhoneChange = (value: string) => {
    const formattedPhoneNumber = formatPhoneNumber(value);
    if (editingDoctor)
      setEditingDoctor({ ...editingDoctor, phone: formattedPhoneNumber });
  };

  const handleSave = () => {
    if (
      !editingDoctor?.name ||
      !editingDoctor?.email ||
      !editingDoctor?.speciality
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    updateDoctorMutation.mutate(editingDoctor, {
      onSuccess: () => {
        toast.success("Doctor updated successfully!", {
          icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
        });
        handleClose();
      },
      onError: () => {
        toast.error("Failed to update doctor. Please try again.");
      },
    });
  };

  const handleClose = () => {
    onClose();
    setEditingDoctor(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[520px] p-6 rounded-2xl border border-border/40 shadow-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <User className="w-5 h-5 text-primary" /> Edit Doctor
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Update doctor information and status below.
          </DialogDescription>
        </DialogHeader>

        {editingDoctor && (
          <div className="grid gap-5 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" /> Name *
                </Label>
                <Input
                  id="name"
                  value={editingDoctor.name}
                  onChange={(e) =>
                    setEditingDoctor({ ...editingDoctor, name: e.target.value })
                  }
                  placeholder="Dr. John Smith"
                  className="focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="speciality" className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-muted-foreground" />{" "}
                  Speciality *
                </Label>
                <Input
                  id="speciality"
                  value={editingDoctor.speciality}
                  onChange={(e) =>
                    setEditingDoctor({
                      ...editingDoctor,
                      speciality: e.target.value,
                    })
                  }
                  placeholder="Cardiologist"
                  className="focus-visible:ring-2 focus-visible:ring-primary/40"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" /> Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={editingDoctor.email}
                onChange={(e) =>
                  setEditingDoctor({ ...editingDoctor, email: e.target.value })
                }
                placeholder="doctor@example.com"
                className="focus-visible:ring-2 focus-visible:ring-primary/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" /> Phone
              </Label>
              <Input
                id="phone"
                value={editingDoctor.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="(555) 123-4567"
                className="focus-visible:ring-2 focus-visible:ring-primary/40"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender" className="flex items-center gap-2">
                  <VenusAndMars className="w-4 h-4 text-muted-foreground" />{" "}
                  Gender
                </Label>
                <Select
                  value={editingDoctor.gender || ""}
                  onValueChange={(value) =>
                    setEditingDoctor({
                      ...editingDoctor,
                      gender: value as Gender,
                    })
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
                <Label htmlFor="status" className="flex items-center gap-2">
                  <ActivitySquare className="w-4 h-4 text-muted-foreground" />{" "}
                  Status
                </Label>
                <Select
                  value={editingDoctor.isActive ? "active" : "inactive"}
                  onValueChange={(value) =>
                    setEditingDoctor({
                      ...editingDoctor,
                      isActive: value === "active",
                    })
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
        )}

        <DialogFooter className="pt-4 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={handleClose}
            className="transition-all hover:bg-muted/60 flex items-center gap-2"
          >
            <X className="w-4 h-4" /> Cancel
          </Button>

          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-sm transition-all flex items-center gap-2"
            disabled={updateDoctorMutation.isPending}
          >
            {updateDoctorMutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Saving...
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" /> Save Changes
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditDoctorDialog;
