
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import TokenForm from "./compTokenForm"
import Image from "next/image"

  export default function Page() {
  
    return (
        <div className="container mx-auto flex flex-col">
            
            <div className="h-32"></div>

            <div className="flex flex-col md:flex-row gap-6">

                <div className="w-full flex flex-col lg:px-12 gap-3">
                    <div className="text-xl font-semibold">Solana Token Creator</div>
                    <div>The perfect tool to create Solana SPL tokens. Simple, user friendly, and fast.</div>
                    <div>Any support at dev@aliensky.xyz</div>
                    <div className="w-full text-lg font-bold text-center text-green-600">Status In Development</div>

                    <div className="h-3"></div>

                    <Tabs defaultValue="standart" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="standart">Standart Token</TabsTrigger>
                            <TabsTrigger value="custom">Custom Token</TabsTrigger>
                        </TabsList>
                        <TabsContent value="standart">
                                <div className="h-4"></div>
                                This option is designed for users who prefer simplicity and adherence to best practices in token design. The cost of Standart Token creation is 0.3 SOL covering all fees for SPL Token Creation.
                        </TabsContent>
                        <TabsContent value="custom">
                                <div className="h-4"></div>
                                This option empowers users to define their tokens with specific attributes, allowing for creative and customized tokenomics suited to their individual project needs. The cost of Custom Token creation is 0.6 SOL covering all fees for SPL Token Creation.
                        </TabsContent>
                    </Tabs>


                    <div className="text-green-500">See the image below for the difference between Standard and Custom token generate.</div>

                    <div className="w-full">
                        <Image
                            src="/token.png"
                            alt="example token"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="grayscale rounded-md object-contain h-full w-full "
                        />
                    </div>

                    <div></div>

                    <TokenForm />

                </div>

                <div className="flex-none h-full md:max-w-[21rem] lg:max-w-[32rem] sticky top-20">
                    <div className="w-full flex flex-col gap-3">
                        <div className="text-xl font-semibold">Create Solana Token</div>
                        <div>Effortlessly create your Solana SPL Token with our 7+1 step process – no coding required.</div>
                        <div>Customize your Solana Token exactly the way you envision it. Less than 5 minutes, at an affordable cost.</div>
                    </div>
                    <div className="h-7"></div>
                    <div className="w-full flex flex-col gap-1">
                        <div className="text-xl font-semibold">How to use Solana Token Creator</div>
                        <div>1. Connect your Solana wallet.</div>
                        <div>2. Specify the desired name for your Token</div>
                        <div>3. Indicate the symbol (max 8 characters).</div>
                        <div>4. Select the decimals quantity (default recommended 6 for all tokens)</div>
                        <div>5. Provide a brief description for your SPL Token.</div>
                        <div>6. Upload the image for your token (PNG).</div>
                        <div>7. Determine the Supply of your Token.</div>
                        <div>8. Click on create, accept the transaction and wait until your tokens ready.</div>
                    </div>
                    <div className="h-7"></div>
                    <div className="w-full flex flex-col gap-1">
                        <div className="text-xl font-semibold">Revoke Freeze Authority:</div>
                        <div>If you want to create a liquidity pool you will need to "Revoke Freeze Authority" of the Token, you can do that here. The cost is 0.1 SOL.</div>
                    </div>
                    <div className="h-5"></div>
                    <div className="w-full flex flex-col gap-1">
                        <div className="text-xl font-semibold">Revoke Mint Authority:</div>
                        <div>Revoking mint authority ensures that there can be no more tokens minted than the total supply. This provides security and peace of mind to buyers. The cost is 0.1 SOL</div>
                    </div>
                    <div className="h-10"></div>
                    <div className="w-full flex flex-col gap-2.5">
                        <div>Once the creation process starts, it will only take a few seconds! Once complete, you will receive the total supply of the token in your wallet.</div>
                        <div>With our user-friendly platform, managing your tokens is simple and affordable.</div>
                        <div>You can choose to revoke mint authority later if you choose</div>
                    </div>
                </div>

            </div>
            
            <div className="h-12"></div>

            <div className="flex flex-col gap-6 items-center">
                <div className="text-3xl font-bold">Frequently Asked Questions</div>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-semibold">What is the Solana Token Creator?</AccordionTrigger>
                        <AccordionContent className="text-sm">
                        The Aliensky Tools Solana Token Creator is an advanced Smart Contract empowering users to effortlessly generate customized SPL Tokens (Solana tokens), specifically tailored to their preferences in terms of supply, name, symbol, description, and image on the Solana Chain. Making tokens is super quick and cheap with our easy process.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-semibold">Is it Safe to Create Solana Tokens here?</AccordionTrigger>
                        <AccordionContent className="text-sm">
                        Yes, our tools is completely safe. It is a dApp that creates your token, giving you and only you the mint and freeze Authority (the control of a SPL Token). Our dApp is audited and used by hundred of users every month.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-semibold">How much time will the Solana Token Creator Take?</AccordionTrigger>
                        <AccordionContent className="text-sm">
                            The time of your Token Creation depends on the TPS Status of Solana. It usually takes just a few seconds so do not worry. If you have any issue please contact us
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-semibold">How much does it cost?</AccordionTrigger>
                        <AccordionContent className="text-sm">
                            The Standart Token Creation currently cost 0.3 Sol and Custom Token Creation 0.6 Sol, it includes all fees necessaries for the Token Creation in Solana mainnet.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-semibold">Which wallet can I use?</AccordionTrigger>
                        <AccordionContent className="text-sm">
                            You can use any Solana Wallet as Phantom, Solflare, Backpack, etc.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-lg font-semibold">How many tokens can I create for each decimal amount?</AccordionTrigger>
                        <AccordionContent className="text-sm flex flex-col gap-2">
                            <div>Here is the max amount of tokens you can create for each decimal range.</div>
                            <div>0 to 4 - 1,844,674,407,370,955</div>
                            <div>5 to 7 - 1,844,674,407,370</div>
                            <div>8 - 184,467,440,737</div>
                            <div>9 - 18,446,744,073</div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    )
}
  