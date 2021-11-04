import { toggleFriendsAside } from '../functions/functions';

function Hamburger() {
    return(
        <> 
            <div class="relative right-0 top-0">
                <button onClick={() => toggleFriendsAside()} class="px-4 py-4 bg-black md:hover:bg-dark-grey  transform duration-500 ease-in-out md:hover:scale-110 motion-reduce:transform-none text-white m-2 focus:outline-none" >
                    {/* <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path x-show="!menu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg> */}
                    <img
                    src='/friends-logo.png'
                    className='w-10 h-1/2'
                    alt=''
                    ></img>
                </button>
            </div>
        </>
    )
}

export default Hamburger;