import React from "react";
import Image from "next/image";
import ATM from "../public/atm.png";
import PHONE from "../public/phone.png";
import SMART from "../public/smart.png";
import TICKET from "../public/ticket.png";

export const Card = () => {
  return (
    <div className=" bg-white drop-shadow-2xl border rounded-lg px-3 ">
      <div className="flex space-x-4 pr-16 mt-1">
        <Image src={ATM} width={30} height={30} alt="ATM" />
        <p className="text-sm mt-1 text-[#474747]">
          Encuentra cajeros automáticos
        </p>
      </div>
      <div className="flex space-x-4 mt-2">
        <Image src={PHONE} width={30} height={20} alt="ATM" />
        <div>
          <p className="text-sm mt-1 text-[#474747]">
            Atención telefónica: 55 1226 3990
          </p>
          {/* <p className="text-sm mt-1 text-[#474747]">55 1226 3990</p> */}
        </div>
      </div>
      <div className="flex space-x-4 pr-16 mt-2">
        <Image src={SMART} width={30} height={30} alt="ATM" />
        <p className="text-sm mt-1 text-[#474747]">Conoce Citibanamex Móvil</p>
      </div>
      <div className="flex space-x-4 pr-16 mt-2 mb-5">
        <Image src={TICKET} width={30} height={30} alt="ATM" />
        <p className="text-sm mt-1 text-[#474747]">Consulta de aclaraciones</p>
      </div>
    </div>
  );
};
