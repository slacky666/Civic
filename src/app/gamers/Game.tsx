"use client"
// import React, { useState } from 'react';

// // Example image URLs (you can replace these with your own image URLs)
// const images = [
//   '/coingecko.jpeg',
//   '/coingecko.jpeg',
//   '/coingecko.jpeg',
//   '/coingecko.jpeg',
//   '/coingecko.jpeg'
// ];



// const Game: React.FC = () => {
//     const [showImages, setShowImages] = useState(false);
//     const [flippingImages, setFlippingImages] = useState<string[]>([]);
//     const [targetImage, setTargetImage] = useState<string | null>(null);
//     const [resultMessage, setResultMessage] = useState('');
  
//     const startGame = () => {
//       // Shuffle and pick a target image
//       const shuffled = images.sort(() => 0.5 - Math.random());
//       const selectedTarget = shuffled[0]; // Set the first image as the target
  
//       setFlippingImages(shuffled); // Set the random images to display
//       setTargetImage(selectedTarget); // Set the target image
//       setShowImages(true);
//       setResultMessage('');
//     };
  
//     const handleImageClick = (img: string) => {
//       if (img === targetImage) {
//         setResultMessage('You caught the target image!');
//       } else {
//         setResultMessage('Oops! This is not the target image.');
//       }
  
//       // Reset states after a delay to allow users to see the result
//       setTimeout(() => {
//         setShowImages(false);
//         setFlippingImages([]);
//         setResultMessage('');
//       }, 2000);
//     };
  
//     return (
//       <div style={{ textAlign: 'center', position: 'relative' }}>
//         {!showImages ? (
//           <button onClick={startGame}>Start Game</button>
//         ) : (
//           <div>
//             {flippingImages.map((img, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleImageClick(img)}
//                 style={{ cursor: 'pointer', display: 'inline-block', margin: '10px', position: 'relative' }}
//               >
//                 <img
//                   src={img}
//                   alt={`Image ${index + 1}`}
//                   style={{
//                     width: '100px',
//                     height: '100px',
//                     animation: 'flip-fall 2s forwards',
//                   }}
//                 />
//               </div>
//             ))}
//             <style jsx>{`
//               @keyframes flip-fall {
//                 0% {
//                   transform: translateY(100vh) rotateY(0deg);
//                   opacity: 0;
//                 }
//                 20% {
//                   opacity: 1;
//                   transform: translateY(-30%) rotateY(180deg);
//                 }
//                 50% {
//                   transform: translateY(0) rotateY(360deg);
//                 }
//                 75% {
//                   transform: translateY(-30%) rotateY(180deg);
//                 }
//                 100% {
//                   transform: translateY(100vh) rotateY(360deg) scale(0.5);
//                 }
//               }
//             `}</style>
//           </div>
//         )}
//         {resultMessage && <h2>{resultMessage}</h2>}
//       </div>
//     );
//   };
  
//   export default Game;
  
// import React, { useEffect, useState } from 'react';

// import { motion } from 'framer-motion';

// // Coin types with front and back faces
// const COIN_TYPES = [
//   { 
//     id: 'heads', 
//     front: '🌞', 
//     back: '🌙',
//     frontColor: 'bg-yellow-500',
//     backColor: 'bg-gray-500'
//   },
//   { 
//     id: 'planet', 
//     front: '🌎', 
//     back: '🚀',
//     frontColor: 'bg-blue-500',
//     backColor: 'bg-green-500'
//   },
//   { 
//     id: 'star', 
//     front: '⭐', 
//     back: '💫',
//     frontColor: 'bg-orange-500',
//     backColor: 'bg-purple-500'
//   }
// ];

// interface CoinProps {
//   id: string;
//   delay: number;
//   initialX: number;
//   type: typeof COIN_TYPES[number];
// }

// const Coin: React.FC<CoinProps> = ({ id, delay, initialX, type }) => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [rotation, setRotation] = useState(0);
//   const [side, setSide] = useState<'front' | 'back'>('front');

//   useEffect(() => {
//     // Periodic flipping during fall
//     const flipInterval = setInterval(() => {
//       setRotation(prev => prev + 180);
//       setSide(prev => prev === 'front' ? 'back' : 'front');
//     }, 500);

//     return () => clearInterval(flipInterval);
//   }, []);

