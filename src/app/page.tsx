
export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-12 lg:col-span-5 xl:col-span-4"></div>
      
      <div className="col-span-12 lg:col-span-7  xl:col-span-8 h-screen relative flex flex-col items-start gap-6 p-6 justify-center overflow-hidden">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl televisor:text-5xl televisor:font-bold">
            Teb <span className="text-red-600">Technikum</span> i <span className="text-blue-600">Liceum</span> Panel
          </h1>
          <p className="televisor:text-2xl text-pretty leading-relaxed font-medium">
            To system wyświetlający plany lekcji i ogłoszenia na szkolnych telewizorach. Uczniowie i nauczyciele mogą szybko sprawdzać informacje, a administracja zarządza danymi przez intuicyjny panel. Umożliwia bieżące aktualizacje, wysyłanie komunikatów i organizowanie harmonogramu zajęć.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-start max-w-5xl gap-6 items-start">
          <div className="bg-zinc-200/25 backdrop-blur-3xl p-4 border border-[#1818185b] shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),_0px_24px_10px_0px_rgba(0,0,0,0.01),_0px_13px_8px_0px_rgba(0,0,0,0.02),_0px_6px_6px_0px_rgba(0,0,0,0.03),_0px_1px_3px_0px_rgba(0,0,0,0.04)]">
            <div />
            <div>
              <h2 className="text-xl font-bold">Rozmawiaj na czacie ze swoimi połączeniami</h2>
              <p className="text-gray-500 text-sm leading-relaxed">To nie ma sensu, ale mamy to tutaj. Używaj tego tak, jak chcesz.</p>
            </div>
          </div>
          <div className="bg-zinc-200/25 backdrop-blur-3xl p-4 border border-[#1818185b] shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),_0px_24px_10px_0px_rgba(0,0,0,0.01),_0px_13px_8px_0px_rgba(0,0,0,0.02),_0px_6px_6px_0px_rgba(0,0,0,0.03),_0px_1px_3px_0px_rgba(0,0,0,0.04)]">
            <div />
            <div>
              <h2 className="text-xl font-bold">Rozmawiaj na czacie ze swoimi połączeniami</h2>
              <p className="text-gray-500 text-sm leading-relaxed">To nie ma sensu, ale mamy to tutaj. Używaj tego tak, jak chcesz.</p>
            </div>
          </div>
          <div className="bg-zinc-200/25 backdrop-blur-3xl p-4 border border-[#1818185b] shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),_0px_24px_10px_0px_rgba(0,0,0,0.01),_0px_13px_8px_0px_rgba(0,0,0,0.02),_0px_6px_6px_0px_rgba(0,0,0,0.03),_0px_1px_3px_0px_rgba(0,0,0,0.04)]">
            <div />
            <div>
              <h2 className="text-xl font-bold">Rozmawiaj na czacie ze swoimi połączeniami</h2>
              <p className="text-gray-500 text-sm leading-relaxed">To nie ma sensu, ale mamy to tutaj. Używaj tego tak, jak chcesz.</p>
            </div>
          </div>
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
