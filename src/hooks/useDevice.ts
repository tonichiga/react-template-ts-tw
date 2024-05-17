"use client";
import { useEffect, useState } from "react";

const useDevice = () => {
  const [device, setDevice] = useState("desktop");

  const findResolution = () => {
    if (window.innerWidth < 768) {
      setDevice("mobile");
    } else if (window.innerWidth < 1440) {
      setDevice("tablet");
    } else if (window.innerWidth < 1920) {
      setDevice("laptop");
    } else {
      setDevice("desktop");
    }
  };

  useEffect(() => {
    findResolution();

    window.addEventListener("resize", (e) => {
      findResolution();
    });
  }, []);

  return device;
};

export default useDevice;
