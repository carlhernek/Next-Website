export default function Projects({
  projectTitle,
  projectLink,
  projectDate,
  projectDesc,
  projectTech
}) {
  let techList = [];
  projectTech.forEach(item => techList.push(<li>{item}</li>));
  let linkList = [];
  projectLink.forEach(item =>
    linkList.push(
      <a href={item[1]} target="_blank">
        {item[0]}
        <br />
      </a>
    )
  );
  return (
    <div className="no-border">
      <h3>{projectTitle}</h3>
      {linkList}
      <p>
        <span class="date">{projectDate}</span>
        <br />
        {projectDesc}
      </p>
      <ul>
        <lh>Built with</lh>
        {techList}
      </ul>
    </div>
  );
}
