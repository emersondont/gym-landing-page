import { QRCodeSVG } from "qrcode.react";
import { useEffect, useRef } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { BsQrCodeScan } from "react-icons/bs";


type ModalQRcodeProps = {
  open: boolean;
  close: () => void;
  href: string;
  message: string;
}

export default function ModalQRcode(props: ModalQRcodeProps) {
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
      className="backdrop:backdrop-blur-md backdrop:bg-white backdrop:bg-opacity-10 overflow-visible bg-white rounded-xl text-tx5 border-2 border-tx5 open:flex flex-col gap-6 items-center p-3 w-96"
    >
      <div className="absolute top-0 -translate-y-1/2 bg-white border-2 border-tx5 p-3 rounded-full">
        <BsQrCodeScan size={32} />
      </div>

      <button onClick={props.close} className="ml-auto text-bg2 border-none">
        <RiCloseLargeLine size={24} />
      </button>

      <div className="flex flex-col items-center gap-1">
        <h2 className="font-poppins font-semibold text-xl md:text-2xl text-bg2">Escaneie o QR Code</h2>
        <p className="font-poppins font-normal text-sm md:text-base text-wrap text-center">
          {props.message}
        </p>
      </div>

      <QRCodeSVG value={props.href} size={256} className='border border-white' />

      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex w-full items-center gap-1 justify-center">
          <div className="w-full h-px bg-tx5"></div>
          <p className="font-poppins font-normal text-sm md:text-base text-nowrap">ou clique no botão abaixo</p>
          <div className="w-full h-px bg-tx5"></div>
        </div>
        <a href={props.href} target="_blank" className={`font-poppins font-medium text-sm py-2 rounded-xl text-tx1 w-full bg-bg1 2-full hover:bg-opacity-80 ease-out duration-200 text-center sm:text-base`}>
          Acessar
        </a>
      </div>
    </dialog>
  )
}