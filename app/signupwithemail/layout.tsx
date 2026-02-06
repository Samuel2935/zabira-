import Image from "next/image";
export default function SignUpPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row overflow-x-hidden">
      
      {/* Side Banner */}
      <Image
        src="/bannerFrame.png"
        alt="Banner Frame"
        width={400}
        height={800}
        className="hidden md:block md:w-[400px] h-auto object-cover"
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full">
        {/* <Head /> */}
        <main className="p-4 sm:p-6 w-full max-w-full">
          {children}
        </main>
        {/* <Footer /> */}
      </div>

    </div>
  );
}
