"use client";

import { createContext, useState } from "react";

interface DialogContextType {
  isRestaurantDialogIsOpen: boolean;
  setRestaurantDialogIsOpen: (isOpen: boolean) => void;
}

const defaultDialogContextValues = {
  isRestaurantDialogIsOpen: false,
  setRestaurantDialogIsOpen: () => {},
} as DialogContextType;

const DialogContext = createContext<DialogContextType>(
  defaultDialogContextValues
);
export default DialogContext;

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [isRestaurantDialogIsOpen, setRestaurantDialogIsOpen] = useState(false);

  const providerValue = { isRestaurantDialogIsOpen, setRestaurantDialogIsOpen };
  return (
    <DialogContext.Provider value={providerValue}>
      {children}
    </DialogContext.Provider>
  );
};
