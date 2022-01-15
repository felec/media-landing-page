import { createContext, useContext } from 'react';

type ModalContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const ModalContext = createContext<ModalContextType>(null!);

export const useModal = () => useContext(ModalContext);
