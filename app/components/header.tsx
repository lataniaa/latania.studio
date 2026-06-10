"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="md:fixed md:top-0 md:left-0 md:w-full z-50 py-4 px-8 lg:px-32 md:bg-[#151515] h-[94px] flex items-center   ">
      <div className="flex items-center justify-between w-full">
        <Image src="/images/LOGO.png" alt="Latania Studio Icon" width={64} height={64} className="w-16 h-auto" />

        {/* Menu desktop */}
        <nav className="hidden md:block">
          <ul className="flex flex-row uppercase gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-[#F9B2C9] ${pathname === link.href ? "text-[#F9B2C9]" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="hidden md:block uppercase hover:text-[#F9B2C9]">EN</p>

        {/* Bouton hamburger */}
        <button className="md:hidden z-50 relative" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="#F8F5F0" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#F8F5F0" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#151515]/70 z-40 flex items-center justify-center backdrop-blur-md md:hidden">
          <nav>
            <ul className="flex flex-col items-center uppercase">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F9B2C9] text-[38px] font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}