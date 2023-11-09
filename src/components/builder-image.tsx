import Image from "next/image";
import React from "react";

const builderLoader = ({ src, width, quality }: any) => {
  return `${src}?width=${width}&quality=${quality || 75}`;
};

const BuilderImage = (props: any) => {
  return <Image loader={builderLoader} {...props} />;
};

export default BuilderImage;
