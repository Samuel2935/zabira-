import Footer from "@/components/ui/footer";
import Head from "@/components/ui/head";
import Image from "next/image";

export default function SignUpPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Image src="/bannerFrame.png" width={20} height={20} alt="Banner Frame" />
      <div className="flex flex-col flex-1">
        <Head/>
        <main className="p-6">{children}</main>
        
        <Footer/>
      </div>
    </div>
  );
}
