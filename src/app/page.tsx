'use client';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Cases from '@/pages/Cases';
import Contact from '@/pages/Contact';
import Header from '@/components/Header';
import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const [isVisibleHeader, setIsVisibleHeader] = useState(false);
  const homeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!homeRef.current) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisibleHeader(!entry.isIntersecting);
    }, options);

    observer.observe(homeRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      {isVisibleHeader && <Header />}

      <div ref={homeRef}>
        <Home />
      </div>

      <About />
      <Cases />
      <Contact />
    </main>
  );
}
