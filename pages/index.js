import Container from "../components/Container/Container";
import Pagestyle from "../components/Pagestyle/Pagestyle";

export default function Index() {
  return (
    <Container>
      <div className="page" tabIndex="0">
        <h1 className="h1-styled">Carl Hernek</h1>
        <div className="lone-child-wrap last-child">
          <h4>
            Industrial Designer BFA <br />
            Aspiring Frontend Developer
          </h4>
          <p>
            Currently a Developer Intern at{" "}
            <a target="_blank" href="https://www.thirdact.se/">
              Third Act.
            </a>
          </p>
          <h2 className="h2-styled">About me</h2>
          <p>
            Ever the curious designer I ventured into the unknown land of code
            and found that I enjoyed it and so far I have found the combined kit
            of being both a developer and a designer to be very powerful.
          </p>
          <p>
            The purpose of this website is not only to contain work samples and
            resumés but also to provide an opportunity for me to learn something
            new along the way of building it.
          </p>
          <p>
            Now you might think "Wow, this is a lot of text to read" and I
            agree, so please browse the other sections of the site, I'm sure
            there are some nice pictures here somewhere.
          </p>
          <ul>
            <li>
              Find me via{" "}
              <a
                target="_blank"
                href="https://se.linkedin.com/in/carl-hernek-95b05595"
              >
                Linkedin
              </a>{" "}
              or check out my{" "}
              <a target="_blank" href="https://github.com/carlhernek">
                Github.
              </a>
            </li>
            <li>
              This website was built with Next.js, check out the code{" "}
              <a
                target="_blank"
                href="https://github.com/carlhernek/Next-website"
              >
                here.
              </a>
            </li>
          </ul>
        </div>
        <Pagestyle />
      </div>
    </Container>
  );
}
