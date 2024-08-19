import { useState } from "react";
import ModalQRcode from "./modalQRcode";

type SocailIconProps = {
  children: React.ReactNode;
  icon: React.ElementType;
  href?: string;
  qrCode?: boolean;
  qrCodeMessage?: string;
}

export default function SocailIcon(props: SocailIconProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <a
        href={props.qrCode ? '#' : props.href}
        target={props.qrCode ? "" : "_blank"}
        onClick={props.qrCode ? () => setIsOpen(true) : () => { }}
        className='p-2 rounded bg-primary flex items-center group cursor-pointer overflow-hidden'
      >
        {<props.icon size={28} />}
        <span className="font-poppins opacity-0 w-0 group-hover:w-24 group-hover:opacity-100 transition-all duration-500 ease-out">
          {props.children}
        </span>

      </a >
      {
        props.qrCode &&
        <ModalQRcode
          open={isOpen}
          close={() => setIsOpen(false)}
          href={props.href || ''}
          message={props.qrCodeMessage || ''}
        />
      }
    </>
  )
}