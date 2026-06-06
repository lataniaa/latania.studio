import Link from "next/link"
import FooterInteractions from "@/app/components/footer-interactions"

const projects = [
  {
    id: "1",
    nom: "BDG Esport",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["brand identity", "design", "esport"],
    imagePrincipale: "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg",
    images: [
      "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg",
      "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg",
      "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg",
    ]
  },
  {
    id: "2",
    nom: "Projet 2",
    description: "Lorem ipsum dolor sit amet.",
    tags: ["design", "branding"],
    imagePrincipale: "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg",
    images: [
      "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg",
      "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg",
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
    return <main className="md:mt-[94px] py-8 px-8"><p>Projet introuvable.</p></main>
  }

  return (
    <>
      <FooterInteractions />
      <main className="flex flex-col gap-15 py-8 px-8 md:mt-[94px]">

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-6 order-last md:order-first">
            <h1>{project.nom}</h1>
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span key={tag} className="etiquette">{tag}</span>
              ))}
            </div>
            <p className="pt-2">{project.description}</p>
          </div>
          <img src={project.imagePrincipale} alt="portfolio image" className="w-full md:w-1/2 rounded-2xl aspect-[6/4] object-cover order-first md:order-last"/>
        </div>

        {project.images.map((img, i) => (
          <img key={i} src={img} alt="portfolio image" className="w-full rounded-2xl"/>
        ))}

        <Link href="/portfolio" className="uppercase hover:text-[#F9B2C9] text-center">← Back to portfolio</Link>

      </main>
    </>
  )
}