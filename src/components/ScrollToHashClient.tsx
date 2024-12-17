'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function ScrollToHashClientContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, searchParams]);

  return null;
}

export function ScrollToHashClient() {
  return (
    <Suspense fallback={null}>
      <ScrollToHashClientContent />
    </Suspense>
  );
}

