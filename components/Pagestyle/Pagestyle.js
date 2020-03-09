export default function Pagestyle() {
  return (
    <style jsx>
      {`
        h1 {
          font-size: 2.5rem;
          margin: 0;
          color: var(--font-color);
        }

        .h1-styled::after {
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
          margin: 0.2rem 0 0.8rem 0;
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

        button:focus svg {
          display: none;
        }

        button:hover svg {
          display: none;
        }

        .project-card {
          position: relative;
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

        .project-banner {
          object-fit: cover;
          width: 100%;
          height: 20rem;
          z-index: -5;
        }

        .project-return {
          display: table;
          float: right;
          padding: 0.5rem;
          margin: 2rem;
          background-color: var(--accent-color-b);
          color: var(--font-color);
        }

        .project-return:hover {
          color: var(--font-color-inverted);
          background-color: var(--font-color);
        }

        .project-return:focus {
          color: var(--font-color-inverted);
          background-color: var(--font-color);
        }

        .project-heading {
          margin: 0;
        }

        .media-container {
          display: flex;
          flex-wrap: wrap;
        }

        .column-card {
          display: flex;
        }

        .hide {
          display: none;
        }

        .inline-img {
          object-fit: contain;
          height: 20rem;
          width: auto;
          margin: 0 0.75rem 0.75rem 0;
        }

        .inline-img-big {
          object-fit: contain;
          height: 24rem;
          width: auto;
          margin: 0 0.75rem 0.75rem 0;
        }

        .load-button {
          position: relative;
          color: var(--font-color);
          background-color: transparent;
          padding: 0.25rem;
          margin: 0 0 1rem 0.5rem;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .load-button:focus {
          border: solid 3px transparent;
          background-color: var(--font-color);
          color: var(--font-color-inverted);
        }

        .load-button:hover {
          border: solid 3px transparent;
          background-color: var(--font-color);
          color: var(--font-color-inverted);
        }

        @media only screen and (min-width: 1024px) and (orientation: landscape) {
          .project-banner {
            height: 45vh;
          }
        }

        @media only screen and (orientation: portrait) {
          .project-img {
            object-fit: contain;
            width: 100%;
            height: auto;
            margin: 0 0 0.75rem 0;
          }

          .project-banner {
            object-fit: contain;
            width: 100%;
            height: auto;
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

          .inline-img {
            height: auto;
            width: 100%;
          }

          .inline-img-big {
            height: auto;
            width: 100%;
          }
        }

        @media only screen and (max-width: 1024px) {
          .project-heading {
            margin: 1rem 0 0 0;
          }

          .last-child {
            margin: 0 0 10rem 0;
          }
        }

        @media only screen and (max-width: 756px) {
          .project-heading {
            font-size: 2rem;
          }

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
