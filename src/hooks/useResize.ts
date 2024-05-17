"use client";
import { useState, useEffect } from "react";

const useResize = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

export default useResize;
