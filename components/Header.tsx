import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-5">
      {/* LEFT: Greeting */}
      <div className="hidden md:flex flex-col gap-1">
        <h1 className="text-base font-semibold">
          Hi, Samuel <span aria-hidden>👋</span>
        </h1>
        <p className="text-sm text-[#1A1A1A5C]">
          Buy/Sell BTC, ETH. Start trading now on Zabira
        </p>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-9 justify-around">
        {/* Action Pills */}
        <div
          className="
            flex items-center gap-4
            rounded-full border border-[#E1E1E2]
            bg-[#FCFCFC]
            px-3 py-2
            text-sm font-semibold text-[#1A1A1A]
          "
        >
          <button className="flex items-center gap-2 whitespace-nowrap">
            <span>Check Rates</span>
            <Image src="/iconic.svg" alt="Check Rates" width={20} height={20} />
          </button>

          <span className="h-4 w-px bg-gray-300" />

          <button className="flex items-center gap-2 whitespace-nowrap">
            <span>Get Help</span>
            <Image src="/icon2.svg" alt="Get Help" width={20} height={20} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-9">
          <button aria-label="Notifications">
            <Image
              src="/bell.svg"
              alt="Notifications"
              width={36}
              height={36}
              className="cursor-pointer"
            />
          </button>

          <button aria-label="Profile">
            <Image
              src="/Zabira Logo Icon.svg"
              alt="Profile"
              width={40}
              height={40}
              className="border-2 border-green-600 rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
