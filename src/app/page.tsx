import { DotPattern } from '@/components/magicui/dot-pattern';
import { cn, nowCopyRight } from '@/lib/utils';

export default function Home() {
  const DotArrays = [
    {
      id: 1,
      className: '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] fill-blue-800  text-blue-800',
    },
    {
      id: 2,
      className:  '[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] fill-blue-800  text-blue-800',
    },
    {
      id: 3,
      className: '[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] fill-red-800 text-red-800',
    },
    {
      id: 4,
      className: '[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] fill-red-800 text-red-800',
    }
  ]
  const nowYear = nowCopyRight();

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-12 md:col-span-5 lg:col-span-5 bg-zinc-200  xl:col-span-4 order-2 md:order-1 gap-6 flex flex-col justify-between p-6">
        <div className="flex flex-col gap-3 md:gap-5">
          <h2 className="text-2xl md:text-3xl">
            Teb <span className="text-red-600">Technikum</span> i{' '}
            <span className="text-blue-600">Liceum</span>
          </h2>
          <div className="flex flex-col md:gap-3.5">
            <h3 className="text-xl md:text-3xl lg:text-4xl  televisor:text-5xl televisor:font-semibold">
              Logowanie
            </h3>
            <p className="televisor:text-xl text-pretty leading-relaxed font-normal">
              Zaloguj się, aby sprawdzić plan lekcji, ogłoszenia oraz inne ważne
              informacje. Po zalogowaniu uzyskasz dostęp do aktualnych zajęć i
              funkcji aplikacji.
            </p>
          </div>
        </div>
        <p className="text-zinc-800 televisor:text-xl font-normal">
          © {nowYear} Teb <span className="text-red-600">Technikum</span> i{' '}
          <span className="text-blue-600">Liceum</span> Wszelkie prawa
          zastrzeżone.
        </p>
      </div>
      <div className="col-span-12 md:col-span-7 lg:col-span-7  xl:col-span-8  w-full order-1 md:order-2 h-full lg:h-screen relative hidden md:flex flex-col items-start gap-6 televisor:gap-8 p-6 justify-center overflow-hidden">
        {DotArrays.map((dot) => (
          <DotPattern key={dot.id} width={20} height={20} cx={1} cy={1} cr={1} opacity={1} className={cn(dot.className)} />
        ))}
        <div className="flex flex-col gap-4 televisor:gap-5 backdrop-blur-3xl z-10 p-3">
          <h1 className="text-4xl  televisor:text-7xl televisor:font-bold">
            Teb <span className="text-red-600">Technikum</span> i{' '}
            <span className="text-blue-600">Liceum</span> Panel
          </h1>
          <p className="televisor:text-2xl text-pretty televisor:px-2 leading-relaxed font-normal">
            To{' '}
            <span className="text-red-600">
              system wyświetlający plany lekcji i ogłoszenia na szkolnych
              telewizorach.
            </span>{' '}
            <span className="text-blue-600">
              Uczniowie i nauczyciele mogą szybko sprawdzać informacje,
            </span>{' '}
            a{' '}
            <span className="text-red-600">
              administracja zarządza danymi przez intuicyjny panel
            </span>
            . Umożliwia bieżące aktualizacje, wysyłanie komunikatów i
            organizowanie harmonogramu zajęć.
          </p>
        </div>
      </div>
    </div>
  );
}
