import React from "react";
import Image from "next/image";
import APP from "../public/app.png";

export const AppCard = () => {
  return (
    <div className=" bg-white drop-shadow-2xl border rounded-lg px-3 py-5 ">
      <div className="flex">
        <Image src={APP} width={60} height={60} alt="APP CTBNX" />
        <div className="ml-2 mt-1">
          <p className="text-[#474747] text-sm">Descarga Citibanamex Móvil</p>
          <p className="text-[#474747] text-sm">y olvídate de las filas</p>
        </div>
      </div>
      <div className="text-[0.6rem] text-center mt-3 text-[#474747]">
        <p>Descarga nuestra aplicación desde Play Store o</p>
        <p>App Store y haz tus operaciones desde donde</p>
        <p>estés.</p>
      </div>
    </div>
  );
};
