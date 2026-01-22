'use client';

import Footer from '@/components/Footer';
import Player from '@/components/Player';
import { Button } from '@/components/ui/button';
import { aftermovies, documentaries, tourism } from '@/data/projects.json';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

type Project = {
  id: string;
  title: string;
  year: number;
  description: string;
  coverUrl: string;
  videoCase: string;
  galarey: string[];
};

const allProjects: Project[] = [...aftermovies, ...tourism, ...documentaries];

const getEmbedUrl = (url: string) => {
  if (url.includes('youtube.com/embed/')) return url;

  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split(/[?&]/)[0];
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }

  if (url.includes('watch?v=')) {
    try {
      const parsedUrl = new URL(url);
      const id = parsedUrl.searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}` : url;
    } catch {
      return url;
    }
  }

  return url;
};

export default function Case() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  // const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
  const project = allProjects.find((item) => item.id === params?.slug);
  console.log('project', project);

  if (!project) {
    return (
      <div className="flex min-h-screen w-full flex-col items-start gap-8 bg-[url(../../public/images/case-background.png)] bg-cover p-4 md:px-16">
        <Button onClick={() => router.push('/')} variant="link">
          <ArrowLeft />
          <span>voltar</span>
        </Button>
        <h1 className="text-3xl font-bold text-white md:text-5xl">Projeto nao encontrado</h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-start gap-8 bg-[url(../../public/images/case-background.png)] bg-cover p-4 md:px-16">
      <Button onClick={() => router.push('/')} variant="link">
        <ArrowLeft />
        <span>voltar</span>
      </Button>

      <Player thumb={project.coverUrl} title={project.title} video={getEmbedUrl(project.videoCase)} />

      {/* <h1 className="text-4xl font-bold text-white md:text-7xl">{project.title}</h1> */}

      {project.description ? <p className="text-lg md:w-1/2">{project.description}</p> : null}

      <span>-- Equipe Ref Future</span>

      {project.galarey?.length ? (
        <div className="mb-64 flex flex-wrap">
          {project.galarey.map((imageUrl) => (
            <Image
              key={imageUrl}
              width={350}
              height={400}
              className="md:h-[600px] md:w-[500px]"
              src={imageUrl}
              alt=""
            />
          ))}
        </div>
      ) : null}

      <Footer />
    </div>
  );
}
