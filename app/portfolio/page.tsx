import Link from "next/link"
import FooterInteractions from "@/app/components/footer-interactions"

const projects = [
  { id: "1", nom: "BDG Esport", image: "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg", tags: ["brand identity", "design", "esport"] },
  { id: "2", nom: "BDG Esport", image: "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg", tags: ["brand identity", "design", "esport"] },
  { id: "3", nom: "BDG Esport", image: "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg", tags: ["brand identity", "design", "esport"] },
  { id: "4", nom: "BDG Esport", image: "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg", tags: ["brand identity", "design", "esport"] },
  { id: "5", nom: "BDG Esport", image: "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg", tags: ["brand identity", "design", "esport"] },
  { id: "6", nom: "BDG Esport", image: "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg", tags: ["brand identity", "design", "esport"] },
]

export default function Portfolio() {
  return (
    <>
      <FooterInteractions />
      <main className="flex flex-col gap-16 pt-8 pb-16 px-8 md:mt-[94px] lg:gap-24 lg:pt-32 lg:pb-56 lg:px-32">
        <h1 className="w-1/2">Check out my recent <span className="text-[#F9B2C9]">#projects</span>...</h1>

        <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-3">
              <Link href={`/portfolio/${project.id}`}>
                <img src={project.image} alt="portfolio image" className="rounded-2xl w-full aspect-[6/4] object-cover hover:scale-[1.008] transition-transform duration-300"/>
              </Link>
              <p className="uppercase text-base font-[400] text-center">{project.nom}</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {project.tags.map((tag) => (
                  <span key={tag} className="etiquette">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}