import { useCallback, useState } from "react";

export default function useDropdownState() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return { isOpen, toggle, open, close };
}
