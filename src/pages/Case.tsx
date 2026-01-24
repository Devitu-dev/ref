'use client';

import Footer from '@/components/Footer';
import Player from '@/components/Player';
import { Button } from '@/components/ui/button';
import { aftermovies, documentaries, tourism } from '@/data/projects.json';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const [viewerOpen, setViewerOpen] = useState(false);
  const galleryImages = project?.galarey ?? [];
  const viewerDurationMs = 300;

  useEffect(() => {
    if (viewerIndex === null) {
      setViewerOpen(false);
      return;
    }

    const timer = setTimeout(() => setViewerOpen(true), 10);
    return () => clearTimeout(timer);
  }, [viewerIndex]);

  const openViewer = (index: number) => setViewerIndex(index);
  const closeViewer = () => {
    setViewerOpen(false);
    setTimeout(() => setViewerIndex(null), viewerDurationMs);
  };
  const goPrev = () =>
    setViewerIndex((current) => {
      if (current === null) return 0;
      return (current - 1 + galleryImages.length) % galleryImages.length;
    });
  const goNext = () =>
    setViewerIndex((current) => {
      if (current === null) return 0;
      return (current + 1) % galleryImages.length;
    });

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
    <div className="flex min-h-screen w-full flex-col items-start gap-12 bg-[url(../../public/images/case-background.png)] bg-cover p-4 md:px-16">
      <Button onClick={() => router.push('/')} variant="link">
        <ArrowLeft />
        <span>voltar</span>
      </Button>

      <Player thumb={project.coverUrl} title={project.title} video={getEmbedUrl(project.videoCase)} />

      {project.description ? (
        <div className="flex w-full flex-col items-center justify-center gap-4 border border-white/10 px-4 py-16">
          <p className="text-justify text-lg md:w-1/2">{project.description}</p>
          <span>Equipe Ref Future</span>
        </div>
      ) : null}

      {galleryImages.length ? (
        <div className="mb-16 w-full space-y-12">
          <h3 className="w-full text-center text-2xl font-medium text-zinc-300">Galeria</h3>
          <div className="scrollbar-hide flex w-full gap-4 overflow-x-auto pb-2">
            {galleryImages.map((imageUrl, index) => (
              <button
                key={imageUrl}
                type="button"
                onClick={() => openViewer(index)}
                className="group relative h-64 w-64 flex-none overflow-hidden">
                <Image
                  src={imageUrl}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 256px, 256px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {viewerIndex !== null ? (
        <div
          role="button"
          tabIndex={0}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            viewerOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeViewer}
          onKeyDown={(event) => {
            if (event.key === 'Escape') closeViewer();
          }}
          aria-label="Fechar galeria">
          <button
            type="button"
            className={`relative mx-4 h-[80vh] w-[90vw] transition-transform duration-300 ${
              viewerOpen ? 'scale-100' : 'scale-95'
            }`}
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
            aria-label="Visualizador de imagem">
            <Image src={galleryImages[viewerIndex]} alt="" fill className="object-contain" />

            <button
              type="button"
              onClick={closeViewer}
              className="absolute top-2 right-2 rounded-full bg-black p-4 text-sm font-medium text-white transition hover:text-white/60"
              aria-label="Fechar">
              <X />
            </button>

            <button
              type="button"
              onClick={goPrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black p-4 text-sm font-medium text-white transition hover:text-white/60"
              aria-label="Foto anterior">
              <ArrowLeft />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black p-4 text-sm font-medium text-white transition hover:text-white/60"
              aria-label="Proxima foto">
              <ArrowRight />
            </button>
          </button>
        </div>
      ) : null}

      <Footer />
    </div>
  );
}
