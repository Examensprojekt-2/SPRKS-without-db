import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Friends from '../components/friends';
import { toggleFriendsNew } from '../functions/functions';
import Card from '../components/card';

import Hamburger from '../components/hamburger';
import NewFriends from '../components/newFriends';
import userProfile from '../components/userProfile';
import CardSlider from '../components/slider/cardSlider';


export default function Home({ deviceType }) {
  return (
    <div className='bg-black'>
      <div className='fixed top-0 z-50 w-full text-white bg-black body-font'>
        <div className='flex flex-col flex-wrap items-center p-5 px-16 md:flex-row'>
          <a className='flex items-center mb-4 font-medium text-white title-font md:mb-0'>
            <img src='/sprks-logo.png' className='w-24' alt=''></img>
          </a>
          <div className='flex justify-center w-screen h-screen text-center text-white bg-black'>
            <button className='mr-4'>
              <a href='http://localhost:3000/loggedIn/Marcus'>
                <img
                  class='inline object-cover w-32 h-32 mr-2 rounded-full'
                  src='https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
                  alt='Profile image'
                />
                <h3>Marcus</h3>
              </a>
            </button>
            <button className='mr-4'>
              <a href='http://localhost:3000/loggedIn/Oscar'>
                <img
                  class='inline object-cover w-32 h-32 mr-2 rounded-full'
                  src='https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
                  alt='Profile image'
                />
                <h3>Oscar</h3>
              </a>
            </button>
            <button className='mr-4'>
              <a href='http://localhost:3000/loggedIn/Albin'>
                <img
                  class='inline object-cover w-32 h-32 mr-2 rounded-full'
                  src='https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
                  alt='Profile image'
                />
                <h3>Albin</h3>
              </a>
            </button>
            <button className=''>
              <a href='http://localhost:3000/loggedIn/Adam'>
                <img
                  class='inline object-cover w-32 h-32 mr-2 rounded-full'
                  src='https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
                  alt='Profile image'
                />
                <h3>Adam</h3>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
