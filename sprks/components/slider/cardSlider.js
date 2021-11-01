import 'semantic-ui-css/semantic.min.css';
import 'react-multi-carousel/lib/styles.css';
// import "./style.css";
import UAParser from 'ua-parser-js';
import React, { Fragment } from 'react';
import Simple from './Simple';
import Section from './Section';

const CardSlider = ({ typeOfCard, deviceType }) => {
  function getRightList(type) {
    switch (type) {
      case 'recommended':
        let recommended = [
          {
            Image:
              'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            Title: 'Test',
            Description: 'test beskriving',
          },
          {
            Image:
              'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            Title: 'Test',
            Description: 'test beskriving',
          },
          {
            Image:
              'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            Title: 'Test',
            Description: 'test beskriving',
          },
          {
            Image:
              'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            Title: 'Test',
            Description: 'test beskriving',
          },
          {
            Image:
              'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            Title: 'Test',
            Description: 'test beskriving',
          },
          {
            Image:
              'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            Title: 'Test',
            Description: 'test beskriving',
          },
        ];
        return recommended;
        break;

      default:
        break;
    }
  }

  let currentList = getRightList(typeOfCard);

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
