import { users } from '../database/user';

function NewFriends({ user }) {
  return (
    <div style={{width: '350px', position: 'fixed'}} class='my-10'>
      <div class='bg-white rounded overflow-hidden'>
        <div class='text-center p-6  border-b'>
        <h1 class="text-lg text-gray-600">Your Profile</h1>
          <div class='mt-5'>
            <a
              href='#'
              class='border rounded-full py-2 px-4 text-xs font-semibold text-gray-700'
            >
              Manage your Account
            </a>
          </div>
        </div>
        <div class='border-b'>
          <a href='#' class='px-4 py-2 hover:bg-gray-100 flex'>
            <div class='text-gray-800'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1'
                viewBox='0 0 24 24'
                class='w-5 h-5'
              >
                <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
            </div>
            <div class='pl-3'>
              <p class='text-sm font-medium text-gray-800 leading-none'>
                Account settings
              </p>
              <p class='text-xs text-gray-500'>
                Usage, billing, branding, teams
              </p>
            </div>
          </a>
          <a href='#' class='px-4 py-2 hover:bg-gray-100 flex'>
            <div class='text-gray-800'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1'
                viewBox='0 0 24 24'
                class='w-5 h-5'
              >
                <path d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <div class='pl-3'>
              <p class='text-sm font-medium text-gray-800 leading-none'>
                Personal settings
              </p>
              <p class='text-xs text-gray-500'>Email, profile, notifications</p>
            </div>
          </a>
          <a href='#' class='px-4 py-2 hover:bg-gray-100 flex'>
            <div class='text-green-600'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1'
                viewBox='0 0 24 24'
                class='w-5 h-5'
              >
                <path d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
              </svg>
            </div>
            <div class='pl-3'>
              <p class='text-sm font-medium text-gray-800 leading-none'>
                Apps &amp; integrations
              </p>
              <p class='text-xs text-gray-500'>Google, slack, mail</p>
            </div>
          </a>
          <a href='#' class='px-4 py-2 hover:bg-gray-100 flex'>
            <div class='text-gray-800'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1'
                viewBox='0 0 24 24'
                class='w-5 h-5'
              >
                <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
            </div>
            <div class='pl-3'>
              <p class='text-sm font-medium text-gray-800 leading-none'>
                Friends settings
              </p>
              <p class='text-xs text-gray-500'>
                usability, profile, logos, teams
              </p>
            </div>
          </a>
        </div>

        <div class=''>
          <a href='#' class='flex justify-center px-4 py-2 hover:bg-gray-100'>
            <p class='px-4 py-2 text-lg text-gray-900'>Log out</p>
          </a>
        </div>
      </div>
    </div>
  );
}
export default NewFriends;
