import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FireSquid",
  description: "Jonathan Deiss' personal website and portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main className="m-4 max-w-[100rem]">{children}</main>
      </body>
    </html>
  );
}
