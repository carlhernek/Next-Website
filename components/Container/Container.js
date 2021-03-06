import Menu from "../Menu/Menu";
import Head from "next/head";

const Container = (props) => (
  <div className="container">
    <Head>
      <title>Carl Hernek - Frontend Dev & Designer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Welcome to Carl Hernek's portfolio website. Industrial Designer, UX Designer and Frontend Developer."
      />
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata|Montserrat:500,600,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Menu />
    {props.children}
    <style jsx global>{`
      :root {
        font-size: 2vh;
        --font-color: #1f2121;
        --font-color-inverted: #f3f3f3;
        --font-color-opacity: #f5f5f5d8;
        --font-color-opacity-alt: #4a4a4a8e;
        --accent-color-r: hsl(0, 93%, 73%);
        --accent-color-r-opacity: hsla(0, 93%, 73%, 0.5);
        --accent-color-b: hsla(177, 100%, 50%, 0.2);
        --accent-color-o: hsla(39, 100%, 69%, 0.7);
        --accent-color-g: hsla(80, 77%, 67%, 0.2);
        --link-color: #3f77f7;
      }

      #__next {
        margin: 0;
        padding: 0;
      }

      body {
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
        overflow: hidden;
        color: var(--font-color);

        background: radial-gradient(
            circle at 69% 86%,
            rgba(165, 165, 165, 0.06) 0%,
            rgba(165, 165, 165, 0.06) 25%,
            rgba(193, 193, 193, 0.06) 25%,
            rgba(193, 193, 193, 0.06) 50%,
            rgba(221, 221, 221, 0.06) 50%,
            rgba(221, 221, 221, 0.06) 75%,
            rgba(249, 249, 249, 0.06) 75%,
            rgba(249, 249, 249, 0.06) 100%
          ),
          radial-gradient(
            circle at 49% 76%,
            rgba(129, 129, 129, 0.06) 0%,
            rgba(129, 129, 129, 0.06) 25%,
            rgba(164, 164, 164, 0.06) 25%,
            rgba(164, 164, 164, 0.06) 50%,
            rgba(200, 200, 200, 0.06) 50%,
            rgba(200, 200, 200, 0.06) 75%,
            rgba(235, 235, 235, 0.06) 75%,
            rgba(235, 235, 235, 0.06) 100%
          ),
          radial-gradient(
            circle at 22% 64%,
            rgba(173, 173, 173, 0.06) 0%,
            rgba(173, 173, 173, 0.06) 25%,
            rgba(119, 119, 119, 0.06) 25%,
            rgba(119, 119, 119, 0.06) 50%,
            rgba(64, 64, 64, 0.06) 50%,
            rgba(64, 64, 64, 0.06) 75%,
            rgba(10, 10, 10, 0.06) 75%,
            rgba(10, 10, 10, 0.06) 100%
          ),
          linear-gradient(307deg, rgb(255, 255, 255), rgb(255, 255, 255));
      }

      h1,
      h2 {
        font-family: "Montserrat";
        font-weight: 700;
        display: table;
      }

      h3,
      h4 {
        font-family: "Montserrat";
        font-weight: 600;
        display: table;
        margin: 1.2rem 0 0.3rem 0;
      }

      h4 {
        font-weight: 500;
        margin-bottom: 0.45rem;
      }

      button,
      p,
      a {
        font-family: "Inconsolata";
      }

      ul {
        font-family: "Inconsolata";
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      #__next {
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }

      .page {
        margin-left: 2rem;
        padding: 0 1.5rem 0 0;
        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--font-color) transparent;
      }

      .page::-webkit-scrollbar {
        width: 8px;
      }

      .page::-webkit-scrollbar-track {
        background: transparent;
      }

      .page::-webkit-scrollbar-thumb {
        background-color: var(--font-color);
        border: none;
      }

      .container {
        display: flex;
        flex-direction: row;
        height: 72vh;
        width: 1024px;
        overflow: hidden;
      }

      .container * {
        border: solid 3px transparent;
      }

      .no-border {
        border: none;
      }

      .white-border {
        border: solid 3px white;
      }

      .no-margin-top {
        margin-top: 0;
      }

      .lone-child-wrap {
        margin: 0 0 0 0.25rem;
      }

      .relative {
        position: relative;
      }

      .italic {
        font-style: italic;
      }

      :focus {
        border: solid 3px var(--font-color);
      }

      @media only screen and (max-width: 1024px) {
        .page {
          padding: 0 4.5rem 0 1.5rem;
          margin: 0;
        }

        .container {
          height: 100vh;
          width: 100vw;
          position: fixed;
        }
      }

      @media only screen and (max-width: 1024px) and (orientation: landscape) {
        :root {
          font-size: 2vw;
        }
      }

      @media only screen and (min-width: 1280px) {
        :root {
          font-size: 1.7vh;
        }
      }

      @media only screen and (min-width: 2160px) {
        :root {
          font-size: 1.6vh;
        }

        .container {
          width: calc(500px + 35vw);
        }
      }
    `}</style>
  </div>
);

export default Container;
