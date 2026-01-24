'use client';

import { useRef, useEffect } from 'react';
import CaseCard from '@/components/CaseCard';

type TCase = {
  id: string;
  title: string;
  year: number;
  coverUrl: string;
  videoCase: string;
};

export default function Carrousel({ events, reverse }: { events: TCase[]; reverse: boolean }) {
  const doubledEvents = [...events, ...events];
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const timerRef = { current: null as NodeJS.Timeout | null };

    const pauseAnimation = () => {
      el.style.animationPlayState = 'paused';

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        el.style.animationPlayState = 'running';
      }, 1500);
    };

    el.addEventListener('scroll', pauseAnimation);

    return () => {
      el.removeEventListener('scroll', pauseAnimation);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="scrollbar-hide flex w-full flex-col overflow-x-auto">
      <ul ref={listRef} className={`animate-${reverse ? 'marquee-reverse' : 'marquee'} flex snap-x snap-mandatory`}>
        {doubledEvents.map((event, idx) => (
          <li key={idx} className="flex-[0_0_25%] snap-start">
            <CaseCard caseData={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}
