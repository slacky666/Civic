'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TokenFormSchema, TokenFormData } from './token-form';
import dynamic from 'next/dynamic';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { ImageUpload } from './image-upload';

import { createConfig, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { 
  ConnectionProvider, 
  WalletProvider,
  useConnection,
  useWallet
} from '@solana/wallet-adapter-react';

import { 
  PhantomWalletAdapter, 
  SolflareWalletAdapter,
  TorusWalletAdapter
} from '@solana/wallet-adapter-wallets';

import '@solana/wallet-adapter-react-ui/styles.css';

import { 
  Drawer, 
  DrawerClose, 
  DrawerContent, 
  DrawerDescription, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerTrigger 
} from "@/components/ui/drawer";

const WalletMultiButton = dynamic(() => import('@solana/wallet-adapter-react-ui').then((mod) => mod.WalletMultiButton), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const WalletModalProvider = dynamic(() => import('@solana/wallet-adapter-react-ui').then((mod) => mod.WalletModalProvider), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const solanaDevnetChain = {
  id: 103, // Devnet chain ID
  name: 'Solana Devnet',
  network: 'solana-devnet',
  nativeCurrency: {
    name: 'SOL',
    symbol: 'SOL',
    decimals: 9,
  },
  rpcUrls: {
    default: {
      http: ['https://api.devnet.solana.com'],
    },
    public: {
      http: ['https://api.devnet.solana.com'],
    },
  },
};

const config = createConfig({
  chains: [solanaDevnetChain],
  connectors: [],
  transports: [],
});

const queryClient = new QueryClient();

export default function TokenForm() {

  const endpoint = 'https://api.devnet.solana.com';

  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new TorusWalletAdapter()
  ], []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <Token />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

const Token = () => {
  
    const { connection } = useConnection();
    const { publicKey, sendTransaction, disconnect, connected, connect } = useWallet();
    const [cost, setCost] = useState(0)
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleTransfer = async () => {

      if (!publicKey) {
        alert('Please connect wallet first');
        return;
      }
  
      if (!connection) {
        alert('No connection to Solana network');
        return;
      }
  
      try {
        const recipientPublicKey = new PublicKey("Fism6QG8wBjZVHq7s7KX2ixyzBGGHArcsEk9uE48qyFA");
  
        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: recipientPublicKey,
            lamports: Math.round(0.1 * LAMPORTS_PER_SOL)
          })
        );
  
        const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = publicKey;
  
        const signature = await sendTransaction(transaction, connection);
        
        const confirmation = await connection.confirmTransaction({
          signature,
          blockhash,
          lastValidBlockHeight
        });
        
        if (confirmation.value.err === null) {

            const formData = new FormData();

            Object.keys(valx).forEach(key => {
              if (key !== 'image') {
                formData.append(key, valx[key] || '');
              }
            });
                    
            if (valx.image instanceof File) {

              const arrayBuffer = await valx.image.arrayBuffer();
              const base64Image = Buffer.from(arrayBuffer).toString('base64');
          
              formData.append('image', base64Image);
            }
            
            await fetch('/api', {
              method: 'POST',
              body: formData
            });

            setIsOpen(false);

            alert(`Successfully transferred ${cost} SOL on Aliensky Dev!, Please wait while after generate process token will send to your wallet`);

        } else {
          alert('Transfer failed');
        }
      } catch (error) {
        alert(`Transfer failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    };

    const handleDisconnect = () => {
        disconnect();
    };

    const form = useForm<TokenFormData>({
      resolver: zodResolver(TokenFormSchema),
      defaultValues: {
        generate: "standart",
        prefix: "",
        suffix: "",
        email: "",
        name: "alien token",
        symbol: "ALIEN",
        decimals: 6,
        supply: 0,
        description: "aslkdkasdj",
        websiteLink: "",
        telegramLink: "",
        twitterLink: "",
        revokeFreezeEnabled: true,
        revokeMintEnabled: false
      }
    });

    const isCustomSelected = form.watch("generate") === "custom";
    const isRevokeMintEnabled = form.watch("revokeMintEnabled") === true;

    const valx = form.watch();

    const onSubmit = async (data: TokenFormData) => {
      try {

          setIsOpen(true);

          // console.log( data )

          // // Handle form submission
          // console.log('Form Data:', data);
          
          // // Example of handling file upload
          // if (data.image) {
          //   // You would typically upload the image to a server here
          //   const formData = new FormData();
            // formDatax.append('image', data.image);
            
          //   // Simulated upload
          //   // const response = await uploadImage(formData);
          // }

          // console.log({
          //   title: "Token Created",
          //   description: `Token ${data.name} (${data.symbol}) has been created successfully.`,
          // });

          // console.log( data )

      } catch (error) {
        console.log({
          title: "Error",
          description: "Failed to create token. Please try again.",
          variant: "destructive",
        });
      }
    };

    useEffect(() => {
      let newCost = 0;
      if (isCustomSelected) {
          newCost = isRevokeMintEnabled ? 0.8 : 0.7;
      } else {
          newCost = isRevokeMintEnabled ? 0.5 : 0.4;
      }
      setCost(newCost);
    },[isCustomSelected, isRevokeMintEnabled])

    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 border border-stone-400 rounded-md flex flex-col gap-6">

          <FormField
            control={form.control}
            name="generate"
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Select type</FormLabel>
                <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standart">Standart Token</SelectItem>
                      <SelectItem value="custom">Custom Token</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isCustomSelected && (
            <div className="custom-field flex flex-col gap-4">

              <div className='flex flex-col md:flex-row gap-4'>
                  <FormField
                    control={form.control}
                    name="prefix"
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Starts with (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Custom starts name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
      
                  <FormField
                    control={form.control}
                    name="suffix"
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Ends with (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Custom ends name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
      
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Email (required)</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>

              <div className='flex flex-col gap-1 text-green-500'>
                <div>RTFM Valid Suffix Format :</div>
                <div className='text-xs'>The valid characters for a public key suffix or prefix are based on base58 encoding. Characters typically allowed in base58 include:</div>
                <div className='flex flex-col'>
                    <div className='text-xs flex flex-row gap-3'><div>*</div><div>Uppercase: A-Z (except for 0, O, I, and l)</div></div>
                    <div className='text-xs flex flex-row gap-3'><div>*</div><div>Lowercase: a-z</div></div>
                    <div className='text-xs flex flex-row gap-3'><div>*</div><div>Digits: 0-9</div></div>
                    <div className='text-xs flex flex-row gap-3'><div>*</div><div>Specific symbols: typically used in base58 encoding</div></div>
                </div>
                <div className='text-xs'>By using 3-5 characters only at the prefix or suffix is still good. But if use 3-5 characters or more in the prefix and suffix it will take a long time.</div>
                <div className='text-xs'>And if the generate process takes more than 48 hours. Our system will automatically refunds your payment to your wallet because we have PC with limited number of cores.</div>
              </div>

            </div>
          )}

          <div className='flex flex-col md:flex-row gap-4'>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Token Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter token name" {...field} />
                    </FormControl>
                    <FormDescription>
                      The full name of your token
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="symbol"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Token Symbol</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter token symbol (e.g., BTC)" {...field} />
                    </FormControl>
                    <FormDescription>
                      Uppercase token symbol (max 10 characters)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </div>

          <div className='flex flex-col md:flex-row gap-4'>

              <FormField
                control={form.control}
                name="decimals"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Decimals</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="Enter number of decimals" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Number of decimal places (default 6 for all token)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="supply"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Total Supply</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="Enter total token supply" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Total number of tokens to be minted
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </div>

          <div className='flex flex-col md:flex-row gap-4'>

              <FormField
                control={form.control}
                name="image"
                render={({ field: { value, onChange, ...fieldProps } }) => {

                  const handleImageChange = (file: File | null) => {
                    // Revoke previous blob URL if it exists
                    if (imagePreview && imagePreview.startsWith('blob:')) {
                      URL.revokeObjectURL(imagePreview);
                    }

                    // Update form value
                    onChange(file);

                    // Update preview
                    if (file) {
                      const blobUrl = URL.createObjectURL(file);
                      setImagePreview(blobUrl);
                    } else {
                      setImagePreview(null);
                    }
                  };

                  return (
                    <FormItem className='w-full'>
                      <FormLabel>Token Logo</FormLabel>
                      <FormControl>
                        <ImageUpload 
                          {...fieldProps}
                          onImageChange={handleImageChange}
                          imagePreview={imagePreview}
                          maxSizeInBytes={1 * 1024 * 1024} // 1MB
                        />
                      </FormControl>
                      <FormDescription>
                        Upload a logo for your token (max 1MB) .jpg, .png and .webp 
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Token Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your token and its purpose"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Provide a detailed description of your token
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
          </div>

          <Tabs defaultValue="website" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="website">Website</TabsTrigger>
                  <TabsTrigger value="telegram">Telegram</TabsTrigger>
                  <TabsTrigger value="twitter">Twitter</TabsTrigger>
                </TabsList>
                <TabsContent value="website">
                    <FormField
                        control={form.control}
                        name="websiteLink"
                        render={({ field }) => (
                          <FormItem className='w-full pt-2'>
                            <FormControl>
                              <Input 
                                placeholder="Enter your token's website URL" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Official website URL (optional)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                    />
                </TabsContent>
                <TabsContent value="telegram">
                    <FormField
                      control={form.control}
                      name="telegramLink"
                      render={({ field }) => (
                        <FormItem className='w-full pt-2'>
                          <FormControl>
                            <Input 
                              placeholder="Enter Telegram group/channel URL" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Telegram community link (optional)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </TabsContent>
                <TabsContent value="twitter">
                    <FormField
                      control={form.control}
                      name="twitterLink"
                      render={({ field }) => (
                        <FormItem className='w-full pt-2'>
                          <FormControl>
                            <Input 
                              placeholder="Enter Twitter profile/page URL" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Twitter profile link (optional)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </TabsContent>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="revokeFreezeEnabled"
              render={({ field }) => (
                <FormItem className="flex flex-row gap-1.5 items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Revoke Freeze (required) - 0.1 SOL
                    </FormLabel>
                    <FormDescription>
                        Revoke Freeze allows you to create a liquidity pool
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={true}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="revokeMintEnabled"
              render={({ field }) => (
                <FormItem className="flex flex-row gap-1.5 items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Revoke Mint - 0.1 SOL
                    </FormLabel>
                    <FormDescription>
                        Mint Authority allows you to increase tokens supply
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          
          <div className='flex flex-col lg:flex-row justify-between'>
              <div className='flex items-center font-semibold text-lg'>Total cost : {cost} SOL</div>

              <div className={`flex flex-col gap-1 ${!connected ? 'hidden' : 'block'}`}>
                  <Button 
                      type="button" 
                      onClick={handleDisconnect} 
                      className="w-full mt-2" 
                      style={{ 
                          backgroundColor: 'red',    // You can customize this based on your theme
                          color: 'white' 
                      }}
                  >
                      Disconnect
                  </Button>
                  <div className='text-xs flex justify-end'>{connected && publicKey ? publicKey.toString() : ""}</div>
              </div>
          </div>

          {!connected ?
              <WalletMultiButton 
                  style={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      fontWeight: 'normal', 
                      backgroundColor: '#FFF', 
                      color: 'black', 
                      height: '35px', 
                      width: '100%', 
                      borderRadius: '0.4rem' 
                  }}
              />
          :
              <div className='flex flex-col gap-3'>
                  <Button type="submit" className="w-full">
                    Create Token
                  </Button>
              </div>
          }
        </form>
      </Form>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
          {/* <DrawerTrigger>Open</DrawerTrigger> */}
          <DrawerContent>
            <DrawerHeader className='container mx-auto'>
              <DrawerTitle>Please check your order</DrawerTitle>
              <DrawerDescription>
                Detail :
              </DrawerDescription>
            </DrawerHeader>
            <div className='container mx-auto flex flex-col px-4 mb-4'>

                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Generate Type</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.generate}</div>
                    </div>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Email</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.email ? valx.email : "-"}</div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Prefix</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.prefix ? valx.prefix : "-"}</div>
                    </div>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Suffix</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.suffix ? valx.suffix : "-"}</div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Name</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.name ? valx.name : "-"}</div>
                    </div>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Symbol</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.symbol ? valx.symbol : "-"}</div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Decimals</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.decimals ? valx.decimals : "-"}</div>
                    </div>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Supply</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.supply ? valx.supply : "-"}</div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-full md:w-32'>Image</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{imagePreview ? 
                            <img 
                                src={imagePreview} 
                                alt="Token Logo Preview" 
                                className="w-full max-h-12 object-contain rounded-lg"
                            />
                        : "-"}</div>
                    </div>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Description</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.description ? valx.description : "-"}</div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Website</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.websiteLink ? valx.websiteLink : "-"}</div>
                    </div>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Telegram</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.telegramLink ? valx.telegramLink : "-"}</div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Twitter</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.twitterLink ? valx.twitterLink : "-"}</div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Revoke Freeze</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.revokeFreezeEnabled ? "True" : "False"}</div>
                    </div>
                    <div className='w-full flex flex-row'>
                        <div className='flex-none w-32'>Revoke Mint</div>
                        <div className='flex-none w-3'>:</div>
                        <div>{valx.revokeMintEnabled ? "True" : "False"}</div>
                    </div>
                </div>

            </div>
            <DrawerFooter className='container mx-auto pb-24 flex flex-row justify-between items-center'>
                <button className='bg-green-600 text-white rounded-sm px-12 py=2' onClick={handleTransfer}>Pay</button>
                <DrawerClose className='bg-white text-black rounded-sm px-12 py=2'>
                  Close
                </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
      </Drawer>
      </>
    
    )
}