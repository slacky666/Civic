import * as React from "react"

import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { docsConfig } from "@/config/docs"
// import {ScrollToSection} from './ScrollLink';
import { ScrollLink } from '@/components/ScrollLink';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function MainNav() {
  
  return (
    <div className="hidden w-full h-full md:block relative">

        <div className="w-full h-full flex flex-row gap-6">

            <div className="flex-none w-32 h-full relative flex flex-row items-center">
                <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
                    <Image
                        src={`/civic.png`}
                        alt="civic coin"
                        height='20'
                        width="20"
                        className="object-contain"
                    />
                    <span className=" font-bold lg:inline-block uppercase text-xl">
                      civic
                    </span>
                </Link>
            </div>

            <NavigationMenu>

              <NavigationMenuList>
                <div className="flex items-center gap-2">
                {docsConfig.hnetNav.map((item, index) => (
                    <React.Fragment key={index+1}>
                    {item?.items?.length < 1 ? 
                            <NavigationMenuItem key={index+1}>
                                <Link 
                                  href={`${item.href}`} 
                                  scroll={false} 
                                  legacyBehavior 
                                  passHref 
                                >
                                  {item.newTab ? 
                                    <NavigationMenuLink target={item.newTab ? '_blank' : '_self'} className={navigationMenuTriggerStyle()}>
                                      {item.title}
                                    </NavigationMenuLink>
                                  :
                                    // <ScrollToSection targetId={`${item.href}`}  title={item.title} />
                                    <ScrollLink href={`${item.href}`} className={navigationMenuTriggerStyle()}>{item.title}</ScrollLink>
                                  }
                                    
                                    {/* </ScrollToSection> */}
                                </Link>
                            </NavigationMenuItem>
                        : 
                            <NavigationMenuItem key={index+1}>
                              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                  {item.items.map((component) => (
                                    <ListItem
                                      key={component.title}
                                      title={component.title}
                                      href={component.href}
                                    >
                                      {component.description}
                                    </ListItem>
                                  ))}
                                </ul>
                              </NavigationMenuContent>
                            </NavigationMenuItem> 
                    }
                    </React.Fragment>

                ))}
                </div>
              </NavigationMenuList>

            </NavigationMenu>

        </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
