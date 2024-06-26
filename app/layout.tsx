import { Suspense } from "react";

import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "@/providers/providers";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Task Manager",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-10">
        <Providers>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
