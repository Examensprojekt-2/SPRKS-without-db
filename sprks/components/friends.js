import { users } from '../database/user';

function Friends({ userById, user, friendsList }) {
  console.log("userById[user] ", friendsList)
  return (
    <div style={{ width: '350px', position: 'fixed' }} class='my-10'>
      <div class='bg-white rounded overflow-hidden'>
        <div class='text-center p-6  border-b'>
          <h1 class="text-lg text-gray-600">Your Profile</h1>
          <img
            class='h-24 w-24 rounded-full mx-auto'
            src={userById[0].Image}
            alt='Randy Robertson'
          />
          <div>
            <p class='py-2 px-4 text-xs font-semibold text-gray-700'>{userById[0].name}</p>
          </div>
        </div>

        <div id="FREINDSLIST" class='border-b'>
          {friendsList.map((friend) => {
            console.log(friend.Image)
            return (
              <div class="hover:bg-gray-100">
                <img
                  class='inline-block h-7 w-7 rounded-full m-2'
                  src={friend.Image}
                />
                <p class="inline-block px-4 py-2 text-gray-800">{friend.name}</p>
                <p class="float-right inline-block px-4 py-2 text-gray-800">Online</p>
              </div>
            )
          })}
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
