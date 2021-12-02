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
            <p class='hover:text-blue-dark text-center font-bold'>
           
              
              {user}
            </p>
          </div>
          <div class='sm:flex sm:items-center px-2 py-4 mt-8'>
            <div class='flex-grow'>
              <h3 class='font-normal px-2 py-3'>{friendsList[0].friendId}</h3>
              <input
                type='text'
                placeholder='Search teams or members'
                class='my-2 w-full text-sm bg-grey-light text-grey-darkest rounded h-10 p-3 focus:outline-none mt-0'
              />
              <div class='w-full'>
                <div class='flex cursor-pointer my-1 hover:bg-blue-lightest rounded'>
                  <div class='w-8 h-10 text-center py-1'>
                    <p class='text-3xl p-0 text-green-dark'>&bull;</p>
                  </div>
                  <div class='w-4/5 h-10 py-3 px-1'>
                  {friendsList.map((friend) => {
                      return(<div>{friend.name}</div>
                        )

                   })}
                  </div>
                  <div class='w-1/5 h-10 text-right p-3'>
                    <p class='text-sm text-grey-dark'>Member</p>
                  </div>
                </div>
                <div class='flex cursor-pointer my-1 hover:bg-blue-lightest rounded'>
                  <div class='w-8 h-10 text-center py-1'>
                    <p class='text-3xl p-0 text-grey-dark'>&bull;</p>
                  </div>
                  <div class='w-4/5 h-10 py-3 px-1'>
                    <p class='hover:text-blue-dark'>
                      {friendsList[1].friendName}
                    </p>
                  </div>
                  <div class='w-1/5 h-10 text-right p-3'>
                    <p class='text-sm text-grey-dark'>Team</p>
                  </div>
                </div>
                <div class='flex cursor-pointer my-1 hover:bg-blue-lightest rounded'>
                  <div class='w-8 h-10 text-center py-1'>
                    <p class='text-3xl p-0 text-green-dark'>&bull;</p>
                  </div>
                  <div class='w-4/5 h-10 py-3 px-1'>
                    <p class='hover:text-blue-dark'>
                      {/* {users[0].friends[2].name} */}
                    </p>
                  </div>
                  <div class='w-1/5 h-10 text-right p-3'>
                    <p class='text-sm text-grey-dark'>Member</p>
                  </div>
                </div>
                <div class='flex cursor-pointer my-1 hover:bg-blue-lightest rounded'>
                  <div class='w-8 h-10 text-center py-1'>
                    <p class='text-3xl p-0 text-grey-dark'>&bull;</p>
                  </div>
                  <div class='w-4/5 h-10 py-3 px-1'>
                    <p class='hover:text-blue-dark'>
                      {/* {users[0].friends[3].name} */}
                    </p>
                  </div>
                  <div class='w-1/5 h-10 text-right p-3'>
                    <p class='text-sm text-grey-dark'>Team</p>
                  </div>
                </div>
                <div class='flex my-1 cursor-pointer hover:bg-blue-lightest rounded'>
                  <div class='w-8 h-10 text-center py-1'>
                    <p class='text-3xl p-0 text-grey-dark'>&bull;</p>
                  </div>
                  <div class='w-4/5  h-10 py-3 px-1'>
                    <p class='hover:text-blue-dark'>
                      {/* {users[0].friends[4].name} */}
                    </p>
                  </div>
                  <div class='w-1/5 h-10 text-right p-3'>
                    <p class='text-sm text-grey-dark'>Member</p>
                  </div>
                </div>
              </div>
            </div>
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
