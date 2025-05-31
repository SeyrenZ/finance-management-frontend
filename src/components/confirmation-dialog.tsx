import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@radix-ui/react-dialog";
import XCircleIcon from "./icons/x-circle-icon";

interface ConfirmationDialogProps {
  children?: React.ReactNode;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  children,
  onConfirm,
  title,
  description,
  confirmText = "Yes, Confirm",
  cancelText = "No, I want to go back",
  isLoading = false,
}) => {
  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent showCloseButton={false} className="!max-w-xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl font-bold text-custom-grey-900">
              {title}
            </DialogTitle>
            <DialogClose className="cursor-pointer">
              <XCircleIcon className="w-6 h-6 text-custom-grey-500 hover:text-custom-grey-900" />
            </DialogClose>
          </div>
          <DialogDescription className="text-custom-grey-500  text-sm leading-relaxed mt-2">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex !flex-col gap-6 mt-4">
          <Button
            onClick={handleConfirm}
            className="w-full bg-secondary-red hover:bg-secondary-red/80 "
            disabled={isLoading}
          >
            {confirmText}
          </Button>
          <DialogClose className="w-full text-custom-grey-500 hover:text-custom-grey-900 cursor-pointer">
            {cancelText}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
