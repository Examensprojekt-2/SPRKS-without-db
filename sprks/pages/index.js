import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Friends from '../components/friends';
import toggleFriendsAside from '../functions/functions';

export default function Home() {
  return (
    <div className='black'>
      <div className='fixed top-0 z-50 w-full text-white body-font bg-gradient-to-b from-black'>
        <div className='flex flex-col flex-wrap items-center p-5 px-16 md:flex-row'>
          <a className='flex items-center mb-4 font-medium text-white title-font md:mb-0'>
            <img
              src='https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png'
              className='w-24'
              alt=''
            ></img>
          </a>
          <ul className='flex-row hidden w-1/2 ml-12 space-x-3 text-sm lg:flex'>
            <li className='font-semibold'>Home</li>
            <li>Games</li>
            <li>Friends</li>
            <li>Popular</li>
            <li></li>
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
                clip-rule='evenodd'
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
                stroke-width='2'
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
            <button className='flex items-center'>
              <img
                src='https://occ-0-58-64.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABTw7t_oDR-SWh9ddj9kh9AlOqCabZMupMWano7R5wg9x1_KPjvABqKHNeCxcMddK7Ku9HsV6keglPmWPZeh0lKU.png?r=fcc'
                alt=''
              ></img>
              <svg
                className='w-5 h-5 text-white stroke-current'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
      <div className='relative w-full h-screen'>
        <div className='absolute z-10 w-full h-full '>
          <div className='flex items-center justify-start h-full px-16'>
            <div className='flex-col hidden w-3/12 py-12 space-y-4 lg:flex '>
              <div className='flex flex-row w-full space-x-4'></div>
            </div>
            <div className='flex-col float-right w-3/12 py-12 m-auto mr-0 space-y-4'>
              <button
                onClick={toggleFriendsAside}
                className='px-4 py-2 text-white duration-1000 bg-gray-600 rounded-md hover:text-black hover:bg-white'
              >
                Show Friends
              </button>
              <Friends />
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 w-full h-64 bg-gradient-to-t from-black'></div>
        <video
          className='object-cover w-full h-64 -mt-8 lg:h-screen '
          autoPlay
          muted
          loop
        >
          <source
            className='object-contain h-screen'
            src='https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4'
            type='video/mp4'
          ></source>
        </video>
      </div>
    </div>
  );
}
