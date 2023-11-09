import React from "react";
import MenuEntry from "./menu-entry";

export default function Menu({ menu }: any) {
  return (
    <menu className="flex bg-accent-1 border-t border-accent-2 ml-20 mb-5">
      <MenuEntry text={"Home"} url={"localhost:3000"} />
      {menu.map((x: any) => (
        <MenuEntry url={x.data.url} text={x.data.text} key={x.data.url} />
      ))}
    </menu>
  );
}
