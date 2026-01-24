import Image from 'next/image';
import VITUSVG from '../../assets/VITU.svg';
import refLogo from '../../assets/ref-future-footer-logo.svg';

function Footer() {
  return (
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
  );
}

export default Footer;
