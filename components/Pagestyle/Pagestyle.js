export default function Pagestyle() {
  return (
    <style jsx>
      {`
        h1:first-of-type {
          margin: 0.5rem 0;
          background-color: var(--font-color);
          color: var(--font-color-inverted);
          padding: 0.5rem 0.75rem;
        }

        h1 {
          font-size: 2.2rem;
        }

        h2 {
          font-size: 1.9rem;
        }

        h3 {
          font-size: 1.8rem;
        }

        h4 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1.2rem;
        }

        ul {
          display: table;
          margin-right: 1rem;
        }

        li {
          font-size: 1.2rem;
          display: table;
        }

        a {
          font-size: 1.2rem;
          color: var(--link-color);
        }

        .project-card {
          border-left: solid 7px var(--font-color);
          padding: 0.125rem 0.125rem 0.125rem 0.5rem;
          margin: 0.5rem 0;
          background-color: var(--font-color-opacity);
        }

        .project-img {
          object-fit: cover;
          height: 13rem;
          width: 13rem;
          margin: 0 0.75rem 0.75rem 0;
        }

        .project-vid {
          width: 26rem;
          margin: 0 0.75rem 0.75rem 0;
        }

        .media-container {
          display: flex;
          flex-wrap: wrap;
        }

        .column-card {
          display: flex;
        }

        @media only screen and (orientation: portrait) {
          .project-img {
            object-fit: contain;
            width: 100%;
            height: auto;
            margin: 0 0 0.75rem 0;
          }

          .project-vid {
            width: 100%;
            min-width: 100%;
            margin: 0 0 0.75rem 0;
          }

          .media-container {
            flex-direction: column;
            flex-wrap: nowrap;
          }

          .column-card {
            flex-direction: column;
          }
        }

        @media only screen and (max-width: 1024px) {
          h1:first-of-type {
            margin: 0.5rem 0;
          }
        }
      `}
    </style>
  );
}
