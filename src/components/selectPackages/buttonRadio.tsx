import { fetchPackages } from "@/hooks/usePackages";
import { queryClient } from "@/lib/react-query";

type Props = {
  label: string;
  id: string;
  name: string;
  peer: string;
  peerChecked: string;
  index: number;
}

export default function ButtonRadio(props: Props) {
  const handleChange = async () => {
    queryClient.setQueryData(['packages'], fetchPackages(props.index));
  }

  return (
    <>
      <input
        type="radio"
        name={props.name}
        id={props.id}
        className={`${props.peer} hidden`}
        onChange={handleChange}
      />
      <label
        htmlFor={props.id}
        className={`font-poppins font-medium text-xs text-center text-tx3 cursor-pointer w-24 py-3 z-10 ease-in-out duration-500 
        sm:text-base sm:w-36 ${props.peerChecked}`}
      >
        {props.label}
      </label>
    </>
  )
}