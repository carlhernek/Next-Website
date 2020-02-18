import Container from "../components/Container/Container";
import Pagestyle from "../components/Pagestyle/Pagestyle";
import Projects from "../components/Projects/Projects";

export default function Frontend() {
  return (
    <Container>
      <div className="page" tabIndex="0">
        <h1>Frontend</h1>
        <p>
          This is the latest chapter of my life. I started the Frontend
          Developer program at Hyper Island in august 2019 and have since been
          hard at work learning the ways of web development, user experience and
          agile working environments.
        </p>
        <p>
          I started this journey because I found myself becoming gradually more
          interested in the technology side of things in my work. Almost
          everything today has a digital component to it and requires specific
          knowledge in regards to us as humans and technology.
        </p>
        <h2>Projects</h2>
        <Projects
          projectTitle="My First Portfolio Website"
          projectLink={[
            ["Github", "https://github.com/carlhernek/Website"],
            ["Title2", "Link2"],
            ["Title3", "Link3"]
          ]}
          projectDate="11/2019"
          projectDesc="The very first version of my porfolio made 100% from scratch."
          projectTech={["HTML", "CSS", "Javascript"]}
        />
        <Projects
          projectTitle="Pseudorandom"
          projectLink={[
            ["Github", "https://github.com/carlhernek/Pan-Zoom-effects"],
            ["Live Website", "https://pan-zoom-effects-css-js.netlify.com/"]
          ]}
          projectDate="11/2019"
          projectDesc="The very first version of my porfolio made 100% from scratch."
          projectTech={["HTML", "CSS", "Javascript"]}
        />
        <Pagestyle />
      </div>
    </Container>
  );
}
