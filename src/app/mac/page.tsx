"use client";

import TerminalMac from "@/components/terminal/macos";
import Link from "next/link";

export default function Landing() {
  return (

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
        style={{
          backgroundImage: `url('/macosbg.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <TerminalMac />
          <Link href={`/`}>Back to home</Link>
        </main>
      </div>
  );
}
