import Link from "next/link";

const Menu = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/design">
        <a>Design</a>
      </Link>
      <style jsx>{`
        nav {
          font-family: "Raleway";
          display: flex;
          flex-direction: column;
          width: auto;
          height: 100%;
        }

        a {
          color: white;
          background-color: black;
          padding: 0.25rem;
          font-size: 1rem;
          transition: color 0.35s;
        }

        a:nth-child(n + 2) {
          margin-top: 0.5rem;
        }

        a:focus {
          background-color: white;
          color: black;
        }

        @media only screen and (max-width: 1024px) {
          a {
            padding: 1.5rem 0.5rem;
            margin: 0.125rem 0.5rem;
            background-color: black;
            color: white;
          }

          a:nth-child (1) {
            margin-top: 1rem;
          }
        }

        a:hover {
          background-color: white;
          color: black;
          transition: color 0.35s;
        }
      `}</style>
    </nav>
  );
};

export default Menu;
