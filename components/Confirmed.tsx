import React from "react";
import Image from "next/image";
import CheckImage from "../public/check.png";

export const Confirmed = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src={CheckImage}
          width={150}
          height={150}
          alt="Confirmed Image"
        />
      </div>
      <p className="absolute bottom-8 text-lg text-green-800 text-center">
        Actualización Exitosa.
      </p>
    </div>
  );
};
