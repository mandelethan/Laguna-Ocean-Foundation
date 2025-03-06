'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from './ui/sheet';
import { Menu as MenuIcon } from 'lucide-react';

const navigationItems = [
  { name: "Home", href: "/#" },
  { name: "Locations", href: "/locations" },
  { name: "Species Guide", href: "/species" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed flex h-20 w-full shrink-0 items-center border-b px-4 md:px-6 bg-white z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {/* Phone view of navbar when closed */}
        <div className="flex items-center w-full lg:hidden justify-between">
          <div className="flex items-center">
            <Link href="/#" prefetch={false}>
              <Image src="/LOF_Logo.png" width={48} height={48} alt="Logo" />
            </Link>
            <div className="pl-4 text-blue-200">
              <h1 className="text-2xl">Laguna Explorer</h1>
              <h2 className="text-sm">by Laguna Ocean Foundation</h2>
            </div>
          </div>
          <SheetTrigger asChild>
            <div className="flex items-center hover:cursor-pointer">
              <MenuIcon className="lg:hidden w-10 h-10" />
            </div>
          </SheetTrigger>
        </div>
        {/* Menu that shows when the navbar is opened */}
        <SheetContent side="right" className="bg-white w-[80%]">
          <SheetTitle className="hidden">Navigation Menu</SheetTitle>
          <div className="grid gap-4 py-6 bg-white items-center pl-4">
            {navigationItems.map(item => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      {/* Desktop view navbar */}
      <div className="hidden lg:flex lg:w-full">
        <nav className="flex items-center justify-between gap-6 lg:w-full">
          <div className="flex items-center">
            <Link href="/#" prefetch={false}>
              <Image src="/LOF_Logo.png" width={48} height={48} alt="Logo" />
            </Link>
            <div className="pl-4 text-blue-200">
              <h1 className="text-2xl">Laguna Explorer</h1>
              <h2 className="text-sm">by Laguna Ocean Foundation</h2>
            </div>
          </div>
          <div className="flex">
            {navigationItems.map((item, index) => index !== 0 && (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-sm font-medium hover:underline underline-offset-4 mx-2" 
                prefetch={false}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
