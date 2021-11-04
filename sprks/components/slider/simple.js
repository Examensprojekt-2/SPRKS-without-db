import Carousel from 'react-multi-carousel';
import Card from '../card';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ currentList, deviceType }) => {
  return (
    <div>
      <h1 className='text-white'>{currentList[0].listTitle}</h1>
      <Carousel
        ssr
        partialVisbile
        deviceType={deviceType}
        itemClass='image-item'
        responsive={responsive}
      >
        {currentList.map((obj) => {
          return (
            <div>
              <div className='container'>
                <Card picture={obj.Image} text={obj.Description} likes={obj.Likes} title= {obj.Title} tags={obj.Tags}/>
              </div>{' '}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Simple;
