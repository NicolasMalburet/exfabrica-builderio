import React from "react";

export default function MenuEntry({ url, text }: any) {
  return (
    <a href={"http://" + url} className="ml-10">
      <h3 className="text-4xl lg:text-5xl font-bold text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
        {text}
      </h3>
    </a>
  );
}
