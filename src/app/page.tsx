'use client';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Cases from '@/pages/Cases';
import Contact from '@/pages/Contact';
import Header from '@/components/Header';
import MobileHeader from '@/components/MobileHeader';
import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const [isVisibleHeader, setIsVisibleHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const homeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!homeRef.current) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      const isHomeVisible = entry.intersectionRatio >= 0.9;
      setIsVisibleHeader(!isHomeVisible);
    }, options);

    observer.observe(homeRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <main>
      {isVisibleHeader && (isMobile ? <MobileHeader /> : <Header />)}

      <div ref={homeRef}>
        <Home />
      </div>

      <About />
      <Cases />
      <Contact />
    </main>
  );
}
