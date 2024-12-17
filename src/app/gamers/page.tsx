"use client"

// import WebApp from '@twa-dev/sdk';
// import { useEffect } from 'react';
// import { useSignal, initData, type User } from '@telegram-apps/sdk-react';
// import Image from 'next/image';
// import { CompLogo } from './compLogo';

// interface TelegramUser {
//   id: number;
//   first_name: string;
//   last_name?: string;
//   username?: string;
//   is_bot?: boolean;
//   is_premium?: boolean;
//   photo_url?: string;
// }

// declare global {
//   interface Window {
//     Telegram?: {
//       WebApp: {
//         setHeaderColor: (color: string | { color: string }) => void;
//       };
//     };
//   }
// }

// function setHeaderColor(color: string | { color: string }): void {
//   if (typeof window !== 'undefined') {
//     // We're in a browser environment, so we can access the window object
//     window.Telegram.WebApp.setHeaderColor(color);
//   } else {
//     // We're in a Node.js environment, so we can't access the window object
//     console.error('Cannot set header color in Node.js environment');
//   }
// }

// export default function Home() {

//   const user: TelegramUser | undefined = WebApp.initDataUnsafe?.user;

//   useEffect(() => {
//     // alert( parseInitData(initDataString) )
//     if (user) {
//         // alert( WebApp.initDataUnsafe?.user?.photo_url )
//         // alert(`User ID: ${user.id}\nFirst Name: ${user.first_name}\nLast Name: ${user.last_name || 'N/A'}\nUsername: ${user.username || 'N/A'}`);
//     } else {
//         console.warn("User data is not available.");
//     }

//     // if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
//     //   // Method 1: Set solid color
//     //   window.Telegram.WebApp.setHeaderColor('#000');

//     //   // Method 2: Use theme-based color
//     //   // window.Telegram.WebApp.setHeaderColor('bg-color');

//     //   // Method 3: Set gradient color
//     //   // window.Telegram.WebApp.setHeaderColor({
//     //   //   color: 'linear-gradient(to right, #ff0000, #00ff00)'
//     //   // });
//     // }

//   }, [user]);

//   return (
//     <main className="min-h-screen flex items-center justify-center">
        
//         {/* <h1 className="text-4xl font-bold" style={{ color: 'white' }}>
//           Telegram Web App
//         </h1> */}

//         <CompLogo />
        
//         {/* <div className="absolute w-72 h-72 bg-red-900">
//             <Image
//                 src={`/alien.png`}
//                 alt="aliensky"
//                 height={200}
//                 width={100}
//                 // sizes="100vw"
//                 className="object-contain w-full h-full"
//             />
//         </div> */}

//       {/* <h1 className="text-4xl font-bold">
//         Telegram Web App
//       </h1>
//       <p className="mt-4">
//         Welcome to your Telegram Web App!
//       </p> */}
//     </main>
//   );
// }

// import useClient from 'next';
// import WebApp from '@twa-dev/sdk';
// import { useEffect } from 'react';
// import { useSignal, initData, type User } from '@telegram-apps/sdk-react';
// import Image from 'next/image';
import { CompLogo } from './compLogo';

// interface TelegramUser {
//   id: number;
//   first_name: string;
//   last_name?: string;
//   username?: string;
//   is_bot?: boolean;
//   is_premium?: boolean;
//   photo_url?: string;
// }

// declare global {
//   interface Window {
//     Telegram?: {
//       WebApp: {
//         setHeaderColor: (color: string | { color: string }) => void;
//       };
//     };
//   }
// }

// function setHeaderColor(color: string | { color: string }): void {
//   if (typeof window !== 'undefined') {
//     if (window.Telegram && window.Telegram.WebApp) {
//       window.Telegram.WebApp.setHeaderColor(color);
//     } else {
//       console.error('Telegram or WebApp is not defined in window object.');
//     }
//   } else {
//     console.error('Cannot set header color in Node.js environment');
//   }
// }
export default function Home() {
  // const user: TelegramUser | undefined = WebApp.initDataUnsafe?.user;

  // useEffect(() => {
  //   if (user) {
  //     // alert( WebApp.initDataUnsafe?.user?.photo_url )
  //     // alert(`User ID: ${user.id}\nFirst Name: ${user.first_name}\nLast Name: ${user.last_name || 'N/A'}\nUsername: ${user.username || 'N/A'}`);
  //   } else {
  //     console.warn("User data is not available.");
  //   }

  //   if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
  //     setHeaderColor('#000');
  //     // window.Telegram.WebApp.setHeaderColor('bg-color');
  //     // window.Telegram.WebApp.setHeaderColor({
  //     //   color: 'linear-gradient(to right, #ff0000, #00ff00)'
  //     // });
  //   }
  // }, [user]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <CompLogo />
      {/* <Image
        src={`/alien.png`}
        alt="aliensky"
        height={200}
        width={100}
        className="object-contain w-full h-full"
      /> */}
    </main>
  );
}
