import React from "react";
import Layout from "../../componenets/Layout";
import "./index.css";
function Home() {
  return (
    <Layout>
      <div className="jumbotron" style={{ margin: "5rem", background: "#fff" }}>
        <h1 className="text-center">Welcome to Admin Dashboard !</h1>
        <p>
          As the digital gates swing open, we extend a virtual red carpet in
          your honor. 🎩✨ Your presence here is akin to a master conductor
          stepping onto the podium, ready to orchestrate the symphony of ones
          and zeros that power our online realm. 🌐 Welcome back to the Home
          network web page, where pixels dance, algorithms harmonize, and data
          flows like a cosmic river through cyberspace. 🚀🌌 Whether you arrive
          with a purposeful stride or a curious wander, know that this virtual
          domain awaits your every command.
        </p>
      </div>
    </Layout>
  );
}

export default Home;
