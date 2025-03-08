export default function DisplayLayout({ads, advertisements, planner}:
{
  ads: React.ReactNode;
  advertisements: React.ReactNode;
  planner: React.ReactNode;
}) {
  return (
    <div className="p-4 televisor:p-[40px]  bg-[#FE444C] min-h-screen h-full flex items-center justify-center">
      <div className="grid grid-cols-12 gap-6 lg:gap-[24px]">
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-8 h-[800px] televisor:h-[1000px]">
          {advertisements}
          {ads}
        </div>
        {planner}
      </div>
    </div>
  )
}
