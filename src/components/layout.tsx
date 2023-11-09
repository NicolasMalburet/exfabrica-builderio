import Footer from "./footer";
import Menu from "./menu";
import React from "react";

export default function Layout({ children, menu }: any) {
  return (
    <>
      {menu && <Menu menu={menu} />}
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
