import { users } from '../database/user';

function Friends() {
  return (
    <>
      <div>
        <div className='border-4 border-opacity-50 rounded-full border-light-blue-500'>
          <p className='m-2 text-center text-white'>Friends-list</p>
        </div>
        <div className='py-2 text-xl text-green-500'>
          <h1>Online</h1>
        </div>
        <div className='text-lg text-white border-4 border-opacity-50 rounded-lg border-light-blue-500'>
          <div className='px-2 py-2'>
            <p className='py-0.5'>
              Jessen{' '}
              <p className='inline text-green-500 text-opacity-75'>
                is playing{' '}
              </p>
              <p className='inline'>Fortnite</p>
            </p>
            <p className='py-0.5'>
              Albin{' '}
              <p className='inline text-green-500 text-opacity-75'>
                is playing{' '}
              </p>
              <p className='inline'>Roblox</p>
            </p>
            <p className='py-0.5'>
              Adam{' '}
              <p className='inline text-blue-500 text-opacity-75'>is online</p>
            </p>
            <p className='py-0.5'>
              Erik{' '}
              <p className='inline text-blue-500 text-opacity-75'>is online</p>
            </p>
            <p className='py-0.5'>
              Oscar{' '}
              <p className='inline text-blue-500 text-opacity-75'>is online</p>
            </p>
          </div>
        </div>
        <div className='py-2 text-xl text-gray-500'>
          <h1>Offline</h1>
        </div>
        <div className='text-lg text-white border-4 border-opacity-50 rounded-lg border-light-blue-500'>
          <div className='px-2 py-2'>
            <p className='py-0.5'>
              Filip{' '}
              <p className='inline text-gray-100 text-opacity-50'>
                4 day(s) ago
              </p>
            </p>
            <p className='py-0.5'>
              Marcus{' '}
              <p className='inline text-gray-100 text-opacity-50'>
                1 day(s) ago
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row w-full space-x-4'>
        <button className='flex items-center justify-center w-32 px-3 py-2 mt-5 space-x-2 bg-white rounded-lg shadow-md '>
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
          <span className='font-semibold text-gray-800'>Add friend</span>
        </button>
        <button className='flex items-center justify-center w-auto px-3 py-2 mt-5 space-x-2 bg-gray-500 bg-opacity-50 rounded-lg shadow-md '>
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
          <span className='font-semibold text-white'>Friend request</span>
        </button>
      </div>
    </>
  );
}

export default Friends;
