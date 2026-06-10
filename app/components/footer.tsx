"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

function SocialIcon({ href, src, srcHover, alt }: { href: string, src: string, srcHover: string, alt: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a href={href} target="_blank" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Image src={hovered ? srcHover : src} alt={alt} width={30} height={30} className="w-[30px] h-auto transition-all duration-300"/>
    </a>
  )
}

export default function Footer() {
  return (
    <>
      {/* Footer desktop */}
      <footer className="hidden md:flex flex-col justify-between h-[calc(100vh-80px)] border-t border-[#404040] ">
        <div id="playground" className="relative flex flex-col justify-center items-center gap-[clamp(30px,3.47vw,70px)] pt-[270px] overflow-hidden">
          <h2 className="text-center">Think I'd be a good <span className="text-[#F9B2C9]">#fit</span> ? <br/>Let's connect.</h2>
          <div className="flex flex-row gap-[clamp(24px,2.78vw,60px)]">
            <Link 
  href="/contact" 
  id="runaway" 
  className="inline-flex items-center justify-center bg-[#181818] text-[#F8F5F0] border border-[#F8F5F0] rounded-full px-8 py-3 lg:py-4 font-stolzl font-[500] text-sm uppercase cursor-pointer no-underline transition-none z-[2]"
>
  Jump on a call
</Link>
            <Link 
  href="/contact" 
  className="inline-flex items-center justify-center bg-[#F8F5F0] text-[#181818] rounded-full px-8 py-3 lg:py-4 font-stolzl font-[500] text-sm uppercase cursor-pointer no-underline hover:-translate-y-0.5 hover:brightness-95 transition-all duration-300"
>
  Send a message
</Link>
          </div>
          <p id="anx-msg" className="opacity-0 transition-opacity duration-300 mt-3 text-[#F9B2C9]">sorry, i have social anxiety...</p>
        </div>

        <div className="flex flex-col gap-[clamp(16px,2.08vw,40px)] pb-2">
          <div className="flex flex-row gap-[clamp(24px,2.78vw,60px)] justify-center">
            <SocialIcon href="https://www.behance.net/lataniaa" src="/icons/behance.png" srcHover="/icons/behancepink.png" alt="icon behance"/>
            <SocialIcon href="https://www.instagram.com/lunali_studio/" src="/icons/instagram.png" srcHover="/icons/instagrampink.png" alt="icon instagram"/>
            <SocialIcon href="https://dribbble.com/latania" src="/icons/dribbble.png" srcHover="/icons/dribbblepink.png" alt="icon dribbble"/>
            <SocialIcon href="https://fr.pinterest.com/lunalistudio/" src="/icons/pinterest.png" srcHover="/icons/pinterestpink.png" alt="icon pinterest"/>
          </div>
          <div className="uppercase text-xs">
            <p className="text-center">© 2025 Latania Studio. All rights reserved | <Link href="/policy" className="hover:text-[#F9B2C9]">Policy</Link></p>
          </div>
        </div>
      </footer>

      {/* Footer mobile */}
      <footer className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-t border-[#404040] md:hidden ">
        <div className="flex flex-col gap-4 py-8 px-8">
          <h2>Get in touch</h2>
          <div className="uppercase text-xs flex flex-col gap-2 sm:flex-row ">
            <Link href="/contact" className="hover:text-[#F9B2C9]">Contact</Link>
            <a href="https://www.behance.net/lataniaa" target="_blank" className="hover:text-[#F9B2C9]">Behance</a>
            <a href="https://www.instagram.com/lunali_studio/" target="_blank" className="hover:text-[#F9B2C9]">Instagram</a>
            <a href="https://dribbble.com" target="_blank" className="hover:text-[#F9B2C9]">Dribbble</a>
            <a href="https://fr.pinterest.com/lunalistudio/" target="_blank" className="hover:text-[#F9B2C9]">Pinterest</a>
          </div>
        </div>
        <div className="uppercase text-xs px-8 pb-8">
          <p>© 2025 Latania Studio. All rights reserved | <Link href="/policy" className="hover:text-[#F9B2C9]">Policy</Link></p>
        </div>
      </footer>
    </>
  )
}