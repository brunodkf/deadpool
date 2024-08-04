
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


export const Socials = () => {
  return (
    <ul className="socials">
      <li className="socials__item">
        <a href="" className="socials__link">
          <FaSquareXTwitter />
        </a>
      </li>
      <li className="socials__item">
        <a href="" className="socials__link">
          <ImFacebook2 />
        </a>
      </li>
      <li className="socials__item">
        <a href="" className="socials__link">
          <IoLogoYoutube />
        </a>
      </li>
      <li className="socials__item">
        <a href="" className="socials__link">
          <FaInstagramSquare />
        </a>
      </li>
    </ul>
  )
}
