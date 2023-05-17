import React from "react";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import style from "./Header.module.css";
import { useEffect } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollTop = scrollTop;
    });
  }, []);

  return (
    <div
      className={`${style.container} ${
        scrollDirection === "down" ? style.hidden : ""
      }`}
    >
      <div className={style.headerBox}>
        <div className={style.headerItems}>
          <img className={style.headerLogo} src={logo} />
          <div className={style.itemsBox}>
            <a href="#" className="">
              Inicio
            </a>
            <a href="#About" className="">
              Historia
            </a>
            <a href="#Support" className="">
              Contactanos
            </a>
          </div>
        </div>

        <div className={style.hiddenBox} onClick={handleClick}>
          {!nav ? (
            <MenuIcon className={style.menuIcon} />
          ) : (
            <XIcon className={style.xIcon} />
          )}
        </div>
      </div>

      <ul className={!nav ? style.hidden : style.notHidden}>
        <li className={style.startHidden}>
          <a href="#" className={style.startHiddenLink}>
            Inicio
          </a>
        </li>
        <li className={style.storyHidden}>
          <a href="#About" className={style.storyHiddenLink}>
            Historia
          </a>
        </li>
        <li className={style.contactHidden}>
          <a href="#Support" className={style.contactHiddenLink}>
            Contactanos
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
