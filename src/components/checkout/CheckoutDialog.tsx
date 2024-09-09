import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Progress } from "../ui/progress";
import { useState } from "react";
import StepUser from "./StepUser";
import StepAddress from "./StepAddress";
import StepFinish from "./StepFinish";
import { CheckoutSteps } from "@/types/checkoutSteps";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function CheckoutDialog({ open, onOpenChange }: Props) {
  const [step, setStep] = useState<CheckoutSteps>("user");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step === "user" && "Dados Pessoais"}
            {step === "address" && "Dados Endereço de entrega"}
            {step === "finish" && "Envio para WhatsApp"}
          </DialogTitle>
        </DialogHeader>

        <Progress
          value={step === "user" ? 30 : step === "address" ? 70 : 100}
        />
        <div className="flex flex-col gap-3">
          {step === "user" && <StepUser setStep={setStep} />}
          {step === "address" && <StepAddress setStep={setStep} />}
          {step === "finish" && <StepFinish />}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CheckoutDialog;
