import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

function Section() {
  return (
    <div className="flex justify-between w-[1208px] h-[88px] bg-[#A3D4FF] p-4 rounded-md items-center gap-6 mt-4 mx-auto">
      <div className="section flex items-center gap-4">
        <Image
          src="/ProgressRadial.svg"
          width={30}
          height={30}
          alt="Banner Frame"
          className=" w-[56px] h-[56px] ml-4"
        />
        <div className="diva">
          <h4 className="text-[#00298F]">You’re almost done!</h4>
          <p className="text-[#1A1A1AB2] text-[14px]">
            Finish setting up your account to enjoy benefits
          </p>
        </div>
      </div>
      <div className="ps">
        <button className="flex justify-center w-[205px] h-[36px] gap-2 rounded-sm bg-[#1A1A1A] text-[#ffff] px-3 py-2 cursor-pointer text-sm font-Geista border border-[#1A1A1A]">
          <span className="ml-2">Complete Profile Setup</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default Section;