//   return isVisible ? (
//     <motion.div
//       initial={{ 
//         y: -100, 
//         x: initialX,
//         rotate: 0,
//         scale: 1 
//       }}
//       animate={{ 
//         y: window.innerHeight + 100, 
//         rotate: 720,
//         transition: { 
//           duration: 3,
//           delay: delay,
//           ease: "easeInOut"
//         }
//       }}
//       onAnimationComplete={() => setIsVisible(false)}
//       className="absolute w-24 h-24 perspective-1000"
//     >
//       <div 
//         className={`
//           w-full h-full 
//           absolute 
//           transition-transform 
//           duration-500 
//           transform-style-3d
//           ${side === 'front' 
//             ? `rotate-y-0 ${type.frontColor}` 
//             : `rotate-y-180 ${type.backColor}`}
//           rounded-full 
//           flex 
//           items-center 
//           justify-center 
//           text-4xl 
//           font-bold 
//           shadow-2xl
//           backface-hidden
//         `}
//         style={{
//           transform: `rotateY(${rotation}deg)`
//         }}
//       >
//         {side === 'front' ? type.front : type.back}
//       </div>
//     </motion.div>
//   ) : null;
// };

// const CoinRain3D: React.FC = () => {
//   const [coins, setCoins] = useState<CoinProps[]>([]);

//   useEffect(() => {
//     // Generate coins with random types and positions
//     const newCoins = Array.from({ length: 5 }, (_, index) => {
//       const coinType = COIN_TYPES[Math.floor(Math.random() * COIN_TYPES.length)];
//       return {
//         id: `coin-${index}-${Date.now()}`,
//         delay: index * 0.3,
//         initialX: Math.random() * (window.innerWidth - 96),
//         type: coinType
//       };
//     });

//     setCoins(newCoins);

//     // Optional: Regenerate coins periodically
//     const intervalId = setInterval(() => {
//       const regeneratedCoins = Array.from({ length: 5 }, (_, index) => {
//         const coinType = COIN_TYPES[Math.floor(Math.random() * COIN_TYPES.length)];
//         return {
//           id: `coin-${index}-${Date.now()}`,
//           delay: index * 0.3,
//           initialX: Math.random() * (window.innerWidth - 96),
//           type: coinType
//         };
//       });
//       setCoins(regeneratedCoins);
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div 
//       className="
//         relative 
//         min-h-screen 
//         bg-gradient-to-b 
//         from-blue-100 
//         to-blue-300 
//         overflow-hidden
//       "
//     >
//       {coins.map((coin) => (
//         <Coin 
//           key={coin.id}
//           {...coin}
//         />
//       ))}
//       <div className="absolute bottom-0 w-full text-center p-4 text-gray-700">
//         3D Coin Rain Flip
//       </div>
//     </div>
//   );
// };

// export default CoinRain3D;


// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// // Coin types with more detailed front and back
// const COIN_TYPES = [
//   {
//     id: 'cosmic',
//     front: '🌞',
//     back: '🌙',
//     frontColor: 'bg-yellow-500',
//     backColor: 'bg-gray-500'
//   },
//   {
//     id: 'planetary',
//     front: '🌎',
//     back: '🚀',
//     frontColor: 'bg-blue-500',
//     backColor: 'bg-green-500'
//   },
//   {
//     id: 'stellar',
//     front: '⭐',
//     back: '💫',
//     frontColor: 'bg-orange-500',
//     backColor: 'bg-purple-500'
//   }
// ];

// interface CoinProps {
//   id: string;
//   delay: number;
//   initialX: number;
//   type: typeof COIN_TYPES[number];
// }

