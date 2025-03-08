import { Ellipsis } from "lucide-react";
import { Avatar, AvatarImage } from "../shadcn/avatar";
import Image from "next/image";

export default function FacebookPost() {
  return (
    <div className="text-base flex flex-col gap-1 bg-[#fafafa] p-4 rounded-lg shadow-md">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <Avatar>
            <AvatarImage src="/teblogo.jpg" alt="@TEB Liceum i Technikum Łódź" />
          </Avatar>
          <div>
            <h2 className="font-medium text-lg">TEB Liceum i Technikum Łódź</h2>
            <p className="text-sm text-gray-600">6 marca o 12:58</p>
          </div>
        </div>
        <Ellipsis />
      </div>

      <div className="flex flex-col justify-between gap-3">
        <p className="leading-7 text-gray-800 text-base">
          8-klasisto, wpadnij na drzwi otwarte w TEB Liceum i Technikum, które odbędą się 20 marca
          od godz. 14:00. 🤩 👉 Spotkaj się z nauczycielami oraz uczniami i poznaj naszą szkołę! W
          programie m.in.: ✅ strzelnica VR, ✅ kryminalistyka, ✅ animacja poklatkowa, ✅
          weterynaria i wiele więcej! 😊 📌 Dołącz ➡️{" "}
          <a href="https://bit.ly/4btMfTw" className="text-blue-600 underline">
            bit.ly/4btMfTw
          </a>
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image src="/heart.svg" alt="serce" width={16} height={16} />
              <span className="text-sm">0</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/like.svg" alt="like" width={16} height={16} />
              <span className="text-sm">0</span>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 text-sm text-gray-600">
            <p>0 Komentarz</p>
            <p>0 Udostępnienie</p>
          </div>
        </div>
      </div>
    </div>
  );
}
