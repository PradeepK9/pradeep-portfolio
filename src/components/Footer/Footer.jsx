import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>
          Email me :
          <a
            href="mailto:pradeepjaiswalsidd@gmail.com"
            style={{ color: "#6f35f1", textDecoration: "none" }}
          >
            <span> pradeepjaiswalsidd@gmail.com</span>
          </a>
        </span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/_pradeep__jaiswal?igsh=ZGNjOWZkYTE3MQ=="
            target="blank"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/PradeepK9" target="blank">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.instagram.com/_pradeep__jaiswal?igsh=ZGNjOWZkYTE3MQ=="
            target="blank"
          >
            <Facebook color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
