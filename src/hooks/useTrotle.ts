import { useRef } from "react";

const useTrotle = () => {
  const timer = useRef(null);

  const trotle = (callback: Function, delay: number) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback();
    }, delay);
  };
  return { trotle };
};

export default useTrotle;
