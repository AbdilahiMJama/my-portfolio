"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const navigation = [
  {
    name: "About Me",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function NavBar() {
  return (
    <Navbar>
      <div className="flex justify-center w-full sm:flex gap-4">
        <NavbarBrand>
          <p className="text-sm font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            ABDIWAWI
          </p>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-4 font-bold relative"
          justify="center"
        >
          {navigation.map((item, index) => (
            <NavbarItem key={index}>
              <Link color="foreground" href={item.href}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </div>
    </Navbar>
  );
}
