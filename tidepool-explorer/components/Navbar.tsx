"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navigationItems = [
  { name: "Home", href: "/#" },
  { name: "Plan Your Trip", href: "/plan-your-trip" },
  { name: "Locations", href: "/locations" },
  { name: "Species Guide", href: "/species" },
  { name: "FAQs", href: "/faqs" },
];

function Logo() {
  return (
    <Link href="/" prefetch={false} className="flex items-center">
      <Image
        src="/LOF_Logo_LightBackground-1.png"
        width={140} // Slightly smaller for tighter header
        height={140}
        alt="Laguna Ocean Foundation Logo"
        priority
      />
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white px-4 md:px-6 h-[6.5rem] flex items-center justify-between text-[#19516a]">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between w-full">
          <Logo />
          <SheetTrigger asChild>
            <button aria-label="Open menu">
              <MenuIcon className="w-8 h-8 text-[#19516a]" />
            </button>
          </SheetTrigger>
        </div>

        {/* Right-side slide-in menu */}
        <SheetContent side="right" className="w-[85%] max-w-sm bg-white text-[#19516a] p-6">
          <VisuallyHidden>
            <SheetTitle>Navigation Menu</SheetTitle>
          </VisuallyHidden>

          <div className="flex flex-col h-full justify-start">
            <div className="mb-12">
              <Logo />
            </div>

            <nav className="flex flex-col space-y-6 font-semibold text-lg text-left">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-10 flex flex-col space-y-3 text-base underline text-left">
              <Link
                href="https://givebutter.com/laguna-ocean-foundation"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
              <Link
                href="https://www.lagunaoceanfoundation.org/volunteering"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Volunteer
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}




