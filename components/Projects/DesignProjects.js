export default function DesignProjects({ title, src, alt, srcSet }) {
  return (
    <div className="no-border">
      <div className="design-project-thumbnail">
        <img className="no-border" alt={alt} src={src} srcSet={srcSet}></img>
        <h3 className="h3-thumb">{title}</h3>
      </div>

      <style jsx>{`
        .design-project-thumbnail {
          position: relative;
          width: 18rem;
          height: 18rem;
          margin: 1rem;
        }

        .design-project-thumbnail img {
          object-fit: cover;
          width: 18rem;
          height: 18rem;
          box-shadow: 0.5rem 0.5rem 0px 0px var(--accent-color-r);
          transition: box-shadow 0.15s;
        }

        .h3-thumb {
          color: var(--font-color);
          background-color: var(--accent-color-r-opacity);
          padding: 0.5rem;
          position: absolute;
          top: -1.7rem;
          left: -0.5rem;
          transition: background-color 0.15s;
        }

        .design-project-thumbnail:hover .h3-thumb {
          background-color: var(--accent-color-g);
          transition: background-color 0.15s;
        }

        .design-project-thumbnail:hover img {
          box-shadow: 0.4rem 0.4rem 0px 0px var(--accent-color-g);
          transition: box-shadow 0.15s;
        }

        @media only screen and (orientation: portrait) {
          .design-project-thumbnail {
            width: 90%;
            height: auto;
            min-height: 5rem;
          }

          .design-project-thumbnail img {
            width: 90%;
            height: auto;
            min-height: 5rem;
          }
        }

        @media only screen and (max-width: 1024px) {
          .h3-thumb {
            font-size: 1.3rem;
          }
        }

        @media only screen and (max-width: 726px) {
          .h3-thumb {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}
