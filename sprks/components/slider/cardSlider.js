import 'semantic-ui-css/semantic.min.css';
import 'react-multi-carousel/lib/styles.css';
// import "./style.css";
import UAParser from 'ua-parser-js';
import React, { Fragment } from 'react';
import Simple from './simple';
import Section from './section';
import {
  getFriendsPlaying,
  getPopularGames,
  getRecommendedGames,
} from '../../functions/functions';

const CardSlider = ({ listType, user, games, deviceType }) => {
  
  // TODO - Fetch from db

  // function getRightList(type) {
  //   switch (type) {
  //     case 'allGames':
  //       let recommended = true;
  //       return recommended;
     
  //     case 'popularGames':
  //       let popularGames = true;
  //       return popularGames;
  //     default:
  //       break;
  //   }
  // }

  // let currentList = getRightList(listType);

  return (
    <Fragment>
      <Section>
        {/* Show list of games if currentlist is loaded */}
        <Simple deviceType={deviceType} games={games} user={user} listType={listType} />
      </Section>
    </Fragment>
  );
};

CardSlider.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || 'desktop';
  return { deviceType };
};
export default CardSlider;
