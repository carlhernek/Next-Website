import Link from "next/link";

const Menu = () => {
  return (
    <nav>
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
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          width: auto;
          height: 100%;
        }

        nav a {
          color: white;
          background-color: black;
          padding: 0.25rem;
          font-size: 1rem;
          transition: color 0.35s;
          margin-left: 0;
        }

        nav a:nth-child(n + 2) {
          margin-top: 0.5rem;
        }

        nav a:focus {
          background-color: white;
          color: black;
        }

        @media only screen and (max-width: 1024px) {
          nav a {
            padding: 0.5rem;
            margin: 0.125rem 0.5rem;
          }

          nav a:nth-child (1) {
            margin-top: 1rem;
          }
        }

        nav a:hover {
          background-color: white;
          color: black;
          transition: color 0.35s;
        }

        @media only screen and (orientation: portrait) {
          nav a {
            padding: 1.5rem 0.5rem;
          }
        }

        @media only screen and (max-width: 2014px) {
          nav a:nth-child (1) {
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Menu;
