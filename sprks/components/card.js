import axios from 'axios';
// React Context
import { Context } from '../pages/Store';
import React, { useContext, useState } from 'react';


function Card({ picture, text, likes, name, genre, gameId, hasUserLiked }) {
  const [activeUser, setActiveUser] = useContext(Context);
  const [gameLikes, setGameLikes] = useState(likes);
  const [userLike, setUserLike] = useState(hasUserLiked);
  
  // When clicking the like button
  async function addLike() {
    try {
      await axios.post('/api/addLike', {
        userId: parseInt(activeUser.Id),
        gameId: gameId,
      });
    } catch (err) {
      console.error('Error', err);
    }
    // WIP - Direct updates the likes on the site.
  }
  async function removeLike(userLike){
    try {
      await axios.delete('/api/removeLike',{
        userLike: userLike,
      })
    }catch (err){
      console.error('error', err)
    }
  }

  return (
    <div class='mx-auto md:w-auto md:max-w-5xl pb-4 bg-transparent max-h-screen shadow-sm flex-row rounded-t-lg relative ml-3 mr-3'>
      <img
        class='object-cover w-full h-52 rounded-t-lg'
        src={picture}
        alt='Mountain'
      />
      <div class='px-6 py-4'>
        <div class='font-bold text-xl mb-2 text-gray-200'>{name}</div>
        <div class='font-bold text-xl mb-2 text-gray-200'>{hasUserLiked}</div>
        {text.length > 50 ? (
          <p class='text-gray-300 text-base'>{text.slice(0, 47)}...</p>
        ) : (
          <p class='text-gray-300 text-base'>{text}</p>
        )}
      </div>
      <div class='text-center'>
        <button
          class='bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full'
          onClick={() => {
            if (userLike == true){
              setGameLikes(gameLikes -1);
              removeLike(userLike)
            }
            else {
              setGameLikes(gameLikes +1);
              addLike();

            }
            setUserLike(!userLike);
          }}
        >
          
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            viewBox='0 0 24 24'
            stroke='currentColor'
            fill={userLike ? 'red' : 'none'}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            />
          </svg>
        </button>

        {/* If likes isn't null, write num of likes, else write 0 likes */}
        {gameLikes != null ? (
          <p class='text-center text-gray-200'>{gameLikes} likes</p>
        ) : (
          <p class='text-center text-gray-200'>0 likes</p>
        )}
      </div>

      <div class='px-6 pt-4 pb-2 text-center'>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {genre}
        </span>
      </div>
    </div>
  );
}

export default Card;
