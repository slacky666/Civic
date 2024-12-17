"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
 
export function CompLogo() {
  return (
    <div>
      <BackgroundGradient className="rounded-full w-56 h-56 flex flex-col justify-center items-center bg-white dark:bg-zinc-900 overflow-hidden">

        <div className="w-42 h-42 relative overflow-hidden">
            <Image
            src={`/alien.png`}
            alt="jordans"
            height="150"
            width="150"
            className="object-contain"
            />
        </div>

        <p className="text-center text-base sm:text-xl text-black mt-4 dark:text-neutral-200">
          Aliensky
        </p>

      </BackgroundGradient>
    </div>
  );
}
