import { users } from '../database/user';

function Friends({ user, friendsList }) {
  return (
    <div class='my-10'>
      <div class='bg-white rounded overflow-hidden'>
        <div class='text-center p-6  border-b'>
          <h1 class="text-lg text-gray-600">Your Friends</h1>
        </div>
        <div class='border-b'>
          <div class="hover:bg-gray-100">
            <img
              class='inline-block h-7 w-7 rounded-full m-2'
              src='https://randomuser.me/api/portraits/men/24.jpg'
              alt='Randy Robertson'
            />
            <p class="inline-block px-4 py-2 text-gray-800">Friend</p>
            <p class="float-right inline-block px-4 py-2 text-gray-800">Online</p>
          </div>
          <div class="hover:bg-gray-100">
          <img
              class='inline-block h-7 w-7 rounded-full m-2'
              src='https://randomuser.me/api/portraits/men/24.jpg'
              alt='Randy Robertson'
            />
            <p class="inline-block px-4 py-2 text-gray-800">Friend</p>
            <p class="float-right inline-block px-4 py-2 text-gray-800">Online</p>
          </div>
          <div class="hover:bg-gray-100">
          <img
              class='inline-block h-7 w-7 rounded-full m-2'
              src='https://randomuser.me/api/portraits/men/24.jpg'
              alt='Randy Robertson'
            />
            <p class="inline-block px-4 py-2 text-gray-800">Friend</p>
            <p class="float-right inline-block px-4 py-2 text-gray-800">Online</p>
          </div>
          <div class="hover:bg-gray-100">
          <img
              class='inline-block h-7 w-7 rounded-full m-2'
              src='https://randomuser.me/api/portraits/men/24.jpg'
              alt='Randy Robertson'
            />
            <p class="inline-block px-4 py-2 text-gray-800">Friend</p>
            <p class="float-right inline-block px-4 py-2 text-gray-800">Online</p>
          </div>
          <div class="hover:bg-gray-100">
            <img
                class='inline-block h-7 w-7 rounded-full m-2'
                src='https://randomuser.me/api/portraits/men/24.jpg'
                alt='Randy Robertson'
            />
            <p class="inline-block px-4 py-2 text-gray-800">Friend</p>
            <p class="float-right inline-block px-4 py-2 text-gray-800">Online</p>
          </div>
          <p class="px-4 py-2 text-gray-800">(4/9) offline</p>
        </div>
        <div class=''>
          <a href='#' class='flex justify-center px-4 py-2 hover:bg-gray-100'>
            <p class='px-4 py-2 text-lg text-gray-900'>Add Friend</p>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Friends;
