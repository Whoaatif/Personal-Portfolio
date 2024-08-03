import React from "react";
import me from "../assets/logo.jpg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Shaikh Atif</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/channel/UCXGEmDyo204YK1N4MjStV4w" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href=" https://www.instagram.com/aatif_shaikh_022/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Whoaatif" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
