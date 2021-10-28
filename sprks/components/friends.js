import { users } from '../database/user';

function Friends() {
  return (
    <div>
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
    </div>
  );
}

export default Friends;
