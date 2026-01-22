import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logo from '../../../assets/logo-branca.svg';

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="animate-slide-to-down fixed top-0 z-30 w-full bg-black/80 px-6 py-3 backdrop-blur-md transition-all">
      <div className="flex w-full items-center justify-between">
        <a href="#home">
          <Image width={40} src={logo} alt="ref logo" />
        </a>
        <button
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={handleToggle}
          className="text-zinc-200 transition-all hover:text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="mt-3 border-t border-white/10 pt-3">
          <ul className="flex flex-col items-end gap-3 text-base font-medium text-zinc-300">
            <li className="">
              <a href="#about" onClick={handleClose}>
                sobre
              </a>
            </li>
            <li className="">
              <a href="#cases" onClick={handleClose}>
                cases
              </a>
            </li>
            <li className="">
              <a href="#contact" onClick={handleClose}>
                contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
