
export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-12 lg:col-span-5 xl:col-span-4"></div>
      
      <div className="col-span-12 lg:col-span-7  xl:col-span-8 televisor:max-w-6xl h-screen relative flex flex-col items-start gap-6 televisor:gap-8 p-6 justify-center overflow-hidden">
        <div className="flex flex-col gap-4 televisor:gap-8">
          <h1 className="text-4xl  televisor:text-7xl televisor:font-bold">
            Teb <span className="text-red-600">Technikum</span> i <span className="text-blue-600">Liceum</span> Panel
          </h1>
          <p className="televisor:text-2xl text-pretty leading-relaxed font-medium">
            To system wyświetlający plany lekcji i ogłoszenia na szkolnych telewizorach. Uczniowie i nauczyciele mogą szybko sprawdzać informacje, a administracja zarządza danymi przez intuicyjny panel. Umożliwia bieżące aktualizacje, wysyłanie komunikatów i organizowanie harmonogramu zajęć.
          </p>
        </div>
        {/* <div className="max-w-2xl flex flex-col gap-6 mx-auto relative z-10 w-full">
          <h1 className="lg:text-5xl xl:text-7xl font-bold text-white">
            Teb Planer Szkolna
          </h1>
          <p className="font-medium lg:text-lg xl:text-xl text-neutral-300 max-w-3xl">
            Teb Planer Lekcyjny to aplikacja wyświetlająca plany lekcji i ogłoszenia dla nauczycieli na telewizorach w szkołach. Umożliwia łatwe zarządzanie informacjami dzięki systemowi do wgrywania danych i wysyłania wiadomości.
          </p>
        </div> */}
      </div>
    </div>
  );
}