// const Coin: React.FC<CoinProps> = ({ id, delay, initialX, type }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   return isVisible ? (
//     <motion.div
//       initial={{
//         y: -100,
//         x: initialX,
//         rotate: 0,
//         scale: 1
//       }}
//       animate={{
//         y: window.innerHeight + 100,
//         rotate: [0, 720], // 720 degrees total for complete rotation
//         transition: {
//           duration: 3,
//           delay: delay,
//           ease: "linear"
//         }
//       }}
//       onAnimationComplete={() => setIsVisible(false)}
//       style={{
//         position: 'absolute',
//         width: '96px',
//         height: '96px',
//         perspective: '1000px'
//       }}
//     >
//       <div
//         style={{
//           width: '100%',
//           height: '100%',
//           position: 'absolute',
//           backfaceVisibility: 'hidden',
//           borderRadius: '9999px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontSize: '2.25rem',
//           fontWeight: 'bold',
//           boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//           backgroundColor: type.frontColor,
//           transform: 'rotateY(0deg)', // Default rotation so that we can flip it during animation
//           transformStyle: 'preserve-3d'
//         }}
//       >
//         {/* Coin flipping logic */}
//         <motion.div
//           animate={{
//             rotateY: [0, 180, 360] // Animated flipping
//           }}
//           transition={{
//             duration: 1.5,
//             delay: delay,
//             ease: "easeInOut"
//           }}
//           style={{
//             width: '100%',
//             height: '100%',
//             position: 'absolute',
//             backfaceVisibility: 'hidden'
//           }}
//         >
//           {type.front}
//         </motion.div>
//         <motion.div
//           animate={{
//             rotateY: [180, 360] // Animated flipping reverse for back
//           }}
//           transition={{
//             duration: 1.5,
//             delay: delay,
//             ease: "easeInOut"
//           }}
//           style={{
//             width: '100%',
//             height: '100%',
//             position: 'absolute',
//             backfaceVisibility: 'hidden',
//             backgroundColor: type.backColor,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '2.25rem',
//             fontWeight: 'bold',
//             borderRadius: '9999px'
//           }}
//         >
//           {type.back}
//         </motion.div>
//       </div>
//     </motion.div>
//   ) : null;
// };

// const CoinRain360: React.FC = () => {
//   const [coins, setCoins] = useState<CoinProps[]>([]);

//   useEffect(() => {
//     // Generate coins with random types and positions
//     const generateCoins = () => {
//       return Array.from({ length: 5 }, (_, index) => {
//         const coinType = COIN_TYPES[Math.floor(Math.random() * COIN_TYPES.length)];
//         return {
//           id: `coin-${index}-${Date.now()}`,
//           delay: index * 0.3,
//           initialX: Math.random() * (window.innerWidth - 96),
//           type: coinType
//         };
//       });
//     };

//     // Initial coin generation
//     setCoins(generateCoins());

//     // Regenerate coins periodically
//     const intervalId = setInterval(() => {
//       setCoins(generateCoins());
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div
//       style={{
//         position: 'relative',
//         minHeight: '100vh',
//         background: 'linear-gradient(to bottom, #bae6fd, #93c5fd)',
//         overflow: 'hidden'
//       }}
//     >
//       {coins.map((coin) => (
//         <Coin
//           key={coin.id}
//           {...coin}
//         />
//       ))}
//       <div style={{
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         textAlign: 'center',
//         padding: '1rem',
//         color: '#4b5563'
//       }}>
//         360° Coin Rain Rotation
//       </div>
//     </div>
//   );
// };

// export default CoinRain360;

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// // Coin types with more detailed front and back
// const COIN_TYPES = [
//   {
//     id: 'cosmic',
//     front: '🌞',
//     back: '🌙',
//     frontColor: 'bg-yellow-500',
//     backColor: 'bg-gray-500'
//   },
//   {
//     id: 'planetary',
//     front: '🌎',
//     back: '🚀',
//     frontColor: 'bg-blue-500',
//     backColor: 'bg-green-500'
//   },
//   {
//     id: 'stellar',
//     front: '⭐',
//     back: '💫',
//     frontColor: 'bg-orange-500',
//     backColor: 'bg-purple-500'
//   }
// ];

// interface CoinProps {
//   id: string;
//   delay: number;
//   initialX: number;
//   type: typeof COIN_TYPES[number];
// }

// const Coin: React.FC<CoinProps> = ({ id, delay, initialX, type }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   return isVisible ? (
//     <motion.div
//       initial={{ 
//         y: -100, 
//         x: initialX,
//         rotate: 0
//       }}
//       animate={{ 
//         y: window.innerHeight + 100, 
//         rotate: [0, -180, 0, 180], // Tossing effect
//         transition: { 
//           duration: 3,
//           delay: delay,
//           ease: "easeInOut"
//         }
//       }}
//       onAnimationComplete={() => setIsVisible(false)}
//       style={{
//         position: 'absolute',
//         width: '96px',
//         height: '96px',
//         perspective: '1000px'
//       }}
//     >
//       <div
//         style={{
//           width: '100%',
//           height: '100%',
//           position: 'absolute',
//           backfaceVisibility: 'hidden',
//           borderRadius: '9999px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontSize: '2.25rem',
//           fontWeight: 'bold',
//           boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//           backgroundColor: type.frontColor,
//         }}
//       >
//         {type.front}
//       </div>
//       <div
//         style={{
//           width: '100%',
//           height: '100%',
//           position: 'absolute',
//           backfaceVisibility: 'hidden',
//           borderRadius: '9999px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontSize: '2.25rem',
//           fontWeight: 'bold',
//           boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//           backgroundColor: type.backColor,
//           transform: 'rotateY(180deg)', // Back facing
//         }}
//       >
//         {type.back}
//       </div>
//     </motion.div>
//   ) : null;
// };

