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
              functional and aesthetically pleasing website. I always strive to
              write code that fills my personal criteria derived from standards
              and good praxis:
            </p>
            <ul>
              <li>1. Use of Semantic & Accessible HTML.</li>
              <li>
                2. Code that is easy to communicate to fellow developers in a
                team.
              </li>
              <li>
                3. Code that is adaptable and scalable with as few "hacks" as
                possible.
              </li>
            </ul>
          </div>
          <h2 className="h2-styled">K7</h2>
          <p className="italic">
            - Responsive web design and adaption of graphics to web pages.
          </p>
          <div className="project-card no-border">
            <p>
              I have applied as many responsive principles as I could on this
              very website. It is built to scale well to every type of device
              and browser.
            </p>
            <p>
              The correct elements should be focusable with screen-readers for
              visually impaired on smartphone, tablets and computers.
            </p>
            <p>
              Images on this website are served via a CDN to provide correct
              compression and image sizes dependent on bandwith and screen
              sizes.
              <a
                href="https://carlhernek.se/design/sfdhyperisland"
                target="_blank"
              >
                This
              </a>{" "}
              project page utilize this on both static and moving graphics.
            </p>
            <p>
              Finally the website is built in Next.js, which means a server-side
              rendered HTML will be served without unecessary files being served
              to the user. This reduces bandwidth which is optimal for mobile
              networks!
            </p>
          </div>
          <h2 className="h2-styled">S3</h2>
          <p className="italic">
            - Creating solutions for composite problems in digital
            communication, service and product development requires an
            understanding and dimension of several different aspects such as a
            customer's business, user behavior, technical possibilities and
            limitations.
          </p>
          {/* SFD */}
          <h2 className="h2-styled">S4</h2>
          <p className="italic">- Create effective front end code.</p>
          {/*  */}
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
