import Image from "next/image";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Banner = () => {

    return (
        <div className="w-full h-screen relative overflow-hidden flex flex-col">

          <div className="w-full h-full absolute flex justify-center items-end">
              <div className="h-44 w-44 md:w-80 md:h-80">
                  <Image
                      src={`/civic.png`}
                      alt="logo civic"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="object-contain w-full h-full"
                  />
              </div>
              {/* <div className="absolute w-96 h-96 ml-32 mb-20 md:ml-64 md:mb-40">
                  <Image
                      src={`/hello.png`}
                      alt="logo abi"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="object-contain w-full h-full"
                  />
              </div> */}
          </div>

          <BackgroundBeamsWithCollision>

              <h2  className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight flex flex-col gap-4">

                  <div className="w-full h-[9.5rem] md:h-[11rem]"></div>

                  <div className="w-full relative uppercase flex justify-center items-center">
                      <div className="absolute z-10 w-full h-[6rem] md:w-[75rem] md:h-[7rem]">
                          <TextHoverEffect text="Civic"/>
                      </div>
                  </div>

                  <div className="w-full h-[1.2rem]"></div>

                  <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] text-xs md:text-xl">
                      <div className=" absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                          <span className="">Our exclusive CA with the prefix Civic*****</span>
                      </div>
                      <div className=" relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                          <span className="">Our exclusive CA with the prefix Civic*****</span>
                      </div>
                  </div>

              </h2>
          </BackgroundBeamsWithCollision>
        </div>

    )
}

export default Banner