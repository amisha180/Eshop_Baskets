import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:amishakumari47939@gmail.com">
        <Button>Contact: amishakumari47939@gmail</Button>
      </a>
    </div>
  );
};

export default Contact;