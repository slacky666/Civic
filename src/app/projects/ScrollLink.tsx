'use client';

import React from 'react';
import { NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const ScrollToSection = ({ targetId, title }: { 
  targetId: string 
  title: string
}) => {
  
  const handleClick = (e: React.MouseEvent) => {

      e.preventDefault();

      const targetElement = document.getElementById(targetId.slice(2));

      if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
      }

  };

  return (
    <NavigationMenuLink 
      onClick={handleClick}
      className={navigationMenuTriggerStyle()}
    >
      {title}
    </NavigationMenuLink>
  );
};

import { useRef } from 'react';

const PageWithScrolling = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  return (
    <>
      <NavigationMenuLink 
        onClick={scrollToSection}
        className="cursor-pointer"
      >
        Scroll to Section
      </NavigationMenuLink>

      {/* Target section */}
      <div id="target-section" ref={sectionRef}>
        Content to scroll to
      </div>
    </>
  );
};

export { ScrollToSection, PageWithScrolling };
