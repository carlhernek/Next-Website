import Container from "../../components/Container/Container";
import Pagestyle from "../../components/Pagestyle/Pagestyle";
import Link from "next/link";

export default function samplepage() {
  return (
    <Container>
      <div className="page relative" tabIndex="0">
        <h1 className="project-heading h1-styled">Project Title</h1>

        <img
          className="project-banner"
          alt="banner"
          src="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/logi_zqrfef.png"
          srcSet="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_70,w_256/v1582198505/Website/Img/logi_zqrfef.png 256w,
          https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_70,w_512/v1582198505/Website/Img/logi_zqrfef.png 512w,
          https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_70,w_1024/v1582198505/Website/Img/logi_zqrfef.png 1024w"
        ></img>

        <div className="lone-child-wrap">
          <h2>
            Industrial Designer BFA <br />
            Aspiring Frontend Developer
          </h2>
          <p>
            Banh mi air plant tempor pork belly health goth, hexagon PBR&B
            artisan mollit sint pour-over. Vape hammock sint shaman gastropub
            tacos. Tacos et food truck, deserunt typewriter brooklyn austin next
            level live-edge. Flexitarian crucifix kombucha, locavore whatever
            blue bottle proident woke. Four loko velit PBR&B irure. Incididunt
            you probably haven't heard of them vegan jean shorts lyft deep v
            consequat, sriracha listicle shabby chic pabst dolore leggings. Kale
            chips twee sartorial 90's bitters tote bag salvia. Ullamco squid
            bespoke lo-fi pok pok do dolore polaroid keytar.
          </p>
          <p>
            Laboris tilde wayfarers hot chicken actually tumblr. Marfa green
            juice dreamcatcher flexitarian aliqua vaporware dolore tote bag
            banjo. Eiusmod meditation narwhal, gochujang yr try-hard slow-carb
            hell of 8-bit. Hexagon ad lyft, pickled typewriter ut biodiesel
            chicharrones edison bulb swag yr trust fund aesthetic. Meggings
            typewriter ullamco four loko bespoke vegan marfa, tbh shoreditch
            coloring book wolf raclette tousled street art. Gentrify brooklyn
            you probably haven't heard of them jianbing gluten-free portland.
            Single-origin coffee locavore aliquip meh, 3 wolf moon succulents
            edison bulb tumblr beard duis venmo brunch offal minim. Aute street
            art health goth, enim jean shorts fingerstache nostrud. Irure
            crucifix man bun tousled sint.
          </p>
          <p>
            Readymade qui beard, ea put a bird on it vape taiyaki consequat
            viral quis lorem 90's in. Magna raclette vaporware umami distillery
            esse in tacos chartreuse. Gluten-free cillum man braid readymade
            banh mi XOXO. Enamel pin craft beer coloring book, fam normcore pok
            pok quis. Brooklyn you probably haven't heard of them plaid, prism
            keffiyeh affogato single-origin coffee farm-to-table dolore
            adaptogen copper mug church-key. Chillwave blog 8-bit church-key
            activated charcoal forage. Aliqua eu flannel fingerstache marfa
            vinyl. Cloud bread excepteur drinking vinegar non raw denim kale
            chips fashion axe 90's DIY four dollar toast id etsy aesthetic.
            Actually intelligentsia chartreuse lyft. Cardigan ut copper mug,
            reprehenderit dolore cloud bread bushwick +1 pickled. Aesthetic
            leggings consectetur dreamcatcher, microdosing small batch paleo
            beard vice.
          </p>
          <p>
            Readymade qui beard, ea put a bird on it vape taiyaki consequat
            viral quis lorem 90's in. Magna raclette vaporware umami distillery
            esse in tacos chartreuse. Gluten-free cillum man braid readymade
            banh mi XOXO. Enamel pin craft beer coloring book, fam normcore pok
            pok quis. Brooklyn you probably haven't heard of them plaid, prism
            keffiyeh affogato single-origin coffee farm-to-table dolore
            adaptogen copper mug church-key. Chillwave blog 8-bit church-key
            activated charcoal forage. Aliqua eu flannel fingerstache marfa
            vinyl. Cloud bread excepteur drinking vinegar non raw denim kale
            chips fashion axe 90's DIY four dollar toast id etsy aesthetic.
            Actually intelligentsia chartreuse lyft. Cardigan ut copper mug,
            reprehenderit dolore cloud bread bushwick +1 pickled. Aesthetic
            leggings consectetur dreamcatcher, microdosing small batch paleo
            beard vice.
          </p>
          <p>
            Readymade qui beard, ea put a bird on it vape taiyaki consequat
            viral quis lorem 90's in. Magna raclette vaporware umami distillery
            esse in tacos chartreuse. Gluten-free cillum man braid readymade
            banh mi XOXO. Enamel pin craft beer coloring book, fam normcore pok
            pok quis. Brooklyn you probably haven't heard of them plaid, prism
            keffiyeh affogato single-origin coffee farm-to-table dolore
            adaptogen copper mug church-key. Chillwave blog 8-bit church-key
            activated charcoal forage. Aliqua eu flannel fingerstache marfa
            vinyl. Cloud bread excepteur drinking vinegar non raw denim kale
            chips fashion axe 90's DIY four dollar toast id etsy aesthetic.
            Actually intelligentsia chartreuse lyft. Cardigan ut copper mug,
            reprehenderit dolore cloud bread bushwick +1 pickled. Aesthetic
            leggings consectetur dreamcatcher, microdosing small batch paleo
            beard vice.
          </p>
          <p>
            Readymade qui beard, ea put a bird on it vape taiyaki consequat
            viral quis lorem 90's in. Magna raclette vaporware umami distillery
            esse in tacos chartreuse. Gluten-free cillum man braid readymade
            banh mi XOXO. Enamel pin craft beer coloring book, fam normcore pok
            pok quis. Brooklyn you probably haven't heard of them plaid, prism
            keffiyeh affogato single-origin coffee farm-to-table dolore
            adaptogen copper mug church-key. Chillwave blog 8-bit church-key
            activated charcoal forage. Aliqua eu flannel fingerstache marfa
            vinyl. Cloud bread excepteur drinking vinegar non raw denim kale
            chips fashion axe 90's DIY four dollar toast id etsy aesthetic.
            Actually intelligentsia chartreuse lyft. Cardigan ut copper mug,
            reprehenderit dolore cloud bread bushwick +1 pickled. Aesthetic
            leggings consectetur dreamcatcher, microdosing small batch paleo
            beard vice.
          </p>
          <Link href="/design">
            <a className="project-return">Back to Design</a>
          </Link>
        </div>
        <Pagestyle />
      </div>
    </Container>
  );
}