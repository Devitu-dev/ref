import Image from 'next/image';
import aboutDesktop from '../../public/images/ref-about-desktop.png';
import aboutMobile from '../../public/images/ref-about-mobile.png';
import refLogo from '../../assets/ref-future.png';

export default function About() {
  return (
    <div id="about" className="relative flex min-h-screen overflow-hidden md:items-center">
      <Image
        className="absolute inset-0 hidden object-cover object-center md:block"
        src={aboutDesktop}
        alt="hero image"
        fill
        sizes="100vw"
        priority
      />
      <Image
        className="absolute inset-0 object-cover object-center md:hidden"
        src={aboutMobile}
        alt="hero image"
        fill
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 z-10 bg-linear-180 from-black from-20% via-black/50 to-transparent to-60% md:bg-linear-120" />
      <div className="z-20 space-y-8 p-4 md:basis-3/5 md:p-16">
        <div className="flex items-center">
          <Image src={refLogo} alt="ref-logo" className="w-64 md:w-96" />
        </div>
        <p className="text-justify text-xl text-zinc-200">
          Somos um Hub Audiovisual composto por mentes jovens, disruptivas e apaixonadas pelo que fazem. Há 5 anos
          desenvolvendo projetos em mais de 10 nichos e sempre com o mesmo pensamento -{' '}
          <strong className="text-white">a tela é nossa janela para o mundo.</strong>
        </p>
      </div>
    </div>
  );
}
