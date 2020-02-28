import { useState } from "react";
import Icon from "../Icon/Icon";

export default function DesignProjects(props) {
  const [toggle, setToggle] = useState("design-project-modal-hidden");

  return (
    <div className="project-card no-border">
      <button
        className="open-modal"
        onClick={() => setToggle("design-project-modal")}
      >
        Show Project
        <Icon
          w="1em"
          h="1em"
          color="var(--font-color)"
          rotate="rotate(270)"
          loc="left"
        />
        <Icon
          w="1em"
          h="1em"
          color="var(--font-color)"
          rotate="rotate(90)"
          loc="right"
        />
      </button>
      <div className="design-project-thumbnail">asd</div>
      <div className={toggle}>
        <button
          className="close-modal"
          onClick={() => setToggle("design-project-modal-hidden")}
        >
          Close
          <Icon
            w="1em"
            h="1em"
            color="var(--font-color)"
            rotate="rotate(270)"
            loc="left"
          />
          <Icon
            w="1em"
            h="1em"
            color="var(--font-color)"
            rotate="rotate(90)"
            loc="right"
          />
        </button>

        <div className="modal-content no-border">modal content goes here</div>
      </div>
      <style jsx>{`
        .open-modal {
          position: relative;
          color: var(--font-color);
          background-color: var(--accent-color-b);
          padding: 0.25rem;
          margin: 0 0 1rem 0.5rem;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .open-modal:focus {
          border: solid 3px transparent;
          background-color: var(--font-color);
          color: var(--font-color-inverted);
        }

        .open-modal:hover {
          border: solid 3px transparent;
          background-color: var(--font-color);
          color: var(--font-color-inverted);
        }

        .close-modal {
          position: fixed;
          color: var(--font-color);
          background-color: var(--accent-color-b);
          padding: 0.25rem;
          margin: 0 0 1rem 0.5rem;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .close-modal:focus {
          border: solid 3px transparent;
          background-color: var(--font-color);
          color: var(--font-color-inverted);
        }

        .close-modal:hover {
          border: solid 3px transparent;
          background-color: var(--font-color);
          color: var(--font-color-inverted);
        }

        .design-project-thumbnail {
          height: 8rem;
        }

        .design-project-modal {
          position: fixed;
          height: 100vh;
          width: 100vw;
          top: 0;
          left: 0;
          z-index: 7;
          background-color: var(--font-color-inverted);
          overflow: scroll;
        }

        .design-project-modal-hidden {
          display: none;
        }

        @media only screen and (max-width: 1024px) {
        }
      `}</style>
    </div>
  );
}
