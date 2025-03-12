import React from 'react'
import { House, Youtube, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
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
    <footer>
      <div className="flex flex-col items-center w-full bg-[#e3c088] p-6">
        <h2 className="text-2xl mb-4 text-[#19516a]">Laguna Ocean Foundation</h2>
        
        <div className="flex justify-center space-x-4 mb-4 text-black">
          {footerIconResources.map((resource) => (
            <Link key={resource.name} href={resource.link} target="_blank" rel="noopener noreferrer">
              <resource.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
        <div>
          <Button className="bg-[#3a899b] text-white w-24 mr-2">
            <Link href="https://www.lagunaoceanfoundation.org/volunteering">Volunteer</Link>
          </Button>
          <Button className="bg-[#3a899b] text-white w-24">
            <Link href="https://givebutter.com/laguna-ocean-foundation">Donate</Link>
          </Button>
        </div>
        <h3 className="mt-4 text-lg text-[#19516a]">Laguna Beach, CA</h3>
      </div>
    </footer>
  );
}
