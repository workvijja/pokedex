import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Collect all pokemons!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen grid grid-rows-10 ${inter.className}`}>
        <header className={"row-span-1"}>
            <nav className={"h-full flex justify-between items-center p-4 border"}>
                <h1 className={"font-bold"}>Pokedex</h1>
                <ul className={"flex list-none gap-6"}>
                    <Button variant={"link"} className={"p-0"} asChild>
                        <Link href={"/"}>Home</Link>
                    </Button>
                    <Button variant={"link"} className={"p-0"} asChild>
                        <Link href={"/compare"}>Compare</Link>
                    </Button>
                </ul>
            </nav>
        </header>
        <main className={"row-span-11 p-4"}>
            {children}
        </main>
      </body>
    </html>
  );
}
