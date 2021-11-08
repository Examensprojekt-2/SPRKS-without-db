import { users } from '../database/user';

function NewFriends() {
  return (

<div class="my-10">
      <div class="fixed bg-white rounded overflow-hidden shadow-lg w-80 rounded-lg bg-opacity-90">
        <div class="text-center p-6  border-b">
          <img
            class="h-24 w-24 rounded-full mx-auto"
            src="https://randomuser.me/api/portraits/men/24.jpg"
            alt="Randy Robertson"
          />
          <p class="pt-2 text-lg font-semibold">{users[0].name}</p>
          <p class="text-sm text-gray-600">{users[0].email}</p>
          <div class="mt-5">
            <a
              href="#"
              class="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
            >
              Manage your Account
            </a>
          </div>
        </div>
        <div class="border-b">
          <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>

            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">Account settings</p>
              <p class="text-xs text-gray-500">Usage, billing, branding, teams</p>
            </div>
          </a>
          <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">Personal settings</p>
              <p class="text-xs text-gray-500">Email, profile, notifications</p>
            </div>
          </a>

        </div>

        <div class="">
          <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-sm font-medium text-gray-800 leading-none">Product updates</p>
          </a>
          <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-sm font-medium text-gray-800 leading-none">Status updates</p>
          </a>
          <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-sm font-medium text-gray-800 leading-none">Support FAQ</p>
          </a>
          <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-sm font-medium text-gray-800 leading-none">Logout</p>
          </a>
        </div>
      </div>
    </div>
  )
}
export default NewFriends;
