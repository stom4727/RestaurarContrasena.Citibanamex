import React from "react";
import Image from "next/image";
import Check from "../public/done.png";

export const Done = () => {
  return (
    <div className="bg-white rounded-lg px-3">
      <div className="flex justify-center">
        <Image src={Check} width={200} height={200} alt="Done!" />
      </div>
      <h1 className="text-[#004684] text-center font-bold text-xl">
        Desvinculación en{" "}
      </h1>
      <h1 className="text-[#004684] text-center font-bold text-xl">Proceso</h1>
      <p className="text-xs text-center mt-10">
        La desvinculación puede tardar varios minutos; siga instrucciones de su
        asesor, contacte con soporte tecnico si usted no esta en Ilamada.
      </p>
    </div>
  );
};
