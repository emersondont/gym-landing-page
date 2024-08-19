import { useEffect, useRef } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  close: () => void;
}

export default function Modal(props: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (props.open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [props.open]);

  return (
    <dialog
      ref={ref}
      className="backdrop:backdrop-blur-md bg-bg1 rounded-xl text-tx1 open:flex flex-col gap-3 items-center p-3"
    >
      <button onClick={props.close} className="ml-auto">
        <RiCloseLargeLine size={24} />
      </button>
      {props.children}
    </dialog>
  )
}