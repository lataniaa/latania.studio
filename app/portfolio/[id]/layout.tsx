import FooterAlt from "@/app/components/footer-alt"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <FooterAlt />
    </>
  )
}