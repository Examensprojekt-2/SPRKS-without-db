import { toggleFriendsAside } from '../functions/functions';

function Hamburger() {
    return(
        <> 
            <div class="relative right-0 top-0">
                <p>Friends</p>
                <button onClick={() => toggleFriendsAside()} class="px-4 py-4 bg-green-500 md:hover:bg-green-200  transform duration-500 ease-in-out md:hover:scale-110 motion-reduce:transform-none text-white m-2 focus:outline-none" >
                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path x-show="!menu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                        <path x-show="menu"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Hamburger;