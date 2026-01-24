import Link from 'next/link';

type TCase = {
  id: string;
  title: string;
  coverUrl: string;
  videoCase: string;
};

export default function CaseCard({ caseData }: { caseData: TCase }) {
  return (
    <Link href={`/case/${caseData.id}`}>
      <div className="group relative h-96 w-96 cursor-pointer overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
          style={{ backgroundImage: `url(${caseData.coverUrl})` }}></div>

        <div className="relative flex h-full w-full items-end p-4">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <h3 className="relative z-10 text-xl font-bold text-white">{caseData.title}</h3>
        </div>
      </div>
    </Link>
  );
}
