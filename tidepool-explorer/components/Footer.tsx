import React from 'react';
import { House, Youtube, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const footerIconResources = [
  {
    name: "Main Website",
    icon: House,
    link: "https://www.lagunaoceanfoundation.org"
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/lagunaoceanfoundation"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/company/laguna-ocean-foundation/"
  },
  {
    name: "YouTube",
    icon: Youtube,
    link: "https://www.youtube.com/channel/UCJTi69vBs8h4HUos76dhrOQ/featured"
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#e3c088] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left side */}
        <div>
          <h2 className="text-4xl font-semibold">Laguna Ocean Foundation</h2>
          <p className="mt-2 text-xl">Laguna Beach, CA</p>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-end text-right space-y-4">
          {/* Stacked text links */}
          <div className="flex flex-col text-lg font-medium underline space-y-1">
            <Link
              href="https://www.lagunaoceanfoundation.org/volunteering"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 text-white"
            >
              Volunteer
            </Link>
            <Link
              href="https://givebutter.com/laguna-ocean-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 text-white"
            >
              Donate
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            {footerIconResources.map((resource) => (
              <Link
                key={resource.name}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <resource.icon className="w-6 h-6 text-white hover:opacity-80 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
