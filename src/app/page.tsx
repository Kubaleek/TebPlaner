import { DotPattern } from '@/components/magicui/dot-pattern';
import { cn } from '@/lib/utils';
export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-12 lg:col-span-5 xl:col-span-4 order-2 lg:order-1 flex flex-col justify-between p-6">
        <div className='flex flex-col gap-5'>
          <h2 className="text-3xl">
            Teb <span className="text-red-600">Technikum</span> i{' '}
            <span className="text-blue-600">Liceum</span>
          </h2>
          <div className='flex flex-col gap-3'>
            <h3 className="text-4xl  televisor:text-5xl televisor:font-bold">
              Logowanie
            </h3>
            <p className="televisor:text-2xl text-pretty leading-relaxed font-medium">
              Zaloguj się, aby sprawdzić plan lekcji, ogłoszenia oraz inne
              ważne informacje. Po zalogowaniu uzyskasz dostęp do aktualnych
              zajęć i funkcji aplikacji.
            </p>
          </div>
        </div>
        <div />
      </div>
      <div className="col-span-12 lg:col-span-7  xl:col-span-8  w-full order-1 lg:order-2 h-full lg:h-screen relative flex flex-col items-start gap-6 televisor:gap-8 p-6 justify-center overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          opacity={1}
          className={cn(
            '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] fill-blue-800  text-blue-800',
          )}
        />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          opacity={1}
          className={cn(
            '[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] fill-red-800 text-red-800',
          )}
        />
        <div className="flex flex-col gap-4 televisor:gap-5 backdrop-blur-3xl z-10 p-3">
          <h1 className="text-4xl  televisor:text-7xl televisor:font-bold">
            Teb <span className="text-red-600">Technikum</span> i{' '}
            <span className="text-blue-600">Liceum</span> Panel
          </h1>
          <p className="televisor:text-2xl text-pretty televisor:px-2 leading-relaxed font-medium">
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
