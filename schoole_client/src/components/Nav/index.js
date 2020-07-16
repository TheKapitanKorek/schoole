import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import logo from "../../images/logo.svg";

const links = [
  { text: "This is a link", link: "/workinprogres" },
  { text: "This is a link", link: "/workinprogres" },
  { text: "This is a link", link: "/workinprogres" },
  { text: "This is a link", link: "/workinprogres" },
];

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo_container}>
        <img src={logo} className={styles.logo} />
      </div>
      <div className={styles.container}>
        <Segment text="Dziennik" links={links} />
        <Segment text="Narzędzia" links={links} />
        <Segment text="Ustawienia" links={links} />
        <Segment text="Pomoc" links={links} />
        <Segment text="Wyloguj" links={links} />
      </div>
    </div>
  );
};

const Segment = ({ text, links }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={node}
      className={styles.element}
      onClick={(e) => {
        setOpen(!open);
      }}
    >
      <div className={styles.text}>{text}</div>
      <div className={styles.dropdown}>
        {open && (
          <div className={styles.dropdown_list}>
            {links.map((el) => (
              <Link to={el.link} className={styles.dropdown_list_element}>
                {el.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
