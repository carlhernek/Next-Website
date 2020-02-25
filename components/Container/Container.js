import Menu from "../Menu/Menu";
import Head from "next/head";

const Container = props => (
  <div className="container">
    <Head>
      <title>It just works</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:500,700|Roboto+Mono&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Menu />
    {props.children}
    <style jsx global>{`
      :root {
        font-size: 2vh;
        --font-color: #1F2121;
        --font-color-inverted: #F3F3F3;
        --font-color-opacity: #f3f3f385;
        --accent-color: #BD0000;
        --link-color: #3f77f7;
        --header-font: "Montserrat";
        --text-font:  "Roboto-mono";
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

      h1 {
        font-family: "Montserrat";
        font-weight: 700;
        display: table;
      }

      h2,
      h3,
      h4 {
        font-family: var(--header-font);
        font-weight: 500;
        display: table;
        margin: 0.8rem 0 0.3rem 0;
      }

      h4 {
        margin-bottom: 0.45rem;
      }

      button,
      p,
      a {
        font-family: var(--text-font);
        
      }

      ul {
        font-family: var(--text-font);
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
        margin-left 1rem;
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
        height: 70vh;
        width: 1024px;
        overflow: hidden;
      }

      .container * {
        border: solid 3px transparent;
      }

      .no-border {
        border: none;
      }

      .no-margin-top {
        margin-top: 0;
      }

      :focus {
        border: solid 3px var(--font-color);
      }

      @media only screen and (max-width: 1024px) {
        .page {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
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
    `}</style>
  </div>
);

export default Container;
