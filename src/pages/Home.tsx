import { useState } from 'react';
import { Mouse } from 'lucide-react';
import alternativeBackground from '../../public/images/ref-home-alternative-background.png';
import Image from 'next/image';

export default function Home() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div id="home" className="relative flex h-screen flex-col justify-end-safe gap-8 overflow-hidden p-4 pb-24 md:p-16">
      {!videoFailed ? (
        <video
          className="absolute top-0 left-0 z-0 h-screen w-full object-cover"
          src="/videos/bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoFailed(true)}
        />
      ) : (
        <Image className="absolute top-0 left-0 z-0 h-screen w-full object-cover" src={alternativeBackground} alt="" />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(20deg,rgba(0,0,0,0.8)_10%,transparent)]"></div>

      <div className="z-10 text-white">
        <h1 className="text-4xl font-bold uppercase md:text-6xl">
          A <span className="text-outline">tela</span> é nossa <br /> janela para o{' '}
          <span className="text-outline">mundo</span>
        </h1>
      </div>
      <div className="z-10 flex animate-pulse gap-2">
        <Mouse size={24} className="text-base text-zinc-400" />
        <p className="text-lg font-normal text-zinc-400">Role para baixo</p>
      </div>
    </div>
  );
}
