"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Me",
    href: "/about",
  },
  {
    name: "Work",
    href: "/experience",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export function NavBar() {
  return (
    <Navbar shouldHideOnScroll>
      <div className="flex justify-center w-full sm:flex gap-4">
        <NavbarContent
          className="hidden sm:flex gap-4 relative font-bold text-blue-700 dark:text-blue-500 py-8"
          justify="center"
        >
          {navigation.map((item, index) => (
            <NavbarItem key={index}>
              <Link
                className="focus:outline-none hover:text-white hover:bg-blue-700 px-2 py-1 rounded transition-colors duration-300"
                href={item.href}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </div>
    </Navbar>
  );
}
