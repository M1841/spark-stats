import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavigationBar from "@/components/ui/navigation-bar";
import { ThemeProvider } from "@/components/theme/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spark Stats",
  description:
    "The Ultimate Spotify Companion - Unlock the full potential of your music library",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationBar />
          <div className="mt-[3.25rem] flex justify-center">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
