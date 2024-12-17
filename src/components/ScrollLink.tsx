// 'use client';

// import React from 'react';
// import { NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
// import { useRef } from 'react';

// const ScrollToSection = ({ targetId, title }: { 
//   targetId: string 
//   title: string
// }) => {
  
//   const handleClick = (e: React.MouseEvent) => {

//       e.preventDefault();

//       const targetElement = document.getElementById(targetId.slice(2));

//       if (targetElement) {
//           targetElement.scrollIntoView({ 
//             behavior: 'smooth', 
//             block: 'start' 
//           });
//       }

//   };

//   return (
//     <NavigationMenuLink 
//       onClick={handleClick}
//       className={navigationMenuTriggerStyle()}
//     >
//       {title}
//     </NavigationMenuLink>
//   );
// };

// const PageWithScrolling = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const scrollToSection = () => {
//     sectionRef.current?.scrollIntoView({ 
//       behavior: 'smooth', 
//       block: 'start' 
//     });
//   };

//   return (
//     <>
//       <NavigationMenuLink 
//         onClick={scrollToSection}
//         className="cursor-pointer"
//       >
//         Scroll to Section
//       </NavigationMenuLink>

//       {/* Target section */}
//       <div id="target-section" ref={sectionRef}>
//         Content to scroll to
//       </div>
//     </>
//   );
// };

// export { ScrollToSection, PageWithScrolling };

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

interface ScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const ScrollLink: React.FC<ScrollLinkProps> = ({ href, children, className }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Check if the link is to an internal ID or a different page
    if (href.startsWith('#')) {
      // Scroll to element on the same page
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to the page
      router.push(href);

      // Wait a short time to ensure page load before scrolling
      setTimeout(() => {
        const element = document.querySelector(href.split('#')[1] ? `#${href.split('#')[1]}` : '');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className={className}
      scroll={false}
    >
      {children}
    </Link>
  );
};

