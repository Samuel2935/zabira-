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
        w-full h-full
        md:w-[173px] md:h-[140px]
        bg-[#E1E1E2]
        rounded-md
        p-2 md:p-4
        cursor-pointer
        flex flex-col
        items-center md:items-start
        justify-center md:justify-start
        gap-1 md:gap-2
        text-center md:text-left
        hover:bg-[#d9d9da]
        transition
      "
    >
      <Image
        src={mode.logoUrl}
        alt={mode.name}
        width={32}
        height={32}
        className="shrink-0"
      />

      <div className="w-full">
        <p className="font-semibold text-xs md:text-base text-[#1A1A1A] truncate">
          {mode.name}
        </p>

        {/* Desktop only */}
        <span className="hidden md:block text-sm text-[#1A1A1A5C] leading-snug line-clamp-2">
          {mode.description}
        </span>
      </div>
    </button>
  );
}
