import * as React from "react";
import { cn } from "@/lib/utils"; // Utility function to merge classnames, if you don't have this, you can remove it

// Main Dropdown Component
export function Dropdown({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("relative inline-block text-left", className)} {...props} />;
}

// Dropdown List (items in the dropdown)
export function DropdownList({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("absolute left-0 mt-2 w-56 rounded-md shadow-lg z-10", className)}
      {...props}
    />
  );
}

// Dropdown Trigger (button or element that opens the dropdown)
export function DropdownTrigger({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300",
        className
      )}
      {...props}
    />
  );
}

// Dropdown Content (where the dropdown items appear)
export function DropdownContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("bg-white shadow-lg rounded-md w-full", className)}
      {...props}
    />
  );
}
