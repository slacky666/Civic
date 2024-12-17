"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

import { Features } from "./features";

const Tokenomics = () => {

    return (

        <HeroHighlight>
            <div className="container mx-auto">

                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] text-4xl md:text-5xl">
                    <div className=" absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        <span className="">Tokenomics</span>
                    </div>
                    <div className=" relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                        <span className="">Tokenomics</span>
                    </div>
                </div>

                <div className="w-full h-20"></div>

                <motion.h1
                    initial={{
                    opacity: 0,
                    y: 20,
                    }}
                    animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                    }}
                    transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-sm px-4 md:text-2xl lg:text-2 font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto flex flex-col gap-12 justify-center items-center"
                >
                    <div className="text-2xl md:text-4xl">Contract Address</div>
                    
                    <Highlight className="text-black dark:text-white select-all">
                        Under Development
                    </Highlight>

                </motion.h1>

                <div className="w-full h-8"></div>

                <div className="flex justify-center">
                    <Features />
                </div>

            </div>
        </HeroHighlight>
    )
}
export default Tokenomics