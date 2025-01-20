import * as React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from './ui/sheet';
import { Menu as MenuIcon } from 'lucide-react';

const navigationItems = [
  {
    name: "Home",
    href: "/#",
  },
  {
    name: "Locations",
    href: "/locations"
  },
  {
    name: "Species",
    href: "/species"
  }
]

export default function Navbar() {
  return (
    <header className="fixed flex h-20 w-full shrink-0 items-center border-b px-4 md:px-6">
      <Sheet>
        <div className="flex items-center w-full lg:w-0 justify-between">
          <img src="/LOF_Logo.png" className="w-12 h-12"/>
          <SheetTrigger asChild>
            <div className="flex items-center hover:cursor-pointer">
              <MenuIcon className="lg:hidden float-right"/>
              <h1 className="pl-1">Menu</h1>
            </div>
          </SheetTrigger>
        </div>
        
        <SheetContent side="right" className="bg-white w-[40%]">
          <SheetTitle className="hidden">Navigation Menu</SheetTitle>
          <div className="grid gap-4 py-6 bg-white items-center">
            {navigationItems.map(item => (
              <Link key={item.href} href={item.href} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden lg:flex lg:w-full">
        <nav className="flex items-center justify-between gap-6 lg:w-full">
          <div className="float-left">
            <Link href="/home" prefetch={false}>
              <img src="/LOF_Logo_LightBackground-1.png" className="w-full h-10"/>
            </Link>
          </div>
          <div className="px-6">
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Services
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
