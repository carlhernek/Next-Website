export default function Projects({
  projectTitle, // Takes "string"
  projectMedia, // Takes [["type","src","alt"],["type","src","alt"]]
  projectLink, // Takes [["Link title, url"],["Link title, url"]]
  projectDate, // Takes "string"
  projectDesc, // Takes "string"
  projectTech
}) {
  const tech = () => {
    let techList = [];
    if (projectTech) {
      projectTech.forEach(item => techList.push(<li>{item}</li>));
      return techList;
    }
  };

  const links = () => {
    let linkList = [];
    if (projectLink) {
      projectLink.forEach(item =>
        linkList.push(
          <a href={item[1]} target="_blank">
            {item[0]}
            <br />
          </a>
        )
      );
      return linkList;
    }
  };

  const media = () => {
    if (projectMedia) {
      return (
        <div className="no-border">
          <img
            src={projectMedia}
            alt=""
            className="project-img no-border"
          ></img>
        </div>
      );
    }
  };

  return (
    <div className="no-border">
      <h3>{projectTitle}</h3>
      <div className="project-card no-border">
        {media()}
        <div className="no-border">
          {links()}
          <p>
            <span class="date">{projectDate}</span>
            <br />
            {projectDesc}
          </p>
          <ul>
            <lh>Built with</lh>
            {tech()}
          </ul>
        </div>
      </div>
    </div>
  );
}
