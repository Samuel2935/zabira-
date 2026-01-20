import React from "react";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between">
      <div className="flex justify-around mx-auto p-2 flex-1 w-full bg-gray-200 m-2 rounded-lg lg:hidden">
        <div className="flex justify-center gap-2">
          <Image
            src="/lock.svg"
            alt="share icon"
            width={20}
            height={20}
            className="background-image"
          />
          <span>zabira.com</span>
        </div>
        <div className="image">
          <Image
            src="/share.svg"
            alt="share icon"
            width={20}
            height={20}
            className="background-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
