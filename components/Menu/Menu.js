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
        left: "-7vw",
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
      <button className="toggle" onClick={() => menuToggle(toggle)}></button>
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
      <button className="tab" onClick={() => menuToggle(toggle)}>
        Menu
      </button>
      <style jsx>
        {`
          .menu {
            display: flex;
            flex-direction: column;
            width: auto;
            height: 100%;
          }

          .toggle {
            display: none;
            position: absolute;
            height: 100vh;
            width: 110vw;
            background-color: transparent;
            z-index: 1;
          }

          .tab {
            display: none;
            background-color: black;
            color: white;
            position: absolute;
            left: -3rem;
            transform: rotate(-90deg);
            font-size: 1rem;
            padding: 0.5rem 0.5rem 1.1rem 0.5rem;
          }

          nav a {
            color: black;
            padding: 0.25rem;
            font-size: 1rem;
            transition: color 0.35s;
            margin-left: 0;
            z-index: 2;
          }

          nav a:nth-child(n + 2) {
            margin-top: 0.5rem;
          }

          nav a:focus {
            background-color: black;
            color: white;
            border: solid 3px transparent;
          }

          .tab:focus {
            border: none;
          }

          @media only screen and (max-width: 1024px) {
            .menu {
              position: absolute;
              width: 110vw;
              height: 100vh;
              background-color: black;
              justify-content: center;
              align-items: center;
            }

            .toggle {
              display: block;
            }

            .tab {
              display: block;
            }

            nav a {
              text-align: center;
              width: 50%;
              color: white;
            }

            nav a:nth-child (1) {
              margin-top: 1rem;
            }
          }

          nav a:hover {
            background-color: black;
            color: white;
            transition: color 0.35s;
          }

          @media only screen and (orientation: portrait) {
            nav a {
              padding: 1.5rem 0.5rem;
            }
          }

          @media only screen and (max-width: 1024px) {
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
