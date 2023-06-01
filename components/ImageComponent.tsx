import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
}

export const ImageComponent: FC<Props> = ({ src }) => {
  return (
    <div>
      <Image
        src={src}
        height={300}
        width={300}
        alt="Image"
        className="rounded-lg"
      />
    </div>
  );
};
