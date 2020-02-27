import Container from "../components/Container/Container";
import Pagestyle from "../components/Pagestyle/Pagestyle";
import FrontendProjects from "../components/Projects/FrontendProjects";
import Footer from "../components/Footer/Footer";

export default function Frontend() {
  return (
    <Container>
      <div className="page" tabIndex="0">
        <h1>Frontend</h1>
        <div className="lone-child-wrap">
          <p>
            This is the latest chapter of my life. I started the Frontend
            Developer program at Hyper Island in august 2019 and have since been
            hard at work learning the ways of web development, user experience
            and agile working environments.
          </p>
          <p>
            I started this journey because I found myself becoming gradually
            more interested in the technology side of things in my work. Almost
            everything today has a digital component to it and requires specific
            knowledge in regards to us as humans and technology.
          </p>
          <h2 className="h2-styled">Projects</h2>
        </div>
        <FrontendProjects
          projectTitle="My First Portfolio Website"
          projectLink={[["Github", "https://github.com/carlhernek/Website"]]}
          projectDate="11/2019"
          projectDesc="The very first version of my portfolio made 100% from scratch."
          projectTech={["HTML", "CSS", "Javascript"]}
        />
        <FrontendProjects
          projectTitle="Pseudorandom"
          projectMedia={[
            [
              "img",
              "https://res.cloudinary.com/carlhernek/image/upload/q_70,w_512/v1582198505/Website/Img/logi_zqrfef.png",
              "picture of logi remote",
              [
                "https://res.cloudinary.com/carlhernek/image/upload/q_70,w_256/v1582198505/Website/Img/logi_zqrfef.png 256w",
                "https://res.cloudinary.com/carlhernek/image/upload/q_70,w_512/v1582198505/Website/Img/logi_zqrfef.png 512w",
                "https://res.cloudinary.com/carlhernek/image/upload/q_70,w_1024/v1582198505/Website/Img/logi_zqrfef.png 1024w"
              ]
            ]
          ]}
          projectLink={[
            ["Github", "https://github.com/carlhernek/Pan-Zoom-effects"],
            ["Live Website", "https://pan-zoom-effects-css-js.netlify.com/"]
          ]}
          projectDate="11/2019"
          projectDesc="The very first version of my portfolio made 100% from scratch."
          projectTech={["HTML", "CSS", "Javascript"]}
        />

        <Pagestyle />
        <Footer />
      </div>
    </Container>
  );
}
