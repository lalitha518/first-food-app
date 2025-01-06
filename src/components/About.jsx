import React from "react";
import User from "./User";
import UserClass from "./UserClass";
  
  const About = () => {
    return (
      <div className="about">
        <h1>this is about us page</h1>
        <User name = {"Lalitha bai(functional component)"} location={"hyd"}
          contact ={"lalitha@gmail.com"}
        />
      </div>
    );
  }
  
  export default About;
  