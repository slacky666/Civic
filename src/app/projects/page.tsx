'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';

import { createConfig, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { 
  ConnectionProvider, 
  WalletProvider,
  useConnection,
  useWallet
} from '@solana/wallet-adapter-react';
import { 
  WalletAdapterNetwork 
} from '@solana/wallet-adapter-base';
import { 
  PhantomWalletAdapter, 
  SolflareWalletAdapter 
} from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css';

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

export default function WalletTransferPage() {

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = 'https://api.devnet.solana.com';

  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter()
  ], []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <DevnetTransferComponent />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

function DevnetTransferComponent() {

  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

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
          lamports: Math.round(0.3 * LAMPORTS_PER_SOL)
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
        alert(`Successfully transferred 0.3 SOL on Devnet!`);
      } else {
        alert('Transfer failed');
      }
    } catch (error) {
      console.error('Transfer error:', error);
      alert(`Transfer failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">      
      {/* <div className="mb-4">
         <WalletMultiButton /> 
      </div> */}
    </div>
  );
}
