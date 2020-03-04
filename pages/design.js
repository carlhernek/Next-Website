import Container from "../components/Container/Container";
import Pagestyle from "../components/Pagestyle/Pagestyle";
import DesignProjects from "../components/Projects/DesignProjects";
import Link from "next/link";

export default function Design() {
  return (
    <Container>
      <div className="page" tabIndex="0">
        <h1 className="h1-styled">Design</h1>
        <div className="lone-child-wrap">
          <h2 className="h2-styled">UX / UI</h2>
          <div className="column-card no-border">
            <Link href="/design/sfdhyperisland">
              <a>
                <DesignProjects
                  title="SFD Mobile Web"
                  alt="Picture of figma workspace"
                  src="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/SFD/SFDBanner_wkacuy.png"
                  srcSet={[
                    "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_256/v1582198505/Website/Img/SFD/SFDBanner_wkacuy.png 256w",
                    "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/SFD/SFDBanner_wkacuy.png 512w",
                    "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_1024/v1582198505/Website/Img/SFD/SFDBanner_wkacuy.png 1024w"
                  ]}
                />
              </a>
            </Link>
          </div>
          <h2 className="h2-styled">Industrial Design</h2>
          <div className="column-card no-border">
            <a
              href="https://issuu.com/carlhernek/docs/portfolio180730issuuweb"
              target="_blank"
              rel="noopener"
            >
              <DesignProjects
                title="UID Portfolio"
                alt="Picture of a page from my industrial design degree portfolio"
                src="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/ID/Portfolio_ydswc5_jvx0a9.jpg"
                srcSet={[
                  "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_256/v1582198505/Website/Img/ID/Portfolio_ydswc5_jvx0a9.jpg 256w",
                  "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/ID/Portfolio_ydswc5_jvx0a9.jpg 512w",
                  "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_1024/v1582198505/Website/Img/ID/Portfolio_ydswc5_jvx0a9.jpg 1024w"
                ]}
              />
            </a>
            <Link href="/design/cadreel">
              <a>
                <DesignProjects
                  title="Cad Showreel"
                  alt="Picture of a computer made product rendering"
                  src="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/CAD/7_qepbsd.png"
                  srcSet={[
                    "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_256/v1582198505/Website/Img/CAD/7_qepbsd.png 256w",
                    "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/CAD/7_qepbsd.png 512w",
                    "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_1024/v1582198505/Website/Img/CAD/7_qepbsd.png 1024w"
                  ]}
                />
              </a>
            </Link>
          </div>
          <h2 className="h2-styled">On Design</h2>
          <p>
            I enjoy making beautiful things and to me that beauty can take many
            shapes, be it well structured code, a satisfying css animation or an
            aesthetically pleasing physical product.
          </p>
          <p>
            I realised that similarly to when you create something physical when
            you have to be aware of the constraints of production, that same
            thing is true for when you create something digital. To a designer
            it is important that the resulting product, be it digital or
            physical, holds true to the intended design that was passed on to
            production or development.
          </p>
          <p>
            This will only happen if the designer has the knowledge to produce a
            design that is feasible and easily communicated.
          </p>
        </div>
        <Pagestyle />
      </div>
    </Container>
  );
}
