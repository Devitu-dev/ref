'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';

type PlayerProps = {
  thumb: string;
  title: string;
  video: string;
};

function Player({ thumb, title, video }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const autoplayUrl = video.includes('?') ? `${video}&autoplay=1` : `${video}?autoplay=1`;

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {isPlaying ? (
        <iframe
          className="h-full w-full"
          width="560"
          height="315"
          src={autoplayUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      ) : (
        <div className="group h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${thumb})` }}>
          <div className="absolute inset-0 flex items-center justify-center transition">
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="z-10 hidden h-16 w-16 items-center justify-center rounded-full bg-black text-white transition group-hover:flex"
              aria-label="Play">
              <Play />
            </button>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/60">
            <h2 className="z-0 px-4 text-center text-2xl font-bold text-white transition group-hover:opacity-0 md:text-4xl">
              {title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Player;
