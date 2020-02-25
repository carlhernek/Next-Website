import Link from "next/link";
import { useState } from "react";

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
      </button>
      <style jsx>
        {`
          .menu {
            display: flex;
            flex-direction: column;
            width: auto;
            height: 100%;
          }

          .menu-close {
            display: none;
            z-index: 1;
            color: var(--accent-color);
            background-color: transparent;
            padding: 0.25rem;
            font-size: 1.2rem;
            border-top: solid 1px var(--accent-color);
            border-bottom: solid 1px var(--accent-color);
          }

          .menu-open {
            display: none;
            background-color: var(--font-color);
            color: var(--font-color-inverted);
            position: absolute;
            left: -4rem;
            transform: rotate(-90deg);
            font-size: 1.2 rem;
            padding: 0.5rem 0.5rem 1.1rem 0.5rem;
          }

          nav a {
            color: var(--font-color);
            padding: 0.25rem;
            font-size: 1.2 rem;
            transition: color 0.35s;
            margin-left: 0;
            z-index: 2;
          }

          nav a:nth-child(n + 2) {
            margin-top: 0.5rem;
          }

          nav a:focus {
            background-color: var(--font-color);
            color: var(--font-color-inverted);
            border: solid 3px transparent;
          }

          nav a:hover {
            background-color: var(--font-color);
            color: var(--font-color-inverted);
            transition: color 0.35s;
          }

          @media only screen and (max-width: 1024px) {
            .menu {
              position: absolute;
              width: 110vw;
              height: 100vh;
              background-color: var(--font-color);
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
            }

            nav a:nth-child (1) {
              margin-top: 0.5rem;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Menu;
