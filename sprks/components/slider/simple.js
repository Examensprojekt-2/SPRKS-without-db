import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import Card from '../../components/card';

// import LikedGames from '../../components/likedGames';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType, cardData }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {cardData.slice(0, 5).map(cardData => {
        return (
          <Card 
            header={cardData.header} text={cardData.text} 
            likes={cardData.likes} picture={cardData.picture} 
            tags={cardData.tags}
          />
        );
      })}
    </Carousel>
  );
};

export default Simple;
