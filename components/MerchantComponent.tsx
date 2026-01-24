"use client";

import Image from "next/image";
import MerchantApply from "./ui/merchantApply";
import MerchantInvite from "./ui/merchantInvite";

export default function MerchantComponent() {
  return (
    <div className="mt-4 bg-white p-6 w-302 h-74 gap-6 rounded-md mx-auto">
      <div className="w-56.25 h-5.5 gap-2  mb-4 flex">
        <Image
          src="/lighting.svg"
          alt="lightings"
          width={20}
          height={20}
          className="inline-block mr-2"
        />
        <p className=" text-[#1A1A1A]">Do more on Zabira!</p>
      </div>
      
      <div className="flex gap-4">
          <MerchantApply/>
        <MerchantInvite/>
      </div>
     
    </div>
  );
}
