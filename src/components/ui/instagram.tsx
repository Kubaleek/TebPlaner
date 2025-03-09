import { Ellipsis } from "lucide-react";
import { Avatar, AvatarImage } from "../shadcn/avatar";
import Image from "next/image";

export default function InstagramPost() {
  return (
    <div className="text-base grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[#fafafa] p-4 rounded-lg h-full shadow-md">
      <div>
        <Image
          src={"/image-post.jpg"}
          alt="Post Facebook lub Instagram"
          width={900}
          height={900}
          className="w-full h-full aspect-video"
        />
      </div>
      <div className="flex flex-col justify-between gap-3">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <Avatar>
                <AvatarImage src="/teblogo.jpg" alt="@TEB Liceum i Technikum Łódź" />
              </Avatar>
              <div>
                <h2 className="font-medium text-lg">TEB Liceum i Technikum Łódź</h2>
              </div>
            </div>
            <Ellipsis />
          </div>

          <div className="flex flex-col  gap-6">
            <p className="leading-7 text-gray-800 text-base">
              8-klasisto, wpadnij na drzwi otwarte w TEB Liceum i Technikum, które odbędą się 20
              marca od godz. 14:00. 🤩 👉 Spotkaj się z nauczycielami oraz uczniami i poznaj naszą
              szkołę! W programie m.in.: ✅ strzelnica VR, ✅ kryminalistyka, ✅ animacja
              poklatkowa, ✅ weterynaria i wiele więcej! 😊 📌 Dołącz ➡️{" "}
              <a href="https://bit.ly/4btMfTw" className="text-blue-600 underline">
                bit.ly/4btMfTw
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-3">
          <p className="text-sm text-gray-600">Liczba polubień: 0</p>
          <div className="flex gap-2 sm:gap-4 text-sm text-gray-600">
            <p >0 Komentarz</p>
            <p>0 Udostępnienie</p>
          </div>
        </div>
      </div>
    </div>
  );
}
