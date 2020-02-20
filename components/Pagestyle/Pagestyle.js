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

        li {
          font-size: 0.75rem;
        }

        a {
          font-size: 0.75rem;
          color: black;
        }

        .project-card {
          border-left: solid 7px black;
          padding-left: 0.5rem;
        }

        .project-img {
          object-fit: cover;
          height: 13rem;
          width: 13rem;
          margin: 0 0.75rem 0.75rem 0;
        }

        .project-vid {
          height: 13rem;
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
