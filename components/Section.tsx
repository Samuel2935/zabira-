"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProfileCompletionModal from "@/components/ProfileCompletionModal";
import { useState } from "react";

function Section() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between w-302 h-22 bg-[#A3D4FF] p-4 rounded-md items-center gap-6 mt-4 mx-auto">
      <div className="section flex items-center gap-4">
        <Image
          src="/ProgressRadial.svg"
          width={30}
          height={30}
          alt="Banner Frame"
          className=" w-14 h-14] ml-4"
        />
        <div className="diva">
          <h4 className="text-[#00298F]">You’re almost done!</h4>
          <p className="text-[#1A1A1AB2] text-[14px]">
            Finish setting up your account to enjoy benefits
          </p>
        </div>
      </div>
      <div className="ps">
        <button
          onClick={() => setOpen(true)}
          className="flex justify-center w-51.25 h-9 gap-2 rounded-sm bg-[#1A1A1A] text-[#ffff] px-3 py-2 cursor-pointer text-sm font-Geista border border-[#1A1A1A]"
        >
          <span className="ml-2">Complete Profile Setup</span>
          <ArrowRight size={16} />
        </button>
        <ProfileCompletionModal isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}

export default Section;
