import Image from "next/image";
import React from "react";

export const SupportCard = () => {
  return (
    <div className=" bg-white drop-shadow-2xl border rounded-lg px-10 py-14">
      <div className="flex">
        <div>
          <h2>Atención al Cliente</h2>
          <p>Visita el </p>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="underline underline-offset-2 text-center mx-auto ">
          Centro de Ayuda
        </p>
      </div>
    </div>
  );
};
