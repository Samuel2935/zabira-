// components/sidebar/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/app/config/nav.config";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-full h-220 rounded-b-sm bg-white flex-col px-4 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <Image
          src="/Zabira Logo Icon.svg"
          alt="Zabira logo"
          width={20}
          height={20}
          priority
        />
        <h2 className="text-xl font-bold">Zabira</h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3 w-56 h-83.5">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition
                ${
                  isActive
                    ? "bg-[#EBF0FF] text-blue-600"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }
              `}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
      <Image
        src="/Banner.png"
        alt="sidebar banner"
        width={420}
        height={1000}
        className=" h-40 w-56 object-cover rounded-sm mt-2"
        priority
      />
      <Image
        src="/Frame2.png"
        alt="sidebar banner"
        width={420}
        height={1000}
        className=" h-[208.81px] w-56 object-cover rounded-sm"
        priority
      />
      <div className="last w-56 h-10.5 gap-2 px-6">
        <h4 className="text-[#1A1A1AB2] font-semibold">Zabira Technologies</h4>
        <p className="text-[#1A1A1A5C] text-[14px]">
          © 2027 All Rights Reserved
        </p>
      </div>
    </aside>
  );
}
