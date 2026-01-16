import React from "react";

function Footer() {
  return (
    <div className="relative w-full">
      <div
        className="
          flex items-center justify-between
          whitespace-nowrap
          font-semibold text-sm text-[#1A1A1A]
          px-4 py-2
          w-full sm:w-[70%]
          sm:absolute sm:bottom-1 sm:right-1
        "
      >
        {/* LEFT */}
        <p className="truncate">© Zabira 2026</p>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Mobile → Policy | Desktop → Privacy Policy */}
          <p className="cursor-pointer hover:underline">
            <span className="sm:hidden">Policy</span>
            <span className="hidden sm:inline">Privacy Policy</span>
          </p>

          {/* Mobile → Terms | Desktop → Terms of Service */}
          <p className="cursor-pointer hover:underline">
            <span className="sm:hidden">Terms</span>
            <span className="hidden sm:inline">Terms of Service</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
