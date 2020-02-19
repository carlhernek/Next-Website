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
        }

        li {
          font-size: 0.75rem;
        }

        a {
          font-size: 0.75rem;
          color: black;
        }

        .project-card {
        }

        .project-img {
          object-fit: cover;
          height: 10rem;
          width: 10rem;
          margin: 0 0.75rem 0.75rem 0;
        }

        @media only screen and (max-width: 1024px) {
          h1:first-of-type {
            margin: 1rem 0;
          }

          @media only screen and (max-width: 1024px) and (orientation: portrait) {
            .project-card {
            }
          }
        }
      `}
    </style>
  );
}
