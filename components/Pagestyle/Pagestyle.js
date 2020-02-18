export default function Pagestyle() {
  return (
    <style jsx>
      {`
        h1:first-of-type {
          margin: 0;
          background-color: black;
          color: white;
          padding: 0.5rem 0.75rem;
        }

        h2,
        h3,
        p,
        ul,
        a {
          margin-left: 0.75rem;
        }

        li {
          font-size: 0.75rem;
        }

        a {
          font-size: 0.75rem;
          color: black;
        }

        @media only screen and (max-width: 1024px) {
          h1:first-of-type {
            margin: 1rem 0;
          }
        }
      `}
    </style>
  );
}
