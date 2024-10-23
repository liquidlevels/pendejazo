import Link from "next/link";
import Image from "next/image";
import React from "react";

const development_options = ["guides", "components", "apis", "architecture"];

const routes = [
  { ruta: "/", nombre: "Inicio" },
  { ruta: "mascota", nombre: "Mascota" },
];

const Header = () => {
  return (
    <header className="px-[8.5px] py-[16px] flex justify-between h-[64px] items-center bg-[#20232a] text-[15px] text-[#f5f6f7]">
      <nav className="pl-[200px] flex space-x-3 items-center">
        <Link href="/" className="flex items-center hover:text-cyan-300">
          <Image
            src="/reigen.jpg"
            width={40}
            height={40}
            alt="react logo"
            style={{ width: "auto", height: "auto" }}
          />
          <h2 className="text-[18px] font-bold pl-4">Form?</h2>
        </Link>
      </nav>
      <nav className="pr-[200px] flex space-x-4 text-[17px]">
        {routes.map((route, index) => (
          <Link href={route.ruta} key={index} className="hover:text-cyan-300">
            {route.nombre}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
