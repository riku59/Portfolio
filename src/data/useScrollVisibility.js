import { useEffect, useRef, useState } from "react";
import { isElementVisible } from "../data/scrollUtils";

const useScrollVisibility = (elementRef) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const isVisible = isElementVisible(elementRef);
    setIsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);

  return isVisible;
};

export default useScrollVisibility;
