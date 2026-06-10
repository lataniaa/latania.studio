import Link from "next/link"
import FooterInteractions from "@/app/components/footer-interactions"

export default function Services() {
  return (
    <>
      <FooterInteractions />

      <main className="md:mt-[94px]">
        {/* Header section */}
        <section className="flex flex-col gap-8 pt-8 pb-8 px-8 lg:gap-24 lg:pt-32 lg:pb-16 lg:px-32">
          <div className="flex flex-col items-center gap-4 lg:gap-8">
            <h1 className="text-center">Services I <span className="text-[#F9B2C9]">#offer</span></h1>
            <p className="text-center sm:w-2/3  2xl:w-1/3">I provide tailored digital solutions designed to help your brand grow online. From modern showcase websites to powerful e-commerce platforms, unique branding, and custom services, we create everything with care, clarity, and a focus on real results.</p>
            <a href="" className="btn mt-2">Let's do this</a>
          </div>
        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 px-8 lg:gap-24 lg:pt-16 lg:pb-56 lg:px-32">
          {[
            {
              titre: "Website",
              prix: "From 650€",
              description: "Clean and modern websites that highlight your brand, present your services clearly, and help visitors understand what makes you unique.",
              items: [
                "Fully responsive design (mobile + tablet friendly)",
                "Main pages setup: Home, About, Services, Contact",
                "Privacy policy page",
                "Navigation menu + submenu configuration",
                "Basic SEO optimization",
                "Contact and newsletter form setup",
                "Social media integration",
                "GDPR cookie consent pop-up",
                "PDF file with access instructions",
              ]
            },
            {
              titre: "E-commerce",
              prix: "From 950€",
              description: "A smooth, secure online store designed to boost your sales, improve customer experience, and make managing your products easy.",
              items: [
                "Fully responsive e-commerce website",
                "Pages setup: Home, About, Shop, Contact",
                "Product upload: 3 product pages included",
                "Payment & shipping methods configuration",
                "Privacy policy & terms and conditions pages",
                "Navigation menu + submenu configuration",
                "Contact and newsletter form setup",
                "Basic SEO optimization",
              ]
            },
                
 
            {
              titre: "Brand identity",
              prix: "From 450€",
              description: "A complete visual identity that reflects your personality including logo, colors, style, and everything you need to stand out and build trust.",
              items: [
                "Item 1",
                "Item 2",
                "2 creative concept directions",
                "Primary logo",
                "Logo variations (submark, icon)",
                "Custom brand patterns / watermarks",
                "Color palette",
                "Font selection",
                "Visual moodboard & creative direction",
                "Brand style guide (logo usage, fonts, colors, etc.)"
              ]
            },
            {
              titre: "Need something else ?",
              prix: "",
              description: "Custom digital solutions tailored to your needs, from design tweaks to unique features that elevate your online presence.",
              items: [
                "Business card",
                "Thank you card",
                "Invitation card",
                "Menu",
                "Catalog / E-book",
                "And more..."
              ]
            },
          ].map((service, i) => (
            <div key={i} className="bg-[#262626] border border-[#404040] rounded-2xl p-6 flex flex-col gap-4 lg:p-16 lg:gap-10">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="uppercase text-base font-[400] lg:text-2xl">{service.titre}</p>
                <p className="italic uppercase">{service.prix}</p>
              </div>
              <p className="lg:pb-4">{service.description}</p>
              <hr className="border-[#404040]"/>
              <ul className="list-disc list-inside space-y-2">
                {service.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <a href="" className="uppercase hover:text-[#F8F5F0] hover:text-[#F9B2C9]">Learn more</a>
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