import {users} from '../database/user';

function Friends (){
    console.log(users)
    return(
        <div>Hello world{users[0].name}</div>
    )
}

export default Friends;