import Carrousel from '@/components/Carrousel';
import { documentaries, aftermovies, tourism } from '@/data/projects.json';

export default function Cases() {
  return (
    <div id="cases" className="flex flex-col gap-8">
      <h2 className="mt-16 ml-4 text-4xl font-bold text-white md:ml-16 md:text-7xl">Cases</h2>

      <h3 className="ml-4 text-xl font-medium text-zinc-300 md:ml-16">Turismo</h3>
      <Carrousel events={tourism} reverse={true} />

      <h3 className="ml-4 text-xl font-medium text-zinc-300 md:ml-16">Aftermovies</h3>
      <Carrousel events={aftermovies} reverse={false} />

      <h3 className="ml-4 text-xl font-medium text-zinc-300 md:ml-16">Documentários</h3>
      <Carrousel events={documentaries} reverse={true} />
    </div>
  );
}
