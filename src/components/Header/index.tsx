import Image from 'next/image';
import logo from '../../../assets/logo-branca.svg';

export default function Header() {
  return (
    <header className="animate-slide-to-down fixed top-0 z-30 flex w-full items-center justify-center bg-black/80 px-16 backdrop-blur-md transition-all">
      <div className="flex w-full items-center justify-between">
        <a href="#home">
          <Image className="" width={48} src={logo} alt="ref logo" />
        </a>
        <nav>
          <ul className="flex items-center gap-8 font-medium text-zinc-300">
            <li className="transition-all hover:text-white hover:italic">
              <a href="#about">sobre</a>
            </li>
            <li className="transition-all hover:text-white hover:italic">
              <a href="#cases">cases</a>
            </li>
            <li className="transition-all hover:text-white hover:italic">
              <a href="#contact">contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
