import React from "react";
import Head from "next/head";
import Container from "./Containers/Container";


const Home = () => {
  return (
    <>
      <Head>
        <title>ToDoList</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
        />
      </Head>
        <Container />
    </>
  );
};

export default Home;
