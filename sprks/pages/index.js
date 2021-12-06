import Link from 'next/link';

import { getUsers } from '../pages/api/users';
import { getLikes } from '../pages/api/likes';
export async function getServerSideProps() {
  let userProps = await getUsers();
  let likes = await getLikes();
  return {
    props: {
      userProps,
      likes
    },
  };
}

export default function Home({ userProps, deviceType }) {
  console.log(userProps);
  return (
    <div className='bg-black'>
      <div className='fixed top-0 z-50 w-full text-white bg-black body-font'>
        <div className='flex flex-col flex-wrap items-center p-5 px-16 md:flex-row'>
          <a className='flex items-center mb-4 font-medium text-white title-font md:mb-0'>
            <img src='/sprks-logo.png' className='w-24' alt=''></img>
          </a>
          <div className='flex justify-center w-screen h-screen text-center text-white bg-black'>
            {userProps &&
              userProps.map((user) => {
                return (
                  <Link
                    href={{
                      pathname: 'http://localhost:3000/loggedIn/[id]',
                      query: { id: user.Id },
                    }}
                  >
                    <button key={user.Id} className='mr-4'>
                      <img
                        class='inline object-cover w-32 h-32 mr-2 rounded-full'
                        src={user.Image}
                        alt='Profile image'
                      />
                      <h3>
                        {user.name} , {user.age} år
                      </h3>
                    </button>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