// const CoinTossRain: React.FC = () => {
//   const [coins, setCoins] = useState<CoinProps[]>([]);

//   useEffect(() => {
//     // Generate coins with random types and positions
//     const generateCoins = () => {
//       return Array.from({ length: 5 }, (_, index) => {
//         const coinType = COIN_TYPES[Math.floor(Math.random() * COIN_TYPES.length)];
//         return {
//           id: `coin-${index}-${Date.now()}`,
//           delay: index * 0.5, // Delays the start of each coin’s fall
//           initialX: Math.random() * (window.innerWidth - 100),
//           type: coinType
//         };
//       });
//     };

//     // Initial coin generation
//     setCoins(generateCoins());

//     // Regenerate coins periodically
//     const intervalId = setInterval(() => {
//       setCoins(generateCoins());
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div
//       style={{
//         position: 'relative',
//         minHeight: '100vh',
//         background: 'linear-gradient(to bottom, #bae6fd, #93c5fd)',
//         overflow: 'hidden'
//       }}
//     >
//       {coins.map((coin) => (
//         <Coin
//           key={coin.id}
//           {...coin}
//         />
//       ))}
//       <div style={{
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         textAlign: 'center',
//         padding: '1rem',
//         color: '#4b5563'
//       }}>
//         Coin Toss Rain Effect
//       </div>
//     </div>
//   );
// };

// export default CoinTossRain;


// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// // Coin types with detailed front and back
// const COIN_TYPES = [
//   {
//     id: 'cosmic',
//     front: '🌞',
//     back: '🌙',
//     frontColor: 'bg-yellow-500',
//     backColor: 'bg-gray-500'
//   },
//   {
//     id: 'planetary',
//     front: '🌎',
//     back: '🚀',
//     frontColor: 'bg-blue-500',
//     backColor: 'bg-green-500'
//   },
//   {
//     id: 'stellar',
//     front: '⭐',
//     back: '💫',
//     frontColor: 'bg-orange-500',
//     backColor: 'bg-purple-500'
//   }
// ];

// interface CoinProps {
//   id: string;
//   delay: number;
//   initialX: number;
//   type: typeof COIN_TYPES[number];
// }

// const Coin: React.FC<CoinProps> = ({ id, delay, initialX, type }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   return isVisible ? (
//     <motion.div
//       initial={{ 
//         y: -100, 
//         x: initialX,
//         rotate: 0
//       }}
//       animate={{ 
//         y: window.innerHeight + 100, 
//         rotate: [0, 720], // Complete roll over while falling
//         transition: { 
//           duration: 3,
//           delay: delay,
//           ease: "linear"
//         }
//       }}
//       onAnimationComplete={() => setIsVisible(false)}
//       style={{
//         position: 'absolute',
//         width: '100px',
//         height: '100px',
//         perspective: '1000px'
//       }}
//     >
//       <div
//         style={{
//           width: '100%',
//           height: '100%',
//           position: 'absolute',
//           backgroundColor: type.frontColor,
//           borderRadius: '50%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontSize: '2.5rem',
//           fontWeight: 'bold',
//           boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//           backfaceVisibility: 'hidden'
//         }}
//       >
//         {type.front}
//       </div>
//       <div
//         style={{
//           width: '100%',
//           height: '100%',
//           position: 'absolute',
//           backgroundColor: type.backColor,
//           borderRadius: '50%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontSize: '2.5rem',
//           fontWeight: 'bold',
//           boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//           backfaceVisibility: 'hidden',
//           transform: 'rotateY(180deg)' // Make the back face visible
//         }}
//       >
//         {type.back}
//       </div>
//     </motion.div>
//   ) : null;
// };

// const RollingCoinRain: React.FC = () => {
//   const [coins, setCoins] = useState<CoinProps[]>([]);

//   useEffect(() => {
//     // Generate coins with random types and positions
//     const generateCoins = () => {
//       return Array.from({ length: 5 }, (_, index) => {
//         const coinType = COIN_TYPES[Math.floor(Math.random() * COIN_TYPES.length)];
//         return {
//           id: `coin-${index}-${Date.now()}`,
//           delay: index * 0.5, // Delay to create a cascading effect
//           initialX: Math.random() * (window.innerWidth - 100), // Random horizontal position
//           type: coinType
//         };
//       });
//     };

//     // Initial coin generation
//     setCoins(generateCoins());

//     // Regenerate coins periodically
//     const intervalId = setInterval(() => {
//       setCoins(generateCoins());
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div
//       style={{
//         position: 'relative',
//         minHeight: '100vh',
//         background: 'linear-gradient(to bottom, #bae6fd, #93c5fd)',
//         overflow: 'hidden'
//       }}
//     >
//       {coins.map((coin) => (
//         <Coin
//           key={coin.id}
//           {...coin}
//         />
//       ))}
//       <div style={{
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         textAlign: 'center',
//         padding: '1rem',
//         color: '#4b5563'
//       }}>
//         Rolling Coin Rain Effect
//       </div>
//     </div>
//   );
// };

// export default RollingCoinRain;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Coin types with more detailed front and back
const COIN_TYPES = [
  { 
    id: 'cosmic', 
    front: '🌞', 
    back: '🌙',
    frontColor: 'bg-yellow-500',
    backColor: 'bg-gray-500'
  },
  { 
    id: 'planetary', 
    front: '🌎', 
    back: '🚀',
    frontColor: 'bg-blue-500',
    backColor: 'bg-green-500'
  },
  { 
    id: 'stellar', 
    front: '⭐', 
    back: '💫',
    frontColor: 'bg-orange-500',
    backColor: 'bg-purple-500'
  }
];

interface CoinProps {
  id: string;
  delay: number;
  initialX: number;
  type: typeof COIN_TYPES[number];
}

const Coin: React.FC<CoinProps> = ({ id, delay, initialX, type }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Interval to flip the coin every 500 milliseconds
    const interval = setInterval(() => {
      setRotation(prev => prev + 180); // Flip the coin by 180 degrees
    }, 500); // Adjust the flip speed as needed

    return () => clearInterval(interval);
  }, []);

  return isVisible ? (
    <motion.div
      initial={{ 
        y: -100, 
        x: initialX,
        rotate: 0,
        scale: 1 
      }}
      animate={{ 
        y: window.innerHeight + 100, 
        rotate: [0, 360, 720], // Full rotations during fall
        transition: { 
          duration: 5, // Extended fall duration
          delay: delay,
          ease: "linear"
        }
      }}
      onAnimationComplete={() => setIsVisible(false)}
      style={{
        position: 'absolute',
        width: '96px',
        height: '96px',
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      <div 
        style={{
            // background: 'black',
          width: '100%',
          height: '100%',
          position: 'absolute',
          transition: 'transform 0.5s', // Extended transition duration for flip
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.25rem',
          fontWeight: 'bold',
        //   boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          transform: `rotateY(${rotation}deg)`,
          backgroundColor: type.frontColor
        }}
      >
        {/* Alternate between front and back based on rotation */}
        {Math.floor(rotation / 180) % 2 === 0 ? type.front : type.back}
      </div>
    </motion.div>
  ) : null;
};

const CoinRain360: React.FC = () => {
  const [coins, setCoins] = useState<CoinProps[]>([]);

  useEffect(() => {
    // Generate coins with random types and positions
    const generateCoins = () => {
      return Array.from({ length: 5 }, (_, index) => {
        const coinType = COIN_TYPES[Math.floor(Math.random() * COIN_TYPES.length)];
        return {
          id: `coin-${index}-${Date.now()}`,
          delay: index * 0.5, // Increased delay for staggering effect
          initialX: Math.random() * (window.innerWidth - 96),
          type: coinType
        };
      });
    };

    // Initial coin generation
    setCoins(generateCoins());

    // Regenerate coins periodically
    const intervalId = setInterval(() => {
      setCoins(generateCoins());
    }, 8000); // Increased regeneration interval

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div 
      // style={{
      //   position: 'relative',
      //   minHeight: '100vh',
      //   // background: 'linear-gradient(to bottom, #bae6fd, #93c5fd)',
      //   // background: 'linear-gradient(to bottom, #bae6fd, #93c5fd)',
      //   overflow: 'hidden'
      // }}
      className='w-screen h-screen bg-black'
    >

      {coins.map((coin) => (
        <Coin
          key={coin.id}
          {...coin}
        />
      ))}
      <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        padding: '1rem',
        color: '#4b5563'
      }}>
        Continuous Flipping Coin Effect
      </div>
    </div>
  );
};

export default CoinRain360;