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

      body {
        margin: 0;
        padding: 0;
        background-color: rgb(243, 243, 243);
      }

      h1 {
        font-family: "Arial";
      }

      #__next {
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }

      .container {
        display: flex;
        height: 30em;
        width: 1024px;
        background-color: magenta;
      }

      @media only screen and (max-width: 1024px) {
        .container {
          height: 100vh;
          width: 100vw;
          background-color: green;
        }
      }
    `}</style>
  </div>
);

export default Container;
