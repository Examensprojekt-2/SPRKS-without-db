import Friends from '../../components/friends';
import { toggleFriendsNew } from '../../functions/functions';

// React Context
import { Context } from '../Store';
import React, { useContext } from 'react';

import Hamburger from '../../components/hamburger';
import NewFriends from '../../components/newFriends';
import CardSlider from '../../components/slider/cardSlider';

import { useRouter } from 'next/router';
import { getGames, getUserById } from '../api/users';
import { getLikes, getLikesByGameId, getMostLikedGames, getFriendsLikes } from '../api/likes';
import { getFriends } from '../api/friends';
import { getLike } from '../api/getLike';

export async function getServerSideProps(context) {
  const userById = await getUserById(parseInt(context.params?.user));
  const likes = await getLikes();
  // returns an array of game objects.
  const games = await getGames();
  const friendsList = await getFriends(context.params?.user);
  const mostLiked = await getMostLikedGames();
  const likesByFriends = await getFriendsLikes(context.params?.user);

  const gamesArray = [];
  const mostlikedArray = [];
  const likesByFriendsArray = [];

  // loop through games, and call getLikesByGameId with the game id for each.
  for (let i = 0; i < games.length; i++) {
    const gameLikes = await getLikesByGameId(games[i].Id);
    let likeListUser = await getLike(context.params?.user, games[i].Id);
    let likeOrNot= false;
    likeListUser.length < 1 ? likeOrNot = false : likeOrNot = true;
    let newGameObject = {
      Id: games[i].Id,
      Name: games[i].name,
      Genre: games[i].genre,
      Image: games[i].Image,
      Description: games[i].Description,
      Likes: gameLikes.length,
      UserLike: likeOrNot,
    };
    gamesArray.push(newGameObject);
  }
  
  for (let i = 0; i < mostLiked.length; i++) {
    const gameLikes = await getLikesByGameId(mostLiked[i].gameId);
    let likeListUser = await getLike(context.params?.user, mostLiked[i].gameId);
    let likeOrNot= false;
    likeListUser.length < 1 ? likeOrNot = false : likeOrNot = true;
    let newGameObject = {
      Id: mostLiked[i].gameId,
      Name: mostLiked[i].name,
      Genre: mostLiked[i].genre,
      Image: mostLiked[i].Image,
      Description: mostLiked[i].Description,
      Likes: gameLikes.length,
      UserLike: likeOrNot,
    };
    mostlikedArray.push(newGameObject);
  }

  for (let i = 0; i < likesByFriends.length; i++) {
    const gameLikes = await getLikesByGameId(likesByFriends[i].gameId);
    let likeListUser = await getLike(context.params?.user, likesByFriends[i].gameId);
    let likeOrNot= false;
    likeListUser.length < 1 ? likeOrNot = false : likeOrNot = true;
    let newGameObject = {
      Id: likesByFriends[i].gameId,
      Name: likesByFriends[i].name,
      Genre: likesByFriends[i].genre,
      Image: likesByFriends[i].Image,
      Description: likesByFriends[i].Description,
      Likes: gameLikes.length,
      UserLike: likeOrNot,
    };
    likesByFriendsArray.push(newGameObject);
  }

  return {
    props: {
      userById,
      gamesArray,
      friendsList,
      mostlikedArray,
      likesByFriendsArray,
    },
  };
}

export default function User({
  userById,
  gamesArray,
  friendsList,
  deviceType,
  mostlikedArray,
  likesByFriendsArray,
}) {
  const router = useRouter();
  const { user } = router.query;
  
  const [activeUser, setActiveUser] = useContext(Context);
  setActiveUser(userById[0]);

  return (
    // NAVBAR, PROFILE, FRIENDS
    <div className='bg-black'>
      <div className='text-white'>
        {userById[0].name} + password {userById[0].password}
        {/* {setState(...state) } */}
      </div>
      <div className='fixed top-0 z-50 w-full text-white body-font bg-gradient-to-b from-black'>
        <div className='flex flex-col flex-wrap items-center p-5 px-16 md:flex-row'>
          <a className='flex items-center mb-4 font-medium text-white title-font md:mb-0'>
            <img src='/sprks-logo.png' className='w-24' alt=''></img>
          </a>
          <ul className='flex-row hidden w-1/2 ml-12 space-x-3 text-sm lg:flex'>
            <li className='font-semibold'>Home</li>
            <li>Games</li>
            <li>Friends</li>
            <li>Popular</li>
          </ul>
          <nav className='flex-wrap items-center justify-center hidden space-x-6 text-base font-semibold md:ml-auto lg:flex'>
            <svg
              className='w-6 h-6 font-bold'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              ></path>
            </svg>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
              ></path>
            </svg>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z'></path>
            </svg>
            <button
              onClick={() => toggleFriendsNew()}
              className='flex items-center'
            >
              <img src='/profile-logo.png' alt='' className='w-9 h-1/2'></img>
            </button>
            <Hamburger />
          </nav>
        </div>
      </div>
      <div className='relative w-full h-screen mt-16'>
        <div className='absolute z-10 w-full h-1/4 '>
          <div className='flex items-center justify-start h-full px-16'>
            <div className='flex-col hidden w-3/12 py-12 space-y-4 lg:flex '>
              <div className='flex flex-row w-full space-x-4'></div>
            </div>

            <div
              id='newFriends'
              className='flex-col float-right w-3/12 m-auto mt-0 mr-0 space-y-4'
              style={{ display: 'none' }}
            >
              <p>he</p>
              <NewFriends user={user} />
            </div>
            <div
              id='friends'
              className='flex-col float-right w-3/12 m-auto mt-0 mr-0 space-y-4'
              style={{ display: 'none' }}
            >
              <Friends userById={userById} user={user} friendsList={friendsList} />
            </div>
          </div>
        </div>

        {/* JORDGLOBEN */}
          <div>
            <div className='flex items-center justify-start h-full px-16'>
              <div className='flex-col hidden w-3/12 py-12 space-y-4 lg:flex '>
                <div className='flex flex-row w-full space-x-4'></div>
              </div>
            </div>
          </div>
        +
        <div className='absolute bottom-0 w-full h-64 bg-gradient-to-t from-black'></div>
        <div className='absolute bottom-0 w-full h-64 bg-gradient-to-t from-black'></div>
        <div className='object-cover w-1/2 m-auto h-1/2'>
          <video className='object-cover h-full md:w-auto' autoPlay muted loop>
            <source
              id='video'
              className='object-contain h-screen'
              src='https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4'
              height='10'
              type='video/mp4'
            ></source>
          </video>
        </div>
        <div className='container mx-auto'>
          <div className='pb-12'>
            <CardSlider
              listType={'All games'}
              user={user}
              games={gamesArray || []}
            />
          </div>
          <div className='pb-12'>
            <CardSlider
              listType={'Popular games'}
              user={user}
              games={mostlikedArray || []}
            />
          </div>
          <div className='pb-12'>
            <CardSlider
              listType={'Your friends favourite games'}
              user={user}
              games={likesByFriendsArray || []}
            />
          </div>
        </div>
        <script
          src='https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js'
          defer
        ></script>
      </div>
    </div>
  );
}
