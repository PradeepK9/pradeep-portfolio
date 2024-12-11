import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./Pradeep Jaiswal - Resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <span>
          Proficient in building modern and responsive user interfaces using
          <br /> <b>React.js, Redux, HTML, CSS, Javascript</b> and other
          frontend tools.
          {/* <br /> */}
          <br />I also possess knowledge of backend technologies such as Node.js
          and Express.js
          <br />
          <br />
          Here are the skills that showcase my commitment to delivering <br />
          comprehensive and well-rounded solutions:👉🏻
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "19rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Tools"}
            detail={
              "Jira, Git, GitHub, VS Code, Agile Methodology, Bit Bucket, etc."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-8rem", top: "12rem" }}
          whileInView={{ left: "-2rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Frontend Technologies"}
            detail={
              "HTML, CSS, JavaScript, React.js, Redux, Unit testing, Jest, TailwindCSS, Material UI, Bootstrap, EcmaScript"
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "18rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Backend Technologies"}
            detail={"Node.js, Express, MongoDb, MySQL, Rest APIs"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
