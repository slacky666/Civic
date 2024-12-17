import { MainNavItem, SidebarNavItem } from "@/types/nav"

export interface DocsConfig {
  hnetNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  hnetNav: [
    {
      title: "About",
      href: "/#about",
      newTab: false,
      items: [],
    },
    {
      title: "how to buy",
      href: "/#howtobuy",
      newTab: false,
      items: [],
    },
    {
      title: "Socials",
      href: "/#socials",
      newTab: false,
      items: [],
    },
    {
      title: "Roadmap",
      href: "/#roadmap",
      newTab: false,
      items: [],
    },
    {
      title: "Join Telegram",
      href: "https://t.me/+ioGHaX9zGMhkMzNl",
      newTab: true,
      items: [],
    },
    {
      title: "Apps",
      href: "/",
      items: [
        {
          title: "Token Creator",
          href: "/projects/token",
          description: "Effortlessly create your Solana SPL Token with our 7+1 step process – no coding required.",
          items: [],
        },
        // {
        //   title: "Whale Address Checker",
        //   href: "/whale",
        //   description: "Whale Address Checker is an innovative Solana-based token project designed to provide real-time insights into large token holders (whales) within the cryptocurrency ecosystem. By leveraging blockchain transparency and advanced tracking mechanisms, our token offers unprecedented visibility into significant wallet movements.",
        //   items: [],
        // },
      ],
    },
  ],
}
