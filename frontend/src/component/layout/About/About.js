import React from 'react'
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
    const visitInstagram = () => {
        window.location = "https://instagram.com/its_me_amisha18";
      };
  return (
    <div className="aboutSection">
    <div></div>
    <div className="aboutSectionGradient"></div>
    <div className="aboutSectionContainer">
      <Typography component="h1">About Us</Typography>

<div>
<div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/daznjsnp4/image/upload/v1666711558/avatars/InShot_20200612_235251553_2_xsmm8c.jpg"
              alt="Founder"
            />
            <Typography>Amisha Kumari</Typography>
            <Button  color="primary" onClick={visitInstagram}>
              Visit Instagram
            </Button>
            <span>
              This is a MERN stack Ecommerce project using React and Node Js
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a>
              <YouTubeIcon className="youtubeSvgIcon" />
              </a>

            <a href="https://instagram.com/its_me_amisha18" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
          </div>

</div>
</div>
  )
}

export default About
