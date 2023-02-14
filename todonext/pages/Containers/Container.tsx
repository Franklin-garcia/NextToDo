import Navbar from "../Components/Navbar/navbar";
import Head from "next/head";
const Container = (props: any) => (
  <div>
    <Head>
      <title>ToDoList</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container-fluid">{props.children}</div>
  </div>
);

export default Container;
