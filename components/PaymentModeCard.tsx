"use client";

import Image from "next/image";
import { PaymentMode } from "@/app/config/paymentModes";

type Props = {
  mode: PaymentMode;
  onSelect?: (id: string) => void;
};

export default function PaymentModeCard({ mode, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect?.(mode.id)}
      className="
       w-[173.33px] h-35 bg-[#E1E1E2] gap-3 p-4 rounded-md cursor-pointer
      "
    >
      <Image
        src={mode.logoUrl}
        alt={mode.name}
        width={36}
        height={36}
        className="m-1"
      />

      <div className="w-[141.33px] h-15 flex flex-col items-start gap-1.5 text-left">
        <p className="font-semibold text-[16px] text-[#1A1A1A]">{mode.name}</p>

        <span className="text-[14px] leading-1.24 text-[#1A1A1A5C]">
          {mode.description}
        </span>
      </div>
    </button>
  );
}
