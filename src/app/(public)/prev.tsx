"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviews() {
  return (
    <>
    <div className="flex flex-row gap-3">
        <div className="w-6 h-6 rounded-full bg-neutral-200 flex justify-center items-center text-black">1</div>
        <div className="flex flex-row">Have or create a&nbsp;
            <LinkPreview url="https://phantom.app/en-GB" className="font-bold">
                <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    Phantom
                </div>
            </LinkPreview>&nbsp;
            wallet
        </div>
    </div>

    <div className="flex flex-row gap-3">
        <div className="w-6 h-6 rounded-full bg-neutral-200 flex justify-center items-center text-black">2</div>
        <div className="flex flex-row">Buy&nbsp;
            <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                Solana
            </div>&nbsp;
            and send it your wallet
        </div>
    </div>

    <div className="flex flex-row gap-3">
        <div className="w-6 h-6 rounded-full bg-neutral-200 flex justify-center items-center text-black">3</div>
        <div className="flex flex-row">Connect it to&nbsp;
            <LinkPreview url="https://raydium.io/swap/" className="font-bold">
                <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    Raydium
                </div>
            </LinkPreview>
            &nbsp;or&nbsp;
            <LinkPreview url="https://jup.ag/" className="font-bold">
                <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    Jupiter
                </div>
            </LinkPreview>
        </div>
    </div>

    <div className="flex flex-row gap-3">
        <div className="w-6 h-6 rounded-full bg-neutral-200 flex justify-center items-center text-black">4</div>
        <div className="flex flex-row">Swap&nbsp;
            <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                Solana
            </div>&nbsp;for&nbsp;
            <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                ALIENSKY
            </div>
        </div>
    </div>
    </>
  );
}
