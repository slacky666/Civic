"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { docsConfig } from "@/config/docs"

import Image from "next/image"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden flex items-center h-full"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          {/* <span className="sr-only">Toggle Menu</span> */}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <div className="relative overflow-hidden w-7 h-7 mr-2">
          <Image
              src="/bg-crop.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="aliensky coin"
              className="object-contain w-full h-full"
          />
          </div>  
          <span className="font-bold">ALIENSKY</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {docsConfig.hnetNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-2">
                {item?.items?.length < 1 ? 
                    <React.Fragment key={index+1}>
                        <MobileLink 
                            href={item.href ?? ''}
                            target={item.newTab ? '_blank' : '_self'}
                            onOpenChange={setOpen}
                            className="text-muted-foreground"
                        >
                            <h4 className="font-medium">{item.title}</h4>
                        </MobileLink>
                    </React.Fragment>
                    : 
                    <h4 className="font-medium">{item.title}</h4> 
                }
                {item?.items?.length > 0 &&
                  item.items.map((item: any) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            href={item.href}
                            onOpenChange={setOpen}
                            className="text-muted-foreground ml-6"
                          >
                            {item.title}
                            {item.label && (
                              <span className="ml-6 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  target?: '_self' | '_blank'
  href: string | URL
}

function MobileLink({
  target = '_self', 
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {

  const router = useRouter()

  const handleSelfLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const hrefString = typeof href === 'string' 
    ? href 
    : href instanceof URL 
      ? href.toString() 
      : '';


    if (hrefString.startsWith('#')) {

      const targetElement = document.getElementById(hrefString.slice(1));
      
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
      
    } else {
      router.push(hrefString);
    }

    onOpenChange?.(false);
  };

  return (
      <Link
        href={href}
        onClick={target === '_self' ? handleSelfLinkClick : undefined}
        target={target}
        className={cn(className)}
        {...props}
      >
        {children}
      </Link>
  )
}