import { users } from '../database/user';

function Friends({ user, friendsList }) {
  console.log(friendsList);
  return (
    <div class='w-full max-w-screen-xl mx-auto mt-4 p-6'>
      <div class='relative rounded overflow-hidden border border-grey-light mb-8 mt-1 bg-white'>
        <div class='bg-white overflow-hidden'>
          <div class='w-4/5 h-10 py-3 px-1'>
            <img
              class='h-16 w-16 rounded-full ml-7 mt-1'
              src='https://randomuser.me/api/portraits/men/24.jpg'
              alt='Randy Robertson'
            />
            <p class='hover:text-blue-dark text-center font-bold'>
              {friendsList[0].friendName}
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
                    <p class='hover:text-blue-dark'>
                      {friendsList[0].friendName}
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
          <div class='sm:flex bg-grey-light sm:items-center px-2 py-4 flex justify-center color  '>
            <div class=''>
              <button class='text-white hover:text-grey-dark py-2 px-4 rounded bg-blue-700'>
                Add friend?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Friends;
