import logo from "../assets/6620d363521babf4b252ea28_Futurense Design Asset 2.webp";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="w-full mb-10 flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      {/* Logo with link to IIT Jammu */}
      <div className="flex items-center flex-shrink-0">
        <a
          href="https://iitjammu.ac.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={logo}
            alt="logo"
            className="h-14 sm:h-20 w-auto max-w-[160px] sm:max-w-[200px]"
          />
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 text-xl sm:text-2xl">
        <a
          href="https://www.linkedin.com/in/samradh-singh-yadav/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/u/kollLdN48D/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://github.com/samradhyadav"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/samradhh_?igsh=MWc3ajI2MTE1NXUwcw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
