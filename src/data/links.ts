import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export const links = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5553999833838',
    icon: FaWhatsapp,
    qrCode: true,
    qrCodeMessage: 'Escaneie este QR Code para acessar o link do nosso WhatsApp'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    qrCode: false,
    icon: FaInstagram,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    qrCode: false,
    icon: FaFacebookF
  }
]