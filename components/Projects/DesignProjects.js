import { useState } from "react";
import Icon from "../Icon/Icon";

export default function DesignProjects(props) {
  const [toggle, setToggle] = useState("design-project-modal-hidden");

  return (
    <div className="no-border">
      <div className="design-project-thumbnail">
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
        <img
          className="white-border"
          src="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_70,w_512/v1582198505/Website/Img/logi_zqrfef.png"
          alt=""
          srcSet=""
        ></img>
      </div>
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
          position: absolute;
          color: var(--font-color);
          background-color: var(--accent-color-b);
          padding: 0.25rem;
          margin: 0 0 1rem 0.5rem;
          font-size: 1.2rem;
          cursor: pointer;
          bottom: 1rem;
          right: 1rem;
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
