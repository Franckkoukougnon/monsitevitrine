import React from "react";
import "../style/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer(props) {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <p> &copy; 2021 Franck Koukougnon</p>
    </div>
  );
}

export default Footer;
