import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
// import "./style.css";
import UAParser from "ua-parser-js";
import React, { Fragment } from "react";
import Simple from "./Simple";
import Section from "./Section";


const CardSlider = ({ deviceType, cardData }) => {

  return (
    <Fragment>
      <Section>
        <Simple deviceType={deviceType} cardData={cardData} />
      </Section>
    </Fragment>
  );
};

CardSlider.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
export default CardSlider;
