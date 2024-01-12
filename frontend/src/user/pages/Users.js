import React from "react";

import UserList from "../components/UsersList";

const User = () => {
    const USERS = [
        {
            id:'u1',
            name : 'Saumya', 
            image : 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png',
            places : 3
        }, 
        {
            id:'u2',
            name : 'Saumya', 
            image : 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png',
            places : 3
        }
    ];
    return <UserList items = {USERS}/>
}

export default User;