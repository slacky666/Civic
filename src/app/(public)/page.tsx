import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Banner from "./banner";
import Tokenomics from "./tokenomics";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LinkPreviews } from "./prev";
import Link from "next/link"

import {
  IconQuestionMark
} from "@tabler/icons-react";

const data = [
    {
      title: "How to buy $ALIENSKY",
      content: (
        <div className="flex flex-col gap-4 text-sm">

          <LinkPreviews />

          <div className="pt-4 font font-semibold text-neutral-500">
            Realtime update
          </div>

          <div className="flex flex-row gap-4">
              <HoverBorderGradient
                  containerClassName="rounded-md"
                  as="button"
                  className="py-4 dark:bg-black font-semibold text-black text-sm dark:text-white flex items-center justify-center gap-3"
              >
              <span>MARKET CAP: $0</span>
              </HoverBorderGradient>

              <HoverBorderGradient
                  containerClassName="rounded-md"
                  as="button"
                  className="py-4 dark:bg-black font-semibold text-black text-sm dark:text-white flex items-center justify-center gap-3"
              >
              <span>HOLDERS: 0</span>
              </HoverBorderGradient>
          </div>
        </div>
      ),
    },
    // {
    //   title: "Available at",
    //   content: (
    //     <div >
    //       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
    //         <Image
    //           src="/dexscreener.png"
    //           alt="dex screener"
    //           width={500}
    //           height={500}
    //           className="grayscale rounded-md object-contain h-16 lg:h-16 bg-white w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="/dextools.png"
    //           alt="dex tools"
    //           width={500}
    //           height={500}
    //           className="grayscale rounded-md object-contain h-16 lg:h-16 p-2 bg-white w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="/coingecko.jpeg"
    //           alt="coingecko"
    //           width={500}
    //           height={500}
    //           className="grayscale rounded-md object-cover h-16 lg:h-16 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="/coinbase.png"
    //           alt="coinbase"
    //           width={500}
    //           height={500}
    //           className="grayscale rounded-md object-contain h-16 lg:h-16 w-full bg-white p-3 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="/coinmarketcap.png"
    //           alt="coinmarketcap"
    //           width={500}
    //           height={500}
    //           className="grayscale rounded-md object-contain h-16 lg:h-16 w-full bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="/pumpfun.png"
    //           alt="pumpfun"
    //           width={500}
    //           height={500}
    //           className="grayscale rounded-md object-cover h-16 lg:h-16 w-full bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
    {
      title: "Join The Socials!",
      content: (
        <div id="socials" className="">

          <div className="mb-8">

            <div className="dark:text-neutral-300">
                So buckle up, grab your space gear, and join us on this fun and profitable journey through the meme-iverse! 
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6  text-base lg:text-lg">

            <Link href="https://x.com/alienskycoinsol" className="h-14 flex flex-row gap-2" target="_blank">
                <>
                <div className="flex-none w-14 h-14 relative" >
                  <Image
                    src="/x.png"
                    alt="twitter"
                    width={500}
                    height={500}
                    className="grayscale rounded-md object-contain h-full w-full bg-black shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div>Twitter</div>
                  <div>Growing!</div>
                </div>
                </>
            </Link>

            <Link href="https://t.me/+ioGHaX9zGMhkMzNl" className="h-14 flex flex-row gap-2" target="_blank">
                <>
                <div className="flex-none w-14 h-14 relative">
                  <Image
                    src="/telegram.jpeg"
                    alt="telegram"
                    width={500}
                    height={500}
                    className="grayscale p-1 rounded-md object-contain h-full w-full bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div>Telegram</div>
                  <div>Growing!</div>
                </div>
                </>
            </Link>

            {/* <div className="h-14 flex flex-row gap-2">
                <div className="flex-none w-14 h-14 relative">
                  <Image
                    src="/instagram.jpeg"
                    alt="instagram"
                    width={500}
                    height={500}
                    className="grayscale rounded-md object-contain h-full w-full bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div>Instagram</div>
                  <div>Growing!</div>
                </div>
            </div> */}

            <Link href="https://www.youtube.com/@aliensky-sol" className="h-14 flex flex-row gap-2" target="_blank">
                <div className="flex-none w-14 h-14 relative">
                  <Image
                    src="/youtube.png"
                    alt="youtube"
                    width={500}
                    height={500}
                    className="grayscale rounded-md object-contain h-full w-full bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div>Youtube</div>
                  <div>Growing!</div>
                </div>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Roadmap",
      content: (
        <div className="" id="roadmap">

          <div className="mb-8">

            <div className="dark:text-neutral-300">
                With a solid roadmap and a playful spirit, ALIENSKY is set to become a quad-star! Whether you{`'`}re a seasoned trader or a curious newcomer, our mission is to make crypto fun and profitable for everyone on board!
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 text-base lg:text-lg capitalize">

            <div className="flex flex-row gap-4">
                <div className="flex-none w-12 h-12 relative border rounded-full flex justify-center items-center">
                    <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        1
                    </div>
                </div>
                <div className="flex flex-col justify-start text-sm gap-1 ">
                  <div className="font-bold">Story</div>
                    <div className="">🚀&nbsp;&nbsp;Creation of ALIENSKY </div>
                    <div className="">🚀&nbsp;&nbsp;Website launch</div>
                    <div className="">🚀&nbsp;&nbsp;Socials launch</div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;ALIENSKY launch</div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;Burning Announcement</div>
                    <div className="">🚀&nbsp;&nbsp;Token Creator Creation</div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;Token Creator Testing</div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;Token Creator Launch</div>
                </div>
            </div>

            <div className="flex flex-row gap-4">
                <div className="flex-none w-12 h-12 relative border rounded-full flex justify-center items-center">
                    <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        2
                    </div>
                </div>
                <div className="flex flex-col justify-start text-sm gap-1">
                  <div className="font-bold">Earn</div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;Reach 7,000 holders</div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;Burning Announcement</div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;Mini APPS Creation</div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;Mini APPS Testing</div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;Mini APPS Launch</div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;More CEX Listings</div>
                </div>
            </div>

            <div className="flex flex-row gap-4">
                <div className="flex-none w-12 h-12 relative border rounded-full flex justify-center items-center">
                    <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        3
                    </div>
                </div>
                <div className="flex flex-col justify-start text-sm gap-1">
                  <div className="font-bold">Free APPS</div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;WIFI Management </div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;POS For Cafe / Resto</div>
                    <div className="text-neutral-700">⏱️&nbsp;&nbsp;More Business APPS</div>
                </div>
            </div>

            <div className="flex flex-row gap-4">
                <div className="flex-none w-12 h-12 relative border rounded-full flex justify-center items-center">
                    <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        4
                    </div>
                </div>
                <div className="w-32 h-16 flex flex-col justify-center items-center text-sm gap-1">
                    <IconQuestionMark className="text-neutral-800 absolute w-16 h-16"/>
                    <div className="relative">Big Plan is here</div>
                </div>
            </div>

          </div>
        </div>
      ),
    },
];

const Page = () => {

    return (
        <>
        <Banner />

        <div className="w-full overflow-hidden" id="howtobuy">
          <Timeline data={data} />
        </div>

        <Tokenomics />
        </>
    )
}
export default Page