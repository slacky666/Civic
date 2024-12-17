"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate, useAnimation } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const controls = useAnimation();

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  React.useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(centerX);
    mouseY.set(100);

    // Initial animation
    // controls.start({
    //   x: mouseX.get(),
    //   y: mouseY.get(),
    //   opacity: 1,
    //   transition: { 
    //     duration: 0.5,
    //     ease: "easeOut"
    //   }
    // });
  }, []);


  return (
    <div
      className={cn(
        "relative py-4 bg-white dark:bg-black w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-small-neutral-300 dark:bg-dot-small-neutral-800 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0 }}
        className="pointer-events-none bg-dot-small-indigo-500 dark:bg-dot-small-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        animate={{
          x: mouseX.get(),
          y: mouseY.get(),
          opacity: [0, 1]
        }}


        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
