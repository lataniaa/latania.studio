import FooterAlt from "@/app/components/footer-alt"

export default function ContactLayout({
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