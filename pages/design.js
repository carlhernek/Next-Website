import Container from "../components/Container/Container";
import Pagestyle from "../components/Pagestyle/Pagestyle";
import Footer from "../components/Footer/Footer";
import DesignProjects from "../components/Projects/DesignProjects";
import Link from "next/link";

export default function Design() {
  return (
    <Container>
      <div className="page" tabIndex="0">
        <h1>Design</h1>
        <div className="lone-child-wrap">
          <p>
            I enjoy making beautiful things and to me that beauty can take many
            shapes, be it well structured code, a satisfying css animation on a
            button hover or an aesthetically pleasing physical product.
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
          <h2 className="h2-styled">UX / UI</h2>
          <div className="project-card column-card no-border">
            <Link href="/design/samplepage">
              <a>
                <DesignProjects
                  title="SFD Mobile Web"
                  alt="Picture of figma workspace"
                  src="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/logi_zqrfef.png"
                  srcSet={[
                    "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_256/v1582198505/Website/Img/logi_zqrfef.png 256w",
                    "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/logi_zqrfef.png 512w",
                    "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_1024/v1582198505/Website/Img/logi_zqrfef.png 1024w"
                  ]}
                />
              </a>
            </Link>

            <DesignProjects />
          </div>
          <h2 className="h2-styled">CAD Showreel</h2>
          <h2 className="h2-styled">UID Design Portfolio</h2>
        </div>
        <Pagestyle />
        <Footer />
      </div>
    </Container>
  );
}
