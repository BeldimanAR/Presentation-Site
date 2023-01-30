import React, { useEffect, useState } from "react";

// MISC
import { DEVICE_TYPE } from "constants/variables";

export const useCurrentDevice = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [currentDevice, setCurrentDevice] = useState(DEVICE_TYPE.NONE);

  const changeWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    if (window.innerWidth >= 0 && window.innerWidth < 1279) {
      setCurrentDevice(DEVICE_TYPE.MOBILE);
    } else {
      setCurrentDevice(DEVICE_TYPE.DESKTOP);
    }
  };

  useEffect(() => {
    changeWindowSize();
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, [currentDevice]);

  return { windowSize, currentDevice };
};
