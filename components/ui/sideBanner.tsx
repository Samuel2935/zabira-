import Image from "next/image";
import React from "react";

function sideBanner() {
  return (
    <div className="hidden sm:block">
      <Image
        src="/bannerFrame.png"
        width={400}
        height={100}
        alt="imagebanner"
        className="h-200 p-2"
      />
    </div>
  );
}

export default sideBanner;
