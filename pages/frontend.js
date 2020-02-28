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
          projectTitle="This Website"
          projectLink={[
            ["Github", "https://github.com/carlhernek/Next-website"]
          ]}
          projectDate="02/2020"
          projectDesc="Website built using Next.js. Built during an a11y module at Hyper Island so I have experimented a lot with accessibility in this version of the site."
          projectTech={["Next.js", "React"]}
        />
        <FrontendProjects
          projectTitle="How to Sell your Design"
          projectLink={[
            ["Github", "https://github.com/carlhernek/How-To-Sell-Your-Design"],
            ["Live Demo", "https://how-to-sell-your-design.netlify.com/"]
          ]}
          projectDate="02/2020"
          projectDesc="Simple app built with React to understand functional components better. Randomizes words which are useful when describing form in design projects!"
          projectTech={["React"]}
        />
        <FrontendProjects
          projectTitle="Might as Well"
          projectLink={[["Live Demo", "https://might-as-well.netlify.com/"]]}
          projectDate="01/2020"
          projectDesc="Group project at Hyper Island. Concept app built with React which tells you things you can do in the vicinity of a metro station if there are delays on your metro. Most of this project was mob-coded."
          projectTech={[
            "React",
            "Google Places API",
            "SL Platsuppslag API",
            "SL Realtidsinfo API"
          ]}
        />
        <FrontendProjects
          projectTitle="Pseudorandom"
          projectLink={[
            ["Github", "https://github.com/carlhernek/Pseudorandom"],
            ["Live Demo", "https://pseudorandom-carlhernek.netlify.com/"]
          ]}
          projectDate="10/2019"
          projectDesc="My very first project with Javascript, a small dungeoncrawler using randomly generated content and characters."
          projectTech={["HTML", "CSS", "Javascript"]}
        />

        {/* <FrontendProjects
          projectTitle="How to sell your Design"
          projectMedia={[
            [
              "img",
              "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_70,w_512/v1582198505/Website/Img/logi_zqrfef.png",
              "picture of logi remote",
              [
                "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_70,w_256/v1582198505/Website/Img/logi_zqrfef.png 256w",
                "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_70,w_512/v1582198505/Website/Img/logi_zqrfef.png 512w",
                "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_70,w_1024/v1582198505/Website/Img/logi_zqrfef.png 1024w"
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
        /> */}

        <Pagestyle />
        <Footer />
      </div>
    </Container>
  );
}
