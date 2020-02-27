import Link from "next/link";
import { useState } from "react";
import Icon from "../Icon/Icon";

const Menu = () => {
  const [toggle, setToggle] = useState(false);

  const menuStyle = e => {
    if (!e) {
      return {
        left: "100vw",
        transition: " left .5s"
      };
    } else {
      return {
        left: "-5vw",
        transition: "left .5s"
      };
    }
  };

  const menuToggle = e => {
    if (!e) {
      setToggle(true);
    } else setToggle(false);
  };

  return (
    <nav className="menu" style={menuStyle(toggle)}>
      <button className="menu-open" onClick={() => menuToggle(toggle)}>
        Open Menu
        <Icon
          w="1rem"
          h="1rem"
          color="var(--font-color-inverted)"
          rotate="rotate(270)"
          loc="leftSmall"
        />
        <Icon
          w="1rem"
          h="1rem"
          color="var(--font-color-inverted)"
          rotate="rotate(90)"
          loc="rightSmall"
        />
      </button>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/frontend">
        <a>Frontend</a>
      </Link>
      <Link href="/design">
        <a>Design</a>
      </Link>
      <Link href="/resume">
        <a>Resumé</a>
      </Link>
      <button className="menu-close" onClick={() => menuToggle(toggle)}>
        Close Menu
        <Icon
          w="1rem"
          h="1rem"
          color="var(--accent-color-r)"
          rotate="rotate(270)"
          loc="left"
        />
        <Icon
          w="1rem"
          h="1rem"
          color="var(--accent-color-r)"
          rotate="rotate(90)"
          loc="right"
        />
      </button>

      <style jsx>
        {`
          .menu {
            display: flex;
            flex-direction: column;
            width: auto;
            height: 100%;
            padding: 0.5rem 0 0 0;
            z-index: 5;
          }

          .menu-close {
            position: relative;
            display: none;
            z-index: 1;
            color: var(--accent-color-r);
            background-color: transparent;
            padding: 0.25rem;
            font-size: 1.2rem;
            margin: 0 auto;
          }

          .menu-open {
            display: none;
            background-color: var(--font-color);
            color: var(--font-color-inverted);
            position: absolute;
            left: -5rem;
            transform: rotate(-90deg);
            font-size: 1.2rem;
            padding: 0.5rem 0.65rem 1.1rem 0.65rem;
          }

          nav a {
            color: var(--font-color);
            padding: 0.25rem;
            font-size: 1.2 rem;
            transition: color 0.35s;
            margin-left: 0;
            z-index: 2;
            text-decoration: none;
          }

          nav a::after {
            content: "";
            display: table;
            height: 1.7px;
            min-height: 1.5px;
            width: 1.25rem;
            background-color: var(--font-color);
            margin: 0.2rem 0 0 0;
            transition: 0.25s;
          }

          nav a:hover:after {
            width: 50%;
            transition: 0.25s;
            background-color: var(--accent-color-r);
          }

          nav a:nth-child(n + 2) {
            margin-bottom: 8px;
          }

          nav a:focus {
            background-color: var(--font-color);
            color: var(--font-color-inverted);
            border: solid 3px transparent;
          }

          nav a:focus:after {
            background-color: var(--font-color);
          }

          @media only screen and (max-width: 1024px) {
            .menu {
              position: absolute;
              width: 110vw;
              height: 100vh;
              background-color: var(--font-color);
              padding: 0;
              justify-content: center;
              align-items: center;
            }

            .menu-close {
              display: block;
              margin-top: 1.5rem;
            }

            .menu-open {
              display: block;
            }

            nav a {
              text-align: center;
              width: 50%;
              color: var(--font-color-inverted);
              text-decoration: underline;
            }

            nav a:nth-child (1) {
              margin-top: 0.5rem;
            }

            nav a::after {
              width: 0;
              background-color: transparent;
            }

            nav a:hover:after {
              width: 0;
              background-color: transparent;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Menu;
