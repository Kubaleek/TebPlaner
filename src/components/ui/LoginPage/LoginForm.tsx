import { DotPattern } from '@/components/magicui/dot-pattern';
import { GridPattern } from '@/components/magicui/grid-pattern';
import { Label } from '@/components/shadcn/label';
import { nowCopyRight } from '@/lib/utils';
import { Input } from '@/components/shadcn/input';
import { Button } from '@/components/shadcn/button';

export default function LoginForms() {
  const nowYear = nowCopyRight();

  return (
    <div className="col-span-12 lg:col-span-6 h-full flex z-[0] lg:h-screen relative flex-col justify-center items-center loginBackground border-solid">
      <DotPattern className="stroke-[#ff828a] fill-[#ff828a] [mask-image:radial-gradient(300px_circle_at_top_left,white,transparent)] xl:[mask-image:radial-gradient(800px_circle_at_top_left,white,transparent)]" />
      <GridPattern className="stroke-[#ff828a] fill-[#ff828a] [mask-image:radial-gradient(300px_circle_at_bottom_right,white,transparent)] xl:[mask-image:radial-gradient(600px_circle_at_bottom_right,white,transparent)]" />
      <div className="border border-[#ff828a] shadow-lg flex flex-col lg:w-fit lg:p-10 gap-8 w-full md:m-5 lg:max-w-screen-md z-[1] rounded-xl mx-auto justify-between items-center backdrop-blur-md bg-opacity-50 bg-[#ff828a] p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center align-middle gap-2 text-center">
            <h3 className="text-4xl televisor:text-7xl text-[#fafafa] font-semibold">
              Logowanie
            </h3>
          </div>
          <div className="flex flex-col gap-8">
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <Label
                  htmlFor="email"
                  className="text-2xl televisor:text-3xl font-medium text-[#fafafa]"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-[#ff828a] backdrop:blur-lg text-[#fafafa] text-lg lg:text-xl rounded-md televisor:text-2xl p-3    focus:ring-2 focus:ring-[#ff828a] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label
                  htmlFor="password"
                  className="text-2xl televisor:text-3xl font-medium text-[#fafafa] blur-1"
                >
                  Hasło
                </Label>
                <Input
                  id="password"
                  type="password"
                  className="bg-[#ff828a] backdrop:blur-lg text-[#fafafa] text-lg lg:text-xl rounded-md televisor:text-2xl p-3    focus:ring-2 focus:ring-[#ff828a] focus:outline-none"
                />
              </div>
              <Button type="submit" className="loginFormBackground bg-[#ff828a] text-[#fafafa] hover:bg-[#ff5a6b] transition-all duration-300 ease-in-out rounded-lg text-lg televisor:text-xl py-3 shadow-md">
                Zaloguj się
              </Button>
            </form>
          </div>
        </div>
        <p className="text-gray-100 max-w-sm mx-auto font-semibold text-center text-base televisor:text-xl">
          © {nowYear} Teb <span>Technikum</span> i <span>Liceum</span> Wszelkie prawa zastrzeżone.
        </p>
        
      </div>
      
    </div>
  );
}
