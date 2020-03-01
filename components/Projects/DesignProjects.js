export default function DesignProjects({ title, src, alt, srcSet }) {
  return (
    <div className="no-border">
      <div className="design-project-thumbnail">
        <img className="white-border" alt={alt} src={src} srcSet={srcSet}></img>
        <h3>{title}</h3>
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
        }

        .design-project-thumbnail h3 {
          color: var(--font-color);
          background-color: var(--accent-color-r-opacity);
          padding: 0.5rem;
          position: absolute;
          top: 0;
          left: -0.5rem;
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
        }
      `}</style>
    </div>
  );
}
