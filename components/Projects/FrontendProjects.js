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

const media = param => {
  let mediaContainer = [];

  if (param) {
    param.forEach((item, index) => {
      if (item[0] === "img") {
        mediaContainer.push(
          <img
            key={index}
            src={item[1]}
            alt={item[2]}
            className="project-img no-border"
          ></img>
        );
      }
    });
    return (
      <div className="media-container">
        <h4>Media</h4>
        {mediaContainer}
      </div>
    );
  }
};

export default function FrontendProjects({
  projectTitle, // Takes "string"
  projectMedia, // Takes [["type","src","alt"],["type","src","alt"]]
  projectLink, // Takes [["Link title, url"],["Link title, url"]]
  projectDate, // Takes "string"
  projectDesc, // Takes "string"
  projectTech
}) {
  return (
    <div className="project-card no-border">
      <h3>{projectTitle}</h3>
      <div className="no-border">
        <div className="no-border">
          <h4>Links</h4>
          {links(projectLink)}
          <h4>Project Description</h4>
          <p className="no-margin-top">
            {projectDate}
            <br />
            {projectDesc}
          </p>
          <h4>Made With</h4>
          <ul>{tech(projectTech)}</ul>
        </div>

        {media(projectMedia)}
      </div>
    </div>
  );
}
