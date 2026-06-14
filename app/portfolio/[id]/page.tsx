import Link from "next/link"

const projects = [
  {
    id: "1",
    nom: "BDG Esport",
    description: "Born from the passion of streamer BotKZ, BDG Esport is a competitive League of Legends team built to unite talented players around a shared vision of self-improvement. Through this rebranding, BDG Esport fully embraces its identity and core values, fostering team spirit, innovation, and a true passion for the game, with a clear goal in mind which is to rise through every stage of the Nexus Tour.",
    tags: ["branding", "graphic design", "esport"],
    imagePrincipale: "/images/bdgesports/6.png",
    images: [
      "/images/bdgesports/1.png",
      "/images/bdgesports/3.png",
      "/images/bdgesports/2.png",
      "/images/bdgesports/4.png",
    ]
  },
  {
    id: "2",
    nom: "Frostie",
    description: "Frozie is a fictional glazed dessert brand built around a colorful and playful identity. The concept explores how branding and packaging can feel fresh and craveable.",
    tags: ["branding", "packaging", "concept"],
    imagePrincipale: "/images/frostie/6.png",
    images: [
      "/images/frostie/3.png",
      "/images/frostie/1.png",
      "/images/frostie/2.png",
      "/images/frostie/4.png",
    ]
  },
  {
    id: "3",
    nom: "Glaze",
    description: "Glaze is a fictional candle brand aimed at a younger audience, built around bold visuals and a unapologetically fun identity. The concept explores how branding and packaging can feel personal and expressive. Think loud colors, playful typography, and scents named after feelings rather than flowers.",
    tags: ["branding", "packaging", "concept"],
    imagePrincipale: "/images/glaze/3.png",
    images: [
      "/images/glaze/1.png",
      "/images/glaze/2.png",
      "/images/glaze/4.png",
    ]
  },
  {
    id: "4",
    nom: "Oakley Lookbook concept",
    description: "This project is a fictional digital lookbook exploring futuristic eyewear design through a minimalist visual approach. Conceived as both a web and mobile experience, it reimagines how we interact with high-performance eyewear in a conceptual, non-commercial format. All photos are credited to and sourced from the Oakley website.",
    tags: ["website", "concept"],
    imagePrincipale: "/images/oakley/3.png",
    images: [
      "/images/oakley/4.png",
      "/images/oakley/1.png",
      "/images/oakley/2.png",
    ]
  },
]

export default async function ProjectPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find(p => p.id === id)

  if (!project) {
    return <main className="md:mt-[94px] pt-8 pb-16 px-8"><p>Projet introuvable.</p></main>
  }

  return (
    <main className="flex flex-col gap-8 pt-8 pb-16 px-8 md:mt-[94px] lg:gap-24 lg:pt-32 lg:pb-56 lg:px-32">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-3 lg:gap-6 order-last md:order-first">
          <h1>{project.nom}</h1>
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span key={tag} className="etiquette">{tag}</span>
            ))}
          </div>
          <p className="pt-2 lg:pr-32 xl:pr-56">{project.description}</p>
        </div>
        <img src={project.imagePrincipale} alt="portfolio image" className="w-full md:w-1/2 rounded-2xl aspect-[6/4] object-cover order-first md:order-last"/>
      </div>

      {project.images.map((img, i) => (
        <img key={i} src={img} alt="portfolio image" className="w-full rounded-2xl"/>
      ))}

      <Link href="/portfolio" className="uppercase hover:text-[#F9B2C9] text-center">← Back to portfolio</Link>
    </main>
  )
}