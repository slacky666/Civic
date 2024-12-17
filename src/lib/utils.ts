import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export const detectDevice = (userAgent: string) => {
//   const md = new MobileDetect(userAgent);
//   return {
//     isMobile: md.mobile() !== null,
//     isTablet: md.tablet() !== null,
//     isDesktop: md.userAgent() === null
//   };
// }