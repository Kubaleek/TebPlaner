export default function DisplayLayout({ads, advertisements, planner}:
{
  ads: React.ReactNode;
  advertisements: React.ReactNode;
  planner: React.ReactNode;
}) {
  return (
    <div className="p-4 televisor:p-[40px]  bg-[#FE444C] min-h-screen h-fit hidden xl:flex items-center justify-center">
      <div className="grid grid-cols-12 gap-6 lg:gap-[24px] h-screen">
        <div className="col-span-12 lg:col-span-6 gap-6 flex flex-col">
          {advertisements}
          {ads}
        </div>
        {planner}
      </div>
    </div>
  )
}
