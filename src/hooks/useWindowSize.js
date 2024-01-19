import { useState, useEffect } from "react";

// Custom hook for responsive window width
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    // Updates window size on resize
    const handleResize = () => {
      // Set window size with a max width of 1170px and a 24px margin on either side
      setWindowSize(
        window.innerWidth - 24 > 1170 ? 1170 : window.innerWidth - 24
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial size

    // Remove listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
