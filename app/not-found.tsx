import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-4 bg-amber-100">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-500">Comming Soon...</p>
      <Link href="/dashboard" className="text-blue-600 underline">
        Go back home
      </Link>
    </div>
  );
}
