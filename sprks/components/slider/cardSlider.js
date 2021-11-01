import 'semantic-ui-css/semantic.min.css';
import 'react-multi-carousel/lib/styles.css';
// import "./style.css";
import UAParser from 'ua-parser-js';
import React, { Fragment } from 'react';
import Simple from './Simple';
import Section from './Section';
import {
  getFriendsPlaying,
  getPopularGames,
  getRecommendedGames,
} from '../../functions/functions';

const CardSlider = ({ listType, deviceType }) => {
  function getRightList(type) {
    switch (type) {
      case 'recommended':
        let recommended = getRecommendedGames();
        return recommended;
      case 'friendsPlaying':
        let friendsPlaying = getFriendsPlaying();
        return friendsPlaying;
      case 'popularGames':
        let popularGames = getPopularGames();
        return popularGames;
      default:
        break;
    }
  }

  let currentList = getRightList(listType);

  return (
    <Fragment>
      <Section>
        <Simple currentList={currentList} deviceType={deviceType} />
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
