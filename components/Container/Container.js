import Menu from "../Menu/Menu";
import Head from "next/head";

const Container = props => (
  <div className="container">
    <Head>
      <title>It just works</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Menu />
    {props.children}
    <style jsx global>{`
      :root {
        font-size: 2vh;
      }

      #__next {
        margin: 0;
        padding: 0;
      }

      body {
        margin: 0;
        padding: 0;
        overflow: hidden;
      }

      h1,
      h2,
      h3,
      h4 {
        font-family: "Raleway";
        display: table;
      }

      h4 {
        margin-bottom: 0.45rem;
        color: blue;
      }

      p,
      a {
        font-family: "Raleway";
      }

      ul {
        font-family: "Raleway";
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
        margin-left: 1rem;
        padding-right: 1.5rem;
        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: black white;
      }

      .page::-webkit-scrollbar {
        width: 8px;
      }

      .page::-webkit-scrollbar-track {
        background: transparent;
      }

      .page::-webkit-scrollbar-thumb {
        background-color: black;
        border: none;
      }

      .container {
        display: flex;
        flex-direction: row;
        height: 30rem;
        width: 1024px;
        background-color: white;
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
        border: solid 3px black;
      }

      @media only screen and (max-width: 1024px) {
        .page {
          margin-left: 0;
        }

        .container {
          height: 100vh;
          width: 100vw;
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
