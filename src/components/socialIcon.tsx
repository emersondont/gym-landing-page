
type SocailIconProps = {
  icon: React.ElementType;
  name: string;
}

export default function SocailIcon(props: SocailIconProps) {
  return (
    <div className='p-2 rounded bg-primary flex items-center group cursor-pointer overflow-hidden'>
      {<props.icon size={28} />}
      <span className="font-poppins opacity-0 w-0 group-hover:w-24 group-hover:opacity-100 transition-all duration-500 ease-out">
        {props.name}
      </span>
    </div>
  )
}