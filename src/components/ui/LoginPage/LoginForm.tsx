import { DotPattern } from '@/components/magicui/dot-pattern';
import { GridPattern } from '@/components/magicui/grid-pattern';
import { nowCopyRight } from '@/lib/utils';
import { Button } from '@/components/shadcn/button';
import Image from 'next/image';
import TebLogo from '../../../../public/teblarge.png';
import { Lock, Mail } from 'lucide-react';

export default function LoginForms() {
  const nowYear = nowCopyRight();

  return (
    <div className="col-span-12 lg:col-span-6 h-full flex z-[0] lg:h-screen relative flex-col justify-center items-center loginBackground border-solid">
      <DotPattern className="stroke-[#ff828a] fill-[#ff828a] [mask-image:radial-gradient(300px_circle_at_top_left,white,transparent)] xl:[mask-image:radial-gradient(800px_circle_at_top_left,white,transparent)]" />
      <GridPattern
        x={50}
        className="stroke-[#ff828a] fill-[#ff828a] [mask-image:radial-gradient(300px_circle_at_bottom_right,white,transparent)] xl:[mask-image:radial-gradient(600px_circle_at_bottom_right,white,transparent)]"
      />
      <div className="relative border bg-[#ff828a] flex-col justify-center flex items-center lg:justify-start lg:items-center bg-opacity-5 border-[#ff828a] backdrop-blur-3xl w-full lg:w-[400px] lg:h-[600px]  xl:w-[500px] h-full xl:h-[600px] rounded-md z-[1] lg:py-12 p-6">
        <DotPattern className="w-32 absolute top-0 left-0 p-4 h-32 text-[#fafafa]" />
        <DotPattern className="w-32 absolute top-auto left-auto p-4 h-32 text-[#fafafa]" />
        <div className="flex flex-col gap-8 w-full max-w-xs">
          <div className="flex items-center flex-col gap-1">
            <Image
              src={TebLogo}
              alt="Teb Technikum i Liceum Logo"
              className="w-20 h-20"
            />
            <h3 className="text-4xl lg:text-4xl televisor:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-white to-[#fafafa] bg-opacity-50">
              Planer Teb
            </h3>
          </div>
          <div className='flex flex-col gap-5'>
            <form className="flex flex-col gap-6">
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-red-900 bg-red-200 border rounded-e-0 border-red-300 border-e-0 rounded-s-md">
                  <Mail className="w-4 h-4 text-red-500" />
                </span>
                <input
                  type="text"
                  id="email"
                  className="rounded-none rounded-e-lg bg-red-50 border text-red-900 placeholder-red-400 focus:outline-none text-base  block flex-1 min-w-0 w-full border-red-300 p-2.5"
                  placeholder="lodz@teb-edukacja.pl"
                />
              </div>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-red-900 bg-red-200 border rounded-e-0 border-red-300 border-e-0 rounded-s-md">
                  <Lock className="w-4 h-4 text-red-500" />
                </span>
                <input
                  type="text"
                  id="password"
                  className="rounded-none rounded-e-lg bg-red-50 border text-red-900 placeholder-red-400 focus:outline-none text-base  block flex-1 min-w-0 w-full border-red-300 p-2.5"
                  placeholder="Hasło"
                />
              </div>
              <Button type="submit" className="rounded-none rounded-e-lg bg-red-50 border text-red-900 placeholder-red-400 focus:outline-none hover:bg-red-200 text-base  block flex-1 min-w-0 w-full border-red-300 p-2.5">Zaloguj się</Button>
            </form>
            <p className="text-gray-100 max-w-sm mx-auto font-semibold text-center text-base">
            © {nowYear} Teb <span>Technikum</span> i <span>Liceum</span> Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
