import Image from "next/image";

function Head() {
  return (
    <div className="w-full relative px-2 sm:px-0 ">
      <div className="lg:hidden flex flex-1 absolute top-1 p-2 sm:top-4 left-2 sm:left-4 gap-2 text-[#111111] font-bold text-lg items-center">
        <Image
          src="/Zabira Logo Icon.svg"
          alt="Zabira Logo"
          width={20}
          height={20}
        />
        <span>zabira</span>
      </div>
      <div
        className="
        absolute top-1 sm:top-4 right-2 sm:right-4 flex-1
          flex items-center justify-between
          w-auto sm:w-auto
          sm:justify-end
          gap-2 sm:gap-4
          font-semibold text-sm text-[#1A1A1A]
          bg-white rounded-xl
          px-3 py-2
        "
      >
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap">Check Rates</p>
          <Image src="/iconic.svg" alt="Check Rates" width={20} height={20} />
        </div>

        <div className="h-5 w-px bg-gray-300" />

        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap">Get Help</p>
          <Image src="/icon2.svg" alt="Get Help" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}

export default Head;
