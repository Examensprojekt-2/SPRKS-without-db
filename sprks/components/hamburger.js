import { toggleFriendsAside } from '../functions/functions';

function Hamburger() {
    return(
        <> 
            <button onClick={() => toggleFriendsAside()}>
                <img
                src='/friends-logo.png'
                className='w-10 h-1/2'
                alt=''
                />
            </button>
        </>
    )
}

export default Hamburger;