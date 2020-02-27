export default function Pagestyle() {
  return (
    <style jsx>
      {`
        h1 {
          font-size: 2.5rem;
          margin: 0 0 0.5rem 0;
          color: var(--font-color);
        }

        h1::after {
          position: relative;
          display: block;
          content: "";
          height: 1.7rem;
          width: 100%;
          background-color: var(--accent-color-b);
          left: 1rem;
          top: -1.6rem;
          z-index: -1;
        }

        h2 {
          font-size: 1.9rem;
          margin: 1.5rem 0 0.3rem 0;
        }

        .h2-styled::after {
          position: relative;
          display: block;
          content: "";
          height: 1.5rem;
          width: 100%;
          background-color: var(--accent-color-o);
          left: 0.75rem;
          top: -1.3rem;
          z-index: -1;
        }

        h3 {
          font-size: 1.7rem;
        }

        h4 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1.2rem;
          line-height: 1.6rem;
        }

        ul {
          display: table;
          margin-right: 1rem;
        }

        li {
          font-size: 1.2rem;
          display: table;
          line-height: 1.6rem;
        }

        a {
          font-size: 1.2rem;
          color: var(--link-color);
        }

        .project-card {
          padding: 0 0.25rem 1rem 0.25rem;
          margin: 1rem 0;
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
            margin: 1.5rem 0;
          }
        }

        @media only screen and (max-width: 756px) {
          h2 {
            font-size: 1.5rem;
          }

          h3 {
            font-size: 1.4rem;
          }

          h4 {
            font-size: 1.3rem;
          }

          .h2-styled::after {
            left: 0.575rem;
            top: -0.975rem;
            height: 1.2rem;
          }
        }
      `}
    </style>
  );
}
