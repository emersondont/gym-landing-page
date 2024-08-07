
type Props = {
  children: React.ReactNode
}
export default function Title({ children }: Props) {
  return (
    <h1 className="font-urbanist font-bold text-tx1 text-3xl lg:text-5xl md:text-3xl ">
      {children}
    </h1>
  )
}