import { ChevronRightIcon, CheckIcon } from "lucide-react";

const PROGRESS_STEPS = ["Select Dentist", "Choose Time", "Confirm"];

function ProgressSteps({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-center md:justify-start gap-6 mb-10">
      {PROGRESS_STEPS.map((stepName, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep >= stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <div key={stepNumber} className="flex items-center gap-3">
            {/* Step Circle */}
            <div
              className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
                isCompleted
                  ? "bg-gradient-to-br from-primary to-primary/80 text-white shadow-md"
                  : isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {isCompleted ? (
                <CheckIcon className="w-4 h-4" />
              ) : (
                <span className="font-semibold text-sm">{stepNumber}</span>
              )}
            </div>

            {/* Step Label */}
            <div className="flex flex-col">
              <span
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {stepName}
              </span>
              {isActive && (
                <div className="h-0.5 w-6 bg-primary rounded-full mt-1 md:hidden" />
              )}
            </div>

            {/* Connector */}
            {stepNumber < PROGRESS_STEPS.length && (
              <ChevronRightIcon
                className={`w-4 h-4 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressSteps;
