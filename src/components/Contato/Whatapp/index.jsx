import { BsWhatsapp } from "react-icons/bs";

export default function Whatsapp(props) {
  const msg = props.msg ? props.msg : "";
  const linkTxt = `https://wa.me/${props.number}?text=${msg}`
  return  <>
    <BsWhatsapp style={{width: 100, height: 100}} onClick={() => window.open(linkTxt, "_blank") }/>
  </>;
}
