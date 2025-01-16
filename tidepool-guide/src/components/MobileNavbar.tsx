"use client";
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';

const mobileItems = ['A', 'B', 'C'];

function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetTitle className="hidden">Navigation Menu</SheetTitle>
      <SheetContent side="left">
        <div className="flex flex-col items-start">
          {mobileItems.map((item, index) => (
            <Button
              key={index}
              variant="link"
              onClick={() => {
                setOpen(false);
              }}
            >
              {item}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar