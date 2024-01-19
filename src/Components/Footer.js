import React from "react";

function Footer({ customText }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-xs p-5 bg-gray-200 text-center w-full bottom-0 z-10">
      &copy; {customText || `Copyright ${currentYear}`}
    </footer>
  );
}

export default Footer;
