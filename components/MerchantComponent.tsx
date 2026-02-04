"use client";

import Image from "next/image";
import MerchantApply from "./ui/merchantApply";
import MerchantInvite from "./ui/merchantInvite";

export default function MerchantComponent() {
  return (
    <div className="mt-4 w-full rounded-md bg-white px-4 pb-4 md:p-6">
      {/* Header (desktop only) */}
      <div className="hidden md:flex items-center gap-2 mb-4">
        <Image
          src="/lighting.svg"
          alt="Lightning icon"
          width={20}
          height={20}
        />
        <p className="font-medium text-[#1A1A1A]">Do more on Zabira!</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:flex-1">
          <MerchantApply />
        </div>
        <div className="md:flex-1">
          <MerchantInvite />
        </div>
      </div>
    </div>
  );
}
