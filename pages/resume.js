import Container from "../components/Container/Container";
import Pagestyle from "../components/Pagestyle/Pagestyle";
import Footer from "../components/Footer/Footer";

export default function Resume() {
  return (
    <Container>
      <div className="page" tabIndex="0">
        <h1>Resumé</h1>
        <div className="project-card no-border">
          <h3>Contact</h3>
          <ul>
            <li>+46 (0)70 66 55 078</li>
            <li>
              <a href="mailto:hello@carlhernek.se">hello@carlhernek.se</a>
            </li>
          </ul>
        </div>
        <div className="project-card no-border">
          <h3>Toolbox</h3>
          <div className="column-card no-border">
            <ul>
              <li className="no-border">
                <h4>Frontend, UX / UI</h4>
              </li>
              <li>HTML</li>
              <li>CSS</li>
              <li>javascript</li>
              <li>Figma</li>
              <li>Github</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>React</li>
            </ul>
            <ul>
              <li className="no-border">
                <h4>Design</h4>
              </li>
              <li>Industrial Design</li>
              <li>Design Sketching</li>
              <li>Design Thinking </li>
              <li>Adobe CS</li>
              <li>Rhinoceros</li>
              <li>SolidWorks</li>
              <li>Keyshot</li>
            </ul>
          </div>
        </div>

        <div className="project-card no-border">
          <h3>Work & Internships</h3>
          <div className="column-card no-border">
            <ul>
              <li className="no-border">
                <h4>2019</h4>
              </li>
              <li>
                User Research as a base for service development for a tourist
                resort in Dalecarlia
              </li>
              <li>
                Teaching Adobe CS design and editing tools at Leksands
                Folkhögskola.
              </li>
            </ul>
            <ul>
              <li className="no-border">
                <h4>Earlier</h4>
              </li>
              <li>2018 - Freelance Design</li>
              <li>2017 - Design Internship No Picnic AB</li>
              <li>2016 - Graphic Design & Layout, Ore gruppen </li>
            </ul>
          </div>
        </div>

        <div className="project-card no-border">
          <h3>Education</h3>
          <div className="column-card no-border">
            <ul>
              <li className="no-border">
                <h4>University / Vocational University</h4>
              </li>
              <li>2019 - 2021, Frontend Developer, Hyper Island </li>
              <li>2015 - 2018, BFA Industrial Design, UID </li>
            </ul>
            <ul>
              <li className="no-border">
                <h4>Other</h4>
              </li>
              <li>2013 - 2015, Design, Leksands Folkhögskola </li>
            </ul>
          </div>
        </div>

        <Pagestyle />
        <Footer />
      </div>
    </Container>
  );
}
