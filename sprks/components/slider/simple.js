import Carousel from 'react-multi-carousel';
import Card from '../card'

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
const Simple = ({ listType, deviceType, games, user }) => {
  console.log('mest gilllade' + games);
  console.log('mest gilllade' + listType);
  let popularGames = false
  let allGames = false
  let friendsLike = false
  if (listType == 'Popular games' ) {
    popularGames = true; 
  } else if (listType == 'All games' ){
    allGames = true;
  } else if (listType == 'Your friends favourite games'){
    friendsLike = true;
  }
  return (
    <div>
      <h1 className='text-white'>{listType}</h1>
      <Carousel
        ssr
        partialVisbile
        deviceType={deviceType}
        itemClass='image-item'
        responsive={responsive}
        itemAriaLabel = 'hej'
      >
        {allGames && (

            games.map((obj) => {
              return (
                <div>
                  <div className='container pb-4'>
                    <Card
                      picture={obj.Image}
                      text={obj.Description}
                      likes={obj.Likes}
                      name={obj.Name}
                      genre={obj.Genre}
                      gameId={obj.Id}
                      user={user}
                      hasUserLiked={obj.UserLike}
                    />
                  </div>{' '}
                </div>
              );
            })
        )}
        {popularGames && (
          games.map((obj) => {
            {console.log(obj)}
            return (
              <div>
                <div className='container pb-4'>
                  <Card
                    picture={obj.Image}
                    text={obj.Description}
                    likes={obj.count}
                    name={obj.Name}
                    genre={obj.Genre}
                    gameId={obj.Id}
                    user={user}
                    hasUserLiked={obj.UserLike}
                  />
                </div>{' '}
              </div>
            );
          })
      )}

    {friendsLike && (

    games.map((obj) => {
      {console.log(obj)}
      return (
        <div>
          <div className='container pb-4'>
            <Card
              picture={obj.Image}
              text={obj.Description}
              likes={obj.Likes}
              name={obj.Name}
              genre={obj.Genre}
              gameId={obj.Id}
              user={user}
            />
          </div>{' '}
        </div>
      );
    })
    )}

        )
      </Carousel>
    </div>
  );
};

export default Simple;
