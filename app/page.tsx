import CursorBurst from "@/app/components/cursor-burst";
import FooterInteractions from "@/app/components/footer-interactions";
import Footer from "@/app/components/footer";


export default function Home() {
  return (
    <>
      <main>
        <FooterInteractions />

        {/* Hero section */}
        <div className="panel sticky top-0 z-0 md:h-screen  ">
          <div id="cursor-stage" aria-hidden="true"></div>
          <CursorBurst />

          <div className="md:absolute inset-0 z-[2] flex flex-col items-center justify-center gap-6 text-center pointer-events-none py-16 md:py-0">
            <p className="m-0 uppercase font-stolzl font-bold tracking-[-0.01em] text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[.95] px-4">LATANIA STUDIO</p>
            <p className="m-0 font-stolzl font-[200] uppercase text-[clamp(12px,0.97vw,16px)] px-4" >Designer and Front-End developper</p>
          </div>

          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-[45px] z-[2] pointer-events-none font-stolzl font-[200] text-[clamp(12px,0.97vw,16px)] uppercase">Scroll down</div>
        </div>

        {/* Contenu */}
        <div className="panel relative z-10 border-t border-[#404040]">

        <img src="https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg" alt="portfolio image" className="w-full aspect-[6/4] object-cover mb-8 sm:hidden"/>

          {/* Services */}
          <section className="flex flex-col gap-8 pt-8 pb-8 px-8 lg:gap-24 lg:pt-32 lg:pb-16 lg:px-32">
            <h1 className="text-center">I can <span className="text-[#F9B2C9]">#help</span> you with...</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-32">
              <div className="flex flex-col gap-1">
                <p className="font-[400] text-[16px]">//01</p>
                <h3>Website design</h3>
                <p>I'll build your website from scratch (or fixing the one that gives you headaches). Modern, responsive, tailored to your goals.</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-[400] text-[16px]">//02</p>
                <h3>Branding</h3>
                <p>I design full brand kits that include your colors, fonts, logo variations, and everything you need to show up confidently.</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-[400] text-[16px]">//03</p>
                <h3>Digital products</h3>
                <p>E-books, business cards, social media templates, brochures... I create custom assets that help you communicate clearly.</p>
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section className="grid grid-cols-1 sm:grid-cols-2  gap-8 pt-8 pb-8 px-8 lg:gap-24 lg:pt-32 lg:pb-56 lg:px-32">
            <div className="flex flex-col gap-8 lg:gap-16inline-flex items-start">
              <h2>A glimpse of some <span className="text-[#F9B2C9]">#projects</span> I've done</h2>
              <a href="" className="btn mt-2">Learn more</a>
            </div>

            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-3 center">
                <a href="">
                  <img src="https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg" alt="portfolio image" className="rounded-2xl w-full aspect-[6/4] object-cover"/>
                </a>
                <p className="uppercase text-lg  lg:text-[24px] font-[400] text-center ">BDG Esport</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <span className="etiquette">brand identity</span>
                  <span className="etiquette">design</span>
                  <span className="etiquette">esport</span>
                </div>
              </div>
            ))}
          </section>

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

        </div>
      </main>
      <Footer />
    </>
  );
}