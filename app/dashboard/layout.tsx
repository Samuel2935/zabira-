import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 <div className="flex min-h-screen">
  <div className="hidden md:block">
    <Sidebar />
  </div>

  <div className="flex flex-col flex-1 w-full">
    <Header />
    <main className="p-4 sm:p-6 w-full max-w-full">
      {children}
    </main>
  </div>
</div>

  );
}
