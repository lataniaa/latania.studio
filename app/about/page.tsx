import Image from "next/image"
import FooterInteractions from "@/app/components/footer-interactions"

export default function About() {
  return (
    <main className="flex flex-col gap-15 pb-8 px-8 md:mt-[94px]">
      <FooterInteractions />

      {/* Intro */}
      <section className="flex flex-col gap-5 sm:flex-row md:h-screen items-center justify-center">
        <Image src="/images/tripleemoji.png" alt="About image" width={256} height={256} className="w-48 h-auto self-center sm:w-64"/>
        <div className="flex flex-col gap-5">
          <h1 className="sm:text-left text-center">Hi, I'm </h1>
          <div>
            <p>After studying business with a focus on branding and communication, I quickly fell in love with web design during an internship. That's when I discovered WordPress… and never really looked back.</p>
            <p>Curious (and a bit stubborn), I taught myself how to code, then went back to school to sharpen my skills and become a full-stack web developer.</p>
            <p>Now, I get to mix strategy, design and tech to create brands and websites that feel as good as they look.</p>
          </div>
          <p className="font-stolzl font-bold uppercase text-lg sm:text-left text-center">My favorite tools</p>
          <div className="flex gap-3 justify-center sm:justify-start">
            <Image src="/icons/behance.png" alt="Behance Logo" width={32} height={32} className="w-8 h-auto"/>
            <Image src="/icons/behance.png" alt="Behance Logo" width={32} height={32} className="w-8 h-auto"/>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="flex flex-col gap-8">
        <h1 className="text-center">I specialize in a range of <span className="text-[#F9B2C9]">#skills</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              svg: <svg className="iconsvg [&_path]:group-hover:stroke-[#F9B2C9]" width="45" height="58" viewBox="0 0 65 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.04 2H4.32C3.04 2 2 3.04 2 4.32v37.14c0 1.28 1.04 2.32 2.32 2.32H60.04c1.28 0 2.32-1.04 2.32-2.32V4.32C62.36 3.04 61.32 2 60.04 2Z" stroke="#F8F5F0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M27.54 43.79l-4.64 11.61M36.82 43.79l4.64 11.61M18.25 55.39h27.86M34.5 2v41.79M13.61 15.93h9.29M13.61 29.86h4.64M34.5 25.21l5.62-4.64c1.66-1.38 3.75-2.14 5.92-2.14s4.26.76 5.92 2.14l10.4 9.29" stroke="#F8F5F0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "Web Design",
              desc: "Crafting accessible and modern interfaces using HTML, CSS, JS, and React."
            },
            {
              svg: <svg className="iconsvg [&_path]:group-hover:stroke-[#F9B2C9]" width="64" height="58" viewBox="0 0 64 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M59.14 2H4.29C3.02 2 2 3.04 2 4.32v37.14c0 1.28 1.02 2.32 2.29 2.32h54.86c1.26 0 2.29-1.04 2.29-2.32V4.32C61.43 3.04 60.4 2 59.14 2Z" stroke="#F8F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M27.14 43.79l-4.57 11.61M36.29 43.79l4.57 11.61M18 55.39h27.43M20.29 17.09l-8 6.96 6.86 5.8M44.29 18.25l6.86 5.8-8 6.96M28.29 33.34l6.86-20.89" stroke="#F8F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "Front-end Development",
              desc: "Crafting accessible and modern interfaces using HTML, CSS, JS, and React."
            },
            {
              svg: <svg className="iconsvg [&_path]:group-hover:stroke-[#F9B2C9]" width="43.22" height="58" viewBox="0 0 47 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 11.33c0-5.15 4.24-9.33 9.47-9.33h11.57v18.65H11.47C6.24 20.65 2 16.48 2 11.33Z" stroke="#F8F5F0" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M44.09 11.33c0-5.15-4.24-9.33-9.47-9.33H23.05v18.65h11.57c5.23 0 9.47-4.18 9.47-9.32Z" stroke="#F8F5F0" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M44.09 31.01c0-5.72-4.71-10.36-10.52-10.36S23.04 25.29 23.04 31.01s4.71 10.36 10.52 10.36 10.52-4.64 10.52-10.36Z" stroke="#F8F5F0" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 50.71c0-5.15 4.24-9.33 9.47-9.33h11.57v8.29c0 5.72-4.71 10.36-10.52 10.36h-1.05C6.24 60.04 2 55.86 2 50.71Z" stroke="#F8F5F0" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 31.02c0-5.72 4.71-10.36 10.52-10.36h10.52v20.73H12.52C6.71 41.38 2 36.74 2 31.02Z" stroke="#F8F5F0" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "Figma",
              desc: "Crafting accessible and modern interfaces using HTML, CSS, JS, and React."
            },
            {
              svg: <svg className="iconsvg [&_path]:group-hover:stroke-[#F9B2C9]" width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.53 22.89c2.56 0 4.64-2.08 4.64-4.64s-2.08-4.64-4.64-4.64-4.64 2.08-4.64 4.64 2.08 4.64 4.64 4.64Z" stroke="#F8F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.95 46.11c1.28 0 2.32-1.04 2.32-2.32s-1.04-2.32-2.32-2.32-2.32 1.04-2.32 2.32 1.04 2.32 2.32 2.32Z" stroke="#F8F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.95 29.86c2.56 0 4.64-2.08 4.64-4.64s-2.08-4.64-4.64-4.64-4.64 2.08-4.64 4.64 2.08 4.64 4.64 4.64Z" stroke="#F8F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M43.26 56.69c-.05-.9-.36-1.77-.9-2.49a5.49 5.49 0 0 0-3.02-2.48c-2.1-.69-3.89-2.11-5.04-4-1.15-1.89-1.59-4.13-1.24-6.31.35-2.18 1.47-4.16 3.13-5.59 1.67-1.44 3.81-2.23 6.01-2.23h8.68c1.49 0 2.95-.34 4.28-1s2.54-1.68 3.39-2.89c.85-1.21 1.41-2.61 1.61-4.07.21-1.45.05-2.95-.45-4.36-1.85-5.21-5.1-9.82-9.39-13.29S41.8 3.05 36.32 2.28C30.84 1.53 25.25 2.29 20.18 4.49c-5.07 2.2-9.44 5.75-12.63 10.27-3.2 4.52-5.09 9.84-5.47 15.35-.38 5.51.76 11.06 3.3 16.01s6.41 8.99 11.17 11.87a29.8 29.8 0 0 0 15.68 4.4c2.73 0 5.45-.38 8.08-1.11.96-.27 1.8-.87 2.34-1.71.54-.84.78-1.82.65-2.81Z" stroke="#F8F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "Branding",
              desc: "Crafting accessible and modern interfaces using HTML, CSS, JS, and React."
            },
            {
              svg: <svg className="iconsvg [&_path]:group-hover:stroke-[#F9B2C9]" width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4501 38.9001C30.6398 38.9001 38.9001 30.6398 38.9001 20.4501C38.9001 10.2604 30.6398 2 20.4501 2C10.2604 2 2 10.2604 2 20.4501C2 30.6398 10.2604 38.9001 20.4501 38.9001Z" stroke="#F8F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M36.2645 36.264L34.5073 34.5068" stroke="#F8F5F0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M55.6902 50.2244L41.2825 35.8166C40.5591 35.0933 39.5648 34.9147 39.0617 35.4178L35.4181 39.0614C34.915 39.5645 35.0936 40.5588 35.8169 41.2821L50.2247 55.6899C50.9481 56.4133 51.9424 56.5919 52.4454 56.0888L56.0891 52.4451C56.5922 51.9421 56.4136 50.9478 55.6902 50.2244Z" stroke="#F8F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "UX Research",
              desc: "Crafting accessible and modern interfaces using HTML, CSS, JS, and React."
            },
            {
              svg: <svg className="iconsvg [&_path]:group-hover:stroke-[#F9B2C9]" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.9165 30.602C54.5141 35.6594 52.6685 40.4951 49.5985 44.5344C46.5286 48.5738 42.364 51.647 37.5988 53.3886C32.8338 55.1307 27.6689 55.4683 22.7177 54.3614C17.7665 53.2541 13.2372 50.7492 9.66776 47.1436C6.09837 43.5384 3.63897 38.984 2.58175 34.0219C1.52454 29.0599 1.91394 23.8986 3.70371 19.1513C5.49348 14.4041 8.60837 10.2704 12.6783 7.24128C16.7483 4.2122 21.6022 2.41509 26.6635 2.06348" stroke="#F8F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M39.8745 32.944C39.1383 34.8389 37.9413 36.5205 36.3919 37.8365C34.8425 39.1526 32.9894 40.0617 31.0003 40.4816C29.0112 40.9015 26.9489 40.8191 24.9997 40.2416C23.0505 39.6641 21.276 38.6099 19.8366 37.1742C18.3973 35.7386 17.3385 33.9668 16.756 32.0191C16.1735 30.0714 16.0857 28.0092 16.5005 26.0191C16.9153 24.0289 17.8196 22.1735 19.1317 20.6207C20.4438 19.0679 22.1223 17.8666 24.0153 17.1255" stroke="#F8F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M28.5 28.4999L38.6923 18.3076" stroke="#F8F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M46.8461 20.3462L38.6923 18.3077L36.6538 10.1539L44.8077 2L46.8461 10.1539L55 12.1923L46.8461 20.3462Z" stroke="#F8F5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "Motion Design",
              desc: "Crafting accessible and modern interfaces using HTML, CSS, JS, and React."
            },
          ].map((item, i) => (
            <div key={i} className="group flex flex-col gap-2 rounded-2xl border border-[#404040] bg-[#262626] p-5 items-center hover:border-[#F9B2C9]">
              {item.svg}
              <p className="text-[16px] font-[400] text-center group-hover:text-[#F9B2C9]">{item.title}</p>
              <p className="text-center group-hover:text-[#F9B2C9]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}