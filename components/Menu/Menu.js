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
          background-color: #2e2e2e;
        }

        a {
          padding: 0.5em;
          color: rgb(243, 243, 243);
          font-size: 1em;
          transition: 0.35s;
        }

        @media only screen and (max-width: 1024px) {
          a {
            padding: 1.5em 0.5em;
            margin: 0.125em 0.25em;
            background-color: rgb(25, 25, 25);
          }
        }

        a:hover {
          background-color: rgb(243, 243, 243);
          color: #2e2e2e;
          text-decoration: none;
          transition: 0.35s;
        }
      `}</style>
    </nav>
  );
};

export default Menu;
