import {users} from '../database/user';

function Friends (){
    return(
        <>
        <div>
            <div className="border-4 border-light-blue-500 border-opacity-50 rounded-full">
                <p className="text-white text-center m-2">Friends-list</p>
            </div>
            <div className="py-2 text-green-500 text-xl">
                <h1>Online</h1>
            </div>
            <div className="border-4 border-light-blue-500 border-opacity-50 rounded-lg text-lg text-white">
                <div className="py-2 px-2">
                <p className="py-0.5">Jessen <p className="inline text-green-500 text-opacity-75">is playing </p><p className="inline">Fortnite</p></p>
                <p className="py-0.5">Adam <p className="inline text-blue-500 text-opacity-75">is online</p></p>
                <p className="py-0.5">Erik <p className="inline text-blue-500 text-opacity-75">is online</p></p>
                <p className="py-0.5">Oscar <p className="inline text-blue-500 text-opacity-75">is online</p></p>
                </div>
            </div>
            <div className="py-2 text-gray-500 text-xl">
                <h1>Offline</h1>
            </div>
            <div className="border-4 border-light-blue-500 border-opacity-50 rounded-lg text-lg text-white">
                <div className="py-2 px-2">
                <p className="py-0.5">Filip <p className="inline text-gray-100 text-opacity-50">4 day(s) ago</p></p>
                <p className="py-0.5">Marcus <p className="inline text-gray-100 text-opacity-50">1 day(s) ago</p></p>
                </div>
            </div>
        </div>
        <div className='flex space-x-4 flex-row w-full'>
                <button className=' px-3 mt-5 items-center shadow-md rounded-lg bg-white  space-x-2 py-2 justify-center flex w-32'>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span className='text-gray-800 font-semibold'>Add friend</span>
                </button>
                <button className=' px-3 mt-5 items-center shadow-md rounded-lg bg-gray-500 bg-opacity-50  space-x-2 py-2 justify-center flex w-auto'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      stroke-width='2'
                      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                  <span className='text-white font-semibold'>Friend request</span>
                </button>
              </div>
        </>
    )
}

export default Friends;