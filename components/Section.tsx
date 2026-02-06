"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProfileCompletionModal from "@/components/ProfileCompletionModal";
import { useState } from "react";

function Section() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mt-4 w-full rounded-md bg-[#A3D4FF] p-4 sm:p-6">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Left Content */}
        <div className="flex items-center gap-4">
          <Image
            src="/ProgressRadial.svg"
            alt="Progress"
            width={56}
            height={56}
            className="h-14 w-14"
          />

          <div>
            <h4 className="font-semibold text-[#00298F]">
              You’re almost done!
            </h4>
            <p className="text-sm text-[#1A1A1AB2]">
              Finish setting up your account to enjoy benefits
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setOpen(true)}
          className="
            w-full md:w-auto hidden md:flex
           items-center justify-center gap-2
            rounded-sm bg-[#1A1A1A] text-white
            px-4 py-2 text-sm font-medium
          "
        >
          Complete Profile Setup
          <ArrowRight size={16} />
        </button>

      </div>

      <ProfileCompletionModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}

export default Section;
