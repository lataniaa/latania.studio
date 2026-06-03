import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <>
      {/* Footer desktop */}
      <footer className="hidden md:flex flex-col justify-between h-[calc(100vh-80px)] border-t border-[#404040]">
        <div id="playground" className="relative flex flex-col justify-center items-center gap-[clamp(30px,3.47vw,70px)] pt-[270px] overflow-hidden">
          <h1 className="text-center">Think I'd be a good <span className="text-[#F9B2C9]">#fit</span> ? <br/>Let's connect.</h1>

          <div className="flex flex-row gap-[clamp(24px,2.78vw,60px)]">
            <Link href="/contact" id="runaway" className="inline-flex items-center justify-center bg-[#181818] text-[#F8F5F0] border border-[#F8F5F0] rounded-full px-[clamp(20px,2.22vw,40px)] py-[clamp(10px,1.11vw,20px)] font-stolzl font-[500] text-[clamp(11px,0.90vw,15px)] uppercase cursor-pointer no-underline transition-none z-[2]">
              Jump on a call
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#F8F5F0] text-[#181818] rounded-full px-[clamp(20px,2.22vw,40px)] py-[clamp(10px,1.11vw,20px)] font-stolzl font-[500] text-[clamp(11px,0.90vw,15px)] uppercase cursor-pointer no-underline hover:-translate-y-0.5 hover:brightness-95 transition-all duration-300">
              Send a message
            </Link>
          </div>

          <p id="anx-msg" className="opacity-0 transition-opacity duration-300 mt-3 text-[#F9B2C9]">sorry, i have social anxiety...</p>
        </div>

        <div className="flex flex-col gap-[clamp(16px,2.08vw,40px)] pb-2">
          <div className="flex flex-row gap-[clamp(24px,2.78vw,60px)] justify-center">
            <a href="https://www.behance.net/lataniaa" target="_blank">
              <Image src="/icons/behance.png" alt="icon behance" width={30} height={30} className="w-[30px] h-auto"/>
            </a>
            <a href="https://www.instagram.com/lunali_studio/" target="_blank">
              <Image src="/icons/instagram.png" alt="icon instagram" width={30} height={30} className="w-[30px] h-auto"/>
            </a>
            <a href="https://dribbble.com/latania" target="_blank">
              <Image src="/icons/dribbble.png" alt="icon dribbble" width={30} height={30} className="w-[30px] h-auto"/>
            </a>
            <a href="https://fr.pinterest.com/lunalistudio/" target="_blank">
              <Image src="/icons/pinterest.png" alt="icon pinterest" width={30} height={30} className="w-[30px] h-auto"/>
            </a>
          </div>
          <div className="uppercase text-xs">
            <p className="text-center">© 2025 Latania Studio. All rights reserved | <Link href="/policy" className="hover:text-[#F9B2C9]">Policy</Link></p>
          </div>
        </div>
      </footer>

      {/* Footer mobile */}
      <footer className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-t border-[#404040] md:hidden">
        <div className="flex flex-col gap-4 py-8 px-8">
          <h1>Get in touch</h1>
          <div className="uppercase text-xs flex flex-col gap-2 sm:flex-row">
            <Link href="/contact">Contact</Link>
            <a href="https://www.behance.net/lataniaa" target="_blank">Behance</a>
            <a href="https://www.instagram.com/lunali_studio/" target="_blank">Instagram</a>
            <a href="https://dribbble.com" target="_blank">Dribbble</a>
            <a href="https://fr.pinterest.com/lunalistudio/" target="_blank">Pinterest</a>
          </div>
        </div>
        <div className="uppercase text-xs px-8 pb-8">
          <p>© 2025 Latania Studio. All rights reserved | <Link href="/policy" className="hover:text-[#F9B2C9]">Policy</Link></p>
        </div>
      </footer>
    </>
  )
}