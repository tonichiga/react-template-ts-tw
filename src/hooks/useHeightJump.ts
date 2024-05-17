import { useEffect, useRef, useState } from "react";

const useHeightJump = () => {
  const [open, setOpen] = useState<boolean>(false);
  const refContainer = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (refContainer.current) {
      if (open) {
        const height = refContainer.current.scrollHeight;
        refContainer.current.style.maxHeight = `${height}px`;
        refContainer.current.style.minHeight = `${height}px`;
      } else {
        refContainer.current.style.maxHeight = `0px`;
        refContainer.current.style.minHeight = `0px`;
      }
    }
  }, [open]);

  return { refContainer, open, handleOpen, setOpen };
};

export default useHeightJump;
