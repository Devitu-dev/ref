import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import React from 'react';
import VITUSVG from '../../assets/VITU.svg';
import refLogo from '../../assets/ref-future-footer-logo.svg';

export default function Contact() {
  return (
    <div id="contact" className="flex h-screen flex-col items-center justify-between p-4">
      <div className="w-full space-y-8">
        <h2 className="text-outline mt-16 ml-4 text-4xl font-bold text-white md:ml-16 md:text-7xl">Contato</h2>
        <form className="flex max-w-lg flex-col gap-4 md:ml-16">
          <Input placeholder="Email" />
          <Textarea placeholder="Descreva seu projeto" />
          <Button variant="secondary">Enviar</Button>
        </form>
      </div>

      <footer className="w-full space-y-8 p-4 md:px-16">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex gap-8">
            <div className="flex flex-col items-start">
              <h4>sociais</h4>
              <ul className="font-light text-zinc-300">
                <li className="hover:text-white">
                  <a href="https://www.instagram.com/ref.future/">Instagram</a>
                </li>
                <li className="hover:text-white">
                  <a href="https://www.youtube.com/@RefFuture">YouTube</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h4>conheça também</h4>
              <ul className="font-light text-zinc-300">
                <li className="hover:text-white">
                  <span>Ref Crew</span>
                </li>
                <li className="hover:text-white">
                  <span>Ref Wedding</span>
                </li>
              </ul>
            </div>
          </div>
          <Image src={refLogo} alt="ref logo" />
        </div>
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <div>© Todos os direitos reservados | {new Date().getFullYear()}</div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-300">um site desenvolvido por </span>
            <a href="https://vitu-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image src={VITUSVG} alt="vitu logo" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
