import FooterAlt from "@/app/components/footer-alt"

export default function PolicyLayout({
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