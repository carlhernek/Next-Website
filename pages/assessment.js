import Container from "../components/Container/Container";
import Pagestyle from "../components/Pagestyle/Pagestyle";

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
              Hopefully it was alright to navigate to an external website for
              this assessment but I was curious to see if I could pull it off
              "blog-post" style.
            </p>
            <p>
              Other than being the platform for this particular assessment this
              website usually serves as my personal portfolio. I built the
              scaffolding for the site earlier this year and figured that since
              I built it to be easily expanded upon I might just as well
              temporarily expand it to host my assessment.
            </p>
            <p>
              Should you dear assessor, also be a developer and/or curious about
              the code for this or any of the projects below please look for the
              project description in the frontend section of this website or
              find it on my{" "}
              <a target="_blank" href="https://github.com/carlhernek">
                Github.
              </a>
            </p>
          </div>
          <h2 className="h2-styled">K6</h2>
          <p className="italic">- Create effective frontend code.</p>
          <div className="project-card no-border">
            <p>
              To me effective frontend code is not only code that produces a
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
              <li>
                4. Responsible use of dependencies with support and security in
                mind.
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
              very website. It is built to scale well on every type of device
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
              project page utilize this on both static and moving graphics. As
              well as the ones included for C3 and C4.
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
          <div className="project-card no-border">
            <p>
              A good example of where I together with a group applied these
              skills was the resilience project timeline concept. A live demo of
              the concept website can be found{" "}
              <a
                href="https://reciliencethinkingtimeline.netlify.app/"
                target="_blank"
              >
                here.
              </a>{" "}
              Note that the mobile version of the concept is the most complete.
            </p>
            <p>
              The customer was a large organisation wanting to give their users
              an option to receive an overview of resilience project over the
              years. Additionally they wished to be able to manage the contents
              of the timeline.
            </p>
            <p>
              I created a simple mock database using Google Sheets and an API
              service and hooked it up to our application to show them how they
              could easliy manage such a site using technologies they were
              already familiar with.
            </p>
          </div>

          <h2 className="h2-styled">S4</h2>
          <p className="italic">
            - Execution of design and technological development requires a
            student to handle complex challenges at this level.
          </p>
          <div className="project-card no-border">
            <p>
              Complex challenges require us as developers to break it down into
              manageable pieces to create feasible project structures and agile
              development backlogs.
            </p>
            <p>
              But breaking it down is also only half the work, you need to be
              able to communicate it within the development teams as well as
              cross disciplines.
            </p>
            <p>
              Throughout the semester I have been a part of different solutions
              to do this, most being through some sort of{" "}
              <a
                href="https://drive.google.com/file/d/1g-ilsONmd5MCg_q2hVqCGmL6cv5_9T8R/view?usp=sharing"
                target="_blank"
              >
                flowchart
              </a>{" "}
              or feature map like the one presented later for C3 & C4.
            </p>
            <p>
              I feel that the Hyper toolbox should get an honourable mention for
              dealing with challenges on a people level, which means we're
              equipped to deal with those as well as technical challenges,
              ultimately reducing points of friction in development.
            </p>
          </div>
          <h2 className="h2-styled">S5</h2>
          <p className="italic">
            - As a developer, one should have skills in programming, publishing
            and debugging of front end code and having the ability to learn new
            methods, programming languages and follow technological
            developments.{" "}
          </p>
          <div className="project-card no-border">
            <p>
              This very website is the perfect example of how I applied this
              during this semester. As stated in the intro, this website uses a
              technology called Next.js and at the time of making this we had no
              resources from Hyper to teach us how to use Next, though we did
              get a course later on in the semester.
            </p>
            <p>
              So during the a11y module earlier this year I wondered if I could
              apply everything we learned in the module at school and apply it
              to a new technology I had never used before and needed to
              self-learn.
            </p>
            <p>
              I was already curious of SSR (server-side rendering) and had
              researched some of the big players in the field, Next, Gatsby etc.
              The reason I went with Next was because Gatsby seemed to have
              better inherent support for accessibility and thus Next should
              provide a better learning experience.
            </p>
            <p>
              An example of a bug I encountered during publishing was finding
              out my webhost did not provide a node server which is necessary
              for the server-side rendering to take place. I solved this by
              hosting it on Netlify which conveniently also allows me to publish
              the site directly from git.
            </p>
          </div>
          <h2 className="h2-styled">S6</h2>
          <p className="italic">
            - Skills in problem-solving and communication skills when working in
            a project with different disciplines both internally and with
            consultants. This can be for example UX designers, backend
            developers, testers, designers and product owners.{" "}
          </p>
          <div className="project-card no-border">
            <p>
              Again, in the very same resilience project previously mentioned in
              S3 we had the necessity to communicate within the team as well as
              to communicate with the product owners during development.{" "}
            </p>
            <p>
              Since we went full circle with doing the UX, Design and
              Development of the website we spent plenty of time in an interface
              prototyping tool called Figma. An example of our Figma workspace
              for this project can be found{" "}
              <a
                href="https://www.figma.com/file/5hBxeOJRp8rcd5gHvQpXzx/Code-and-Collaborate?node-id=110%3A0"
                target="_blank"
              >
                here.
              </a>
            </p>
            <p>
              Since I was responsible for the simple backend server we made the
              flow of communication here was very direct. However It gave me
              insight in how a backend developer might want specifications
              communicated. For example, I found that designing the database was
              much easier if I knew what the API response should look like.{" "}
            </p>
          </div>
          <h2 className="h2-styled">C3 & C4</h2>
          <p className="italic">
            - Independently be able to work methodically and flexibly in
            development projects and sub-processes.
          </p>
          <p className="italic">
            - Independently monitor work in teams and complete proposed
            projects.
          </p>
          <div className="project-card no-border">
            <p>
              I'm going to talk about both competences at the same time as I'll
              be using the same project to show both.{" "}
            </p>{" "}
            <p>
              The brief in this project was to use a couple of publicly
              available APIs related to train traffic and create concepts of how
              these could be used in new and innovative purposes.{" "}
            </p>
            <p>
              In this project we divided the responsibilities so that each
              person were individually responsible for their own segment, mine
              being the development segment.
            </p>
            <p>
              Our application concept accepts the input of any metro station in
              the Stockholm area to recieve the current delays at that station.
              The app then provides the user suggestions of what the user could
              do nearby based on the time of the current delay.
            </p>
            <p>
              For proof of concept purposes the delays are exaggerated to give a
              more plausible scenario when dealing with national train traffic
              and not the metro.
            </p>
            <img
              className="project-banner"
              alt="Analog feature mapping session"
              src="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/assessment/IMG_20200122_112746_xripyr.jpg"
              srcSet="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_256/v1582198505/Img/assessment/IMG_20200122_112746_xripyr.jpg 256w,
          https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/assessment/IMG_20200122_112746_xripyr.jpg 512w,
          https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_1024/v1582198505/Website/Img/assessment/IMG_20200122_112746_xripyr.jpg 1024w"
            ></img>
            <p>
              The above image is directly related to how I handled C4 in the
              project: It shows me (on the right) hosting an analogue feature
              mapping session in order to create a backlog for the development
              part of this project.
            </p>
            <div className="column-card no border">
              <img
                className="inline-img"
                alt="Notion planning gif"
                src="https://res.cloudinary.com/carlhernek/image/upload/fl_lossy/v1582198505/Website/Img/assessment/notion_ds_teukpk.gif"
              ></img>
              <div className="no-border">
                <p>
                  This feature map laid the groundwork for the backlog from
                  which individual and group objectives were derived, as shown
                  in this notion gif.
                </p>
                <p>
                  Notion is a very useful tool for hosting calendars, links,
                  notes, kanban backlogs and other team communication
                  necessities.
                </p>
              </div>
            </div>
            <img
              className="project-banner"
              alt="Collaborative coding session, mob programming"
              src="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/assessment/IMG_5096_do8nus.heic"
              srcSet="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_256/v1582198505/Img/assessment/IMG_5096_do8nus.heic 256w,
          https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/assessment/IMG_5096_do8nus.heic 512w,
          https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_1024/v1582198505/Website/Img/assessment/IMG_5096_do8nus.heic 1024w"
            ></img>
            <img
              className="project-banner"
              alt="Solo programming in group"
              src="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/assessment/IMG_0077_zzw6fu.jpg"
              srcSet="https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_256/v1582198505/Img/assessment/IMG_0077_zzw6fu.jpg 256w,
          https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_512/v1582198505/Website/Img/assessment/IMG_0077_zzw6fu.jpg 512w,
          https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_auto,w_1024/v1582198505/Website/Img/assessment/IMG_0077_zzw6fu.jpg 1024w"
            ></img>
            <p>
              The remaining two images above show how we dynamically changed the
              development setting throughout the project.
            </p>
            <p>
              The first picture shows me leading a discussion during a mob
              programming session. A type of programming where one person writes
              the code and the other members of the group discuss and decide
              what is to be written.
            </p>
            <p>
              The second picture shows a different type of setting where we,
              although working from the same location as to be able to use
              eachother as resources, individually work on the project or
              flexibly switch to working in pairs / small groups.
            </p>
            <div className="column-card no border">
              <img
                className="inline-img"
                alt="Application demo gif"
                src="https://res.cloudinary.com/carlhernek/image/upload/fl_lossy/v1582198505/Website/Img/assessment/might_as_well_app_ds_kfygl6.gif"
              ></img>
              <div className="no-border">
                <p>Bonus demo gif of the app in action!</p>
                <p>
                  from the project description: Group project at Hyper Island.
                  Concept app built with React which tells you things you can do
                  in the vicinity of a metro station if there are delays on your
                  metro. Most of this project was mob-coded.{" "}
                  <ul>
                    <li>Technologies Used</li>
                    <li>1. React</li>
                    <li>2. Google Places API</li>
                    <li>3. SL Platsuppslag API</li>
                    <li>4. SL Realtidsinfo API</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <h2 className="h2-styled">Thank you!</h2>
        </div>
        <Pagestyle />
      </div>
    </Container>
  );
}
