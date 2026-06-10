import Link from "next/link"

export default function FooterAlt() {
  return (
    <footer className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-t border-[#404040] ">
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
  )
}