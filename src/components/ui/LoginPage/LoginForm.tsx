import { DotPattern } from '@/components/magicui/dot-pattern';
import { GridPattern } from '@/components/magicui/grid-pattern';
import { Label } from '@/components/shadcn/label';
import { nowCopyRight } from '@/lib/utils';
import { Input } from '@/components/shadcn/input';
import { Button } from '@/components/shadcn/button';

export default function LoginForms() {
  const nowYear = nowCopyRight();

  return (
    <div className="col-span-12 lg:col-span-6 h-full flex z-[0] lg:h-screen relative flex-col justify-center items-center loginBackground">
      <DotPattern className="stroke-[#ff828a] fill-[#ff828a] [mask-image:radial-gradient(300px_circle_at_top_left,white,transparent)] xl:[mask-image:radial-gradient(800px_circle_at_top_left,white,transparent)]" />
      <GridPattern className="stroke-[#ff828a] fill-[#ff828a] [mask-image:radial-gradient(300px_circle_at_bottom_right,white,transparent)] xl:[mask-image:radial-gradient(600px_circle_at_bottom_right,white,transparent)]" />
      <div className=" flex flex-col lg:w-fit  lg:p-8 gap-8 w-full lg:max-w-screen-2xl z-[1] rounded-md mx-auto justify-between items-center televisor:gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <p className="flex text-[54px] text-[#fafafa]">~</p>
              <h3 className="text-4xl televisor:text-7xl text-[#fafafa] font-semibold">
                Logowanie
              </h3>
              <p className="flex text-[54px] text-[#fafafa]">~</p>
            </div>
            <div className="flex flex-col gap-8">
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <Label
                    htmlFor="emailLabel"
                    className="text-2xl televisor:text-3xl font-medium text-[#fafafa]"
                  >
                    Email
                  </Label>
                  <Input
                    id="emailLabel"
                    className="bg-[#fafafa] text-lg lg:text-xl  rounded-sm televisor:text-2xl"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label
                    htmlFor="emailPassword"
                    className="text-2xl televisor:text-3xl font-medium text-[#fafafa]"
                  >
                    Hasło
                  </Label>
                  <Input
                    id="emailPassword"
                    type="password"
                    className="bg-[#fafafa] rounded-sm text-lg lg:text-xl televisor:text-2xl"
                  />
                </div>
              </form>
              <Button className="bg-[#fafafa] text-[#232225] hover:bg-slate-100 televisor:text-lg televisor:py-6">
                Zaloguj się
              </Button>
            </div>
          </div>
          <p className="text-[#fafafa] max-w-sm mx-auto font-semibold text-center text-base televisor:text-xl">
            © {nowYear} Teb <span>Technikum</span> i <span>Liceum</span>{' '}
            Wszelkie prawa zastrzeżone.
          </p>
        </div>
    </div>
  );
}
