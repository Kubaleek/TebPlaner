import Image from 'next/image';
import LogoV1 from '../../../../public/teb.avif';
import LogoV2 from '../../../../public/teb2.avif';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { GridPattern } from '@/components/magicui/grid-pattern';

export default function LoginGraphic() {
    return (
        <div className="col-span-12 lg:col-span-6 lg:flex relative  h-full z-[-1] lg:h-screen flex-col hidden justify-center items-center bgLogin ">
          
        <DotPattern className="stroke-[#ff828a] fill-[#ff828a] [mask-image:radial-gradient(300px_circle_at_top_right,white,transparent)] xl:[mask-image:radial-gradient(800px_circle_at_top_right,white,transparent)]" />
        <GridPattern className="stroke-[#ff828a] fill-[#ff828a] [mask-image:radial-gradient(300px_circle_at_bottom_left,white,transparent)] xl:[mask-image:radial-gradient(600px_circle_at_bottom_left,white,transparent)]" />
        <Image
          src={LogoV2}
          alt="Teb Technikum i Liceum"
          width={200}
          height={200}
          className="absolute lg:bottom-24 lg:left-12 xl:bottom-24 xl:left-24 backdrop-blur-3xl"
        />
        <Image
          src={LogoV1}
          alt="Teb Technikum i Liceum"
          width={200}
          height={200}
          className="absolute top-24 right-24 backdrop-blur-3xl"
        />
        <div className="relative justify-center items-center flex w-full py-8">
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="lg:text-4xl televisor:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-white to-[#fafafa] bg-opacity-50">
              Teb Technikum i Liceum
            </h1>
            <div className="flex  relative text-center mx-auto items-start">
              <p className="hidden xl:flex text-[54px] text-[#fafafa] absolute -top-1.5 -left-5">
                ~
              </p>
              <p className="hidden xl:flex text-[54px] text-[#fafafa] absolute xl:bottom-1.5 televisor:-bottom-0  xl:right-[180px] televisor:right-[254px]">
                ~
              </p>
              <p className="televisor:text-2xl xl:max-w-xl televisor:max-w-3xl font-medium text-[#fafafa] text-pretty leading-relaxed">
                Zaloguj się, aby sprawdzić plan lekcji, ogłoszenia oraz inne
                ważne informacje. Po zalogowaniu uzyskasz dostęp do aktualnych
                zajęć i funkcji aplikacji.
              </p>
            </div>
          </div>
        </div>
       
      </div>
    );
}