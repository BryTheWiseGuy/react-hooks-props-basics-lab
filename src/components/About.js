import React from "react";
import Links from "./Links";
import user from "../data/user.js";

function About(props) {
  function testBio() {
    if (user.bio) {
      return <p>{props.bio}</p>;
    } else if (user.bio === "") {
      return null;
    } else if (!user.bio) {
      return null;
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      { testBio() }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default About;
