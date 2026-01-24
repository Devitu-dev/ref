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
        <button
          onClick={() => setIsPlaying(true)}
          className="group h-full w-full cursor-pointer bg-cover bg-center"
          style={{ backgroundImage: `url(${thumb})` }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">
            <h2 className="z-0 text-center text-2xl font-bold text-white transition md:text-4xl">{title}</h2>
            <div className="flex items-center gap-2 text-white/60">
              <p>Click para iniciar o vídeo</p>
              <Play size={16} />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

export default Player;
