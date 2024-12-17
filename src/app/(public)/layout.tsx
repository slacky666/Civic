import React from "react";
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"
import { ScrollToHashClient } from '@/components/ScrollToHashClient';
import { Suspense } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {children}
        {/* <Suspense fallback={null}>
          <ScrollToHashClient />
        </Suspense> */}
      </main>
      <SiteFooter />
    </>
  );
}