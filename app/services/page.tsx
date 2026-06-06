import Link from "next/link"
import FooterInteractions from "@/app/components/footer-interactions"

export default function Services() {
  return (
    <>
      <FooterInteractions />

      <main className="md:mt-[94px]">
        {/* Header section */}
        <section className="flex flex-col gap-8 py-8 px-8">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-center">Services we <span className="text-[#F9B2C9]">#offer</span></h1>
            <p className="text-center">We provide tailored digital solutions designed to help your brand grow online. From modern showcase websites to powerful e-commerce platforms, unique branding, and custom services, we create everything with care, clarity, and a focus on real results.</p>
            <a href="" className="btn mt-2">Let's do this</a>
          </div>
        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 px-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-[#262626] border border-[#404040] rounded-2xl p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="uppercase text-base font-[400]">Website</p>
                <p className="italic uppercase">From 650€</p>
              </div>
              <p>Clean and modern websites that highlight your brand, present your services clearly, and help visitors understand what makes you unique.</p>
              <hr className="border-[#404040]"/>
              <ul className="list-disc list-inside space-y-2">
                <li>Fully responsive design (mobile + tablet friendly)</li>
                <li>Main pages setup: Home, About, Services, Contact</li>
                <li>Privacy policy page</li>
                <li>Navigation menu + submenu configuration</li>
                <li>Basic SEO optimization</li>
                <li>Contact and newsletter form setup</li>
                <li>Social media integration</li>
                <li>GDPR cookie consent pop-up</li>
                <li>PDF file with access instructions</li>
                <li>Extra features available on request (booking system, portfolio, etc.)</li>
              </ul>
              <a href="" className="uppercase hover:text-[#F8F5F0]">Learn more</a>
            </div>
          ))}
        </section>
      </main>

      {/* Banniere */}
      <div className="marquee">
        <div className="marquee__group">
          <span>Let's work together !  &nbsp;&nbsp;♡</span>
          <span>Let's work together !  &nbsp;&nbsp;♡</span>
          <span>Let's work together !  &nbsp;&nbsp;♡</span>
        </div>
        <div className="marquee__group" aria-hidden="true">
          <span>Let's work together !  &nbsp;&nbsp;♡</span>
          <span>Let's work together !  &nbsp;&nbsp;♡</span>
          <span>Let's work together !  &nbsp;&nbsp;♡</span>
        </div>
      </div>
    </>
  )
}