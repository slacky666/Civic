"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
