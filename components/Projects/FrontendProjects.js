import { useState } from "react";
import Icon from "../Icon/Icon";

const tech = param => {
  let techList = [];
  if (param) {
    param.forEach((item, index) => techList.push(<li key={index}>{item}</li>));
    return techList;
  }
};

const links = param => {
  let linkList = [];
  if (param) {
    param.forEach((item, index) =>
      linkList.push(
        <a key={index} href={item[1]} target="_blank">
          {item[0]}
          <br />
        </a>
      )
    );
    return linkList;
  }
};

const media = (param, load) => {
  let mediaContainer = [];

  if (param) {
    param.forEach((item, index) => {
      if (item[0] === "img") {
        mediaContainer.push(
          <img
            key={index}
            src={item[1]}
            alt={item[2]}
            srcSet={item[3]}
            className="project-img no-border"
          ></img>
        );
      }

      if (item[0] === "vid") {
        switch (item[2]) {
          case "mp4":
            mediaContainer.push(
              <video
                className="project-vid no-border"
                autoPlay="true"
                muted="true"
                loop="true"
              >
                <source key={index} src={item[1]} type="video/mp4" />
              </video>
            );
            break;
          case "webm":
            mediaContainer.push(
              <video
                className="project-vid no-border"
                autoPlay="true"
                muted="true"
                loop="true"
              >
                <source key={index} src={item[1]} type="video/webm" />
              </video>
            );
            break;
          case "ogg":
            mediaContainer.push(
              <video
                className="project-vid no-border"
                autoPlay="true"
                muted="true"
                loop="true"
              >
                <source key={index} src={item[1]} type="video/ogg" />
              </video>
            );
            break;
          default:
            break;
        }
      }
    });
    if (!load) {
      return <div className="hide">{mediaContainer}</div>;
    } else return <div className="media-container">{mediaContainer}</div>;
  }
};

export default function FrontendProjects({
  projectTitle, // Takes "string"
  projectMedia, // Takes [(image)["element","src","alt", "[(srcSet)lowres, medres, hires]"],(video)["element","src","codec"]]
  projectLink, // Takes [["Link title, url"],["Link title, url"]]
  projectDate, // Takes "string"
  projectDesc, // Takes "string"
  projectTech // Takes ["string","string"]
}) {
  const [load, setLoad] = useState(false);
  return (
    <div className="project-card no-border">
      <h3>{projectTitle}</h3>
      <div className="no-border">
        <div className="no-border">
          <h4>Links</h4>
          {links(projectLink)}
          <h4>Project Description</h4>
          <ul className="no-border">
            <li>{projectDate}</li>
            <li>{projectDesc}</li>
          </ul>
          <h4>Made With</h4>
          <ul>{tech(projectTech)}</ul>
        </div>
        <div>
          <h4>Media</h4>
          <button className="load-button" onClick={() => setLoad(true)}>
            Load Media
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
          {media(projectMedia, load)}
        </div>
      </div>
    </div>
  );
}
