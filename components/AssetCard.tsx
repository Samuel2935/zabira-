"use client";

import Image from "next/image";
import { Asset } from "@/app/config/asset";

type Props = {
  asset: Asset;
};

export default function AssetCard({ asset }: Props) {
  const isGain = asset.changePercent >= 0;

  return (
    <div className=" h-30.25 w-34 rounded-md bg-[#F4F4F5] p-4  gap-3">

      <Image
        src={asset.logoUrl}
        width={20}
        height={20}
        alt={asset.name}
        className="rounded-full"
      />

      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1">
          <p className="text-sm font-semibold">{asset.name}</p>
          <span className="text-xs text-gray-400">
            ({asset.ticker})
          </span>
        </div>
          <span
          className={`text-xs font-semibold flex items-center gap-1 ${
            isGain ? "text-green-600" : "text-red-500"
          }`}
        >
          {isGain ? "+" : ""}
          {asset.changePercent}%
          {isGain ? (
            <Image src="/trend-up.svg" alt="Trending Up" width={12} height={12} />
          ) : (
            <Image src="/trend-down.svg" alt="Trending Down" width={12} height={12} />
          )}
        </span>
      </div>
    </div>
  );
}
