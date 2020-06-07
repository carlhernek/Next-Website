import Container from "../components/Container/Container";
import Pagestyle from "../components/Pagestyle/Pagestyle";
import Link from "next/link";

export default function Assessment() {
  return (
    <Container>
      <div className="page" tabIndex="0">
        <h1 className="h1-styled">Assessment</h1>
        <div className="lone-child-wrap last-child">
          <h2 className="h2-styled">Intro</h2>
          <div className="project-card no-border">
            <h4>Welcome!</h4>
            <p>
              Hopefully it was not too troublesome to navigate to an external
              website for this assessment but I was curious to see if I could
              pull off a "blog-post" like assessment.
            </p>
            <p>
              Other than being the platform for this particular assessment this
              website usually serves as my personal portfolio. I built the
              scaffolding for the site earlier this year and figured that since
              I built it to be easily expanded upon I might just as well
              temporarily expand it to host my assessment.
            </p>
            <p></p>
            <Link href="/frontend">
              <a>Frontend</a>
            </Link>
          </div>
          <h2 className="h2-styled">K6</h2>
          <p className="italic">- Create effective front end code.</p>
          <div className="project-card no-border">
            <p>
              To me effective front end code is not only code that produces a
              functional and aesthetically pleasing website.
            </p>
          </div>
          <h2 className="h2-styled">K7</h2>
          <p className="italic">- Create effective front end code.</p>
          <h2 className="h2-styled">S3</h2>
          <p className="italic">- Create effective front end code.</p>
          <h2 className="h2-styled">S4</h2>
          <p className="italic">- Create effective front end code.</p>
          <h2 className="h2-styled">S5</h2>
          <p className="italic">- Create effective front end code.</p>
          <h2 className="h2-styled">S6</h2>
          <p className="italic">- Create effective front end code.</p>
          <h2 className="h2-styled">C3</h2>
          <p className="italic">- Create effective front end code.</p>
          <h2 className="h2-styled">C4</h2>
          <p className="italic">- Create effective front end code.</p>
        </div>
        <Pagestyle />
      </div>
    </Container>
  );
}
