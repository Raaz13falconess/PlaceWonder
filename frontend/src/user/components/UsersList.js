import React from "react";

import './UsersList.css';
import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";

const UserList = props => {
    if(props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                <h2> No Users Found</h2>
                </Card>
            </div>
        );
    }
    return <ul className="user-list">
        {props.items.map(user => {
            return <UserItem 
                key={user.id}
                id = {user.id}
                image = {user.image}
                name = {user.name}
                placeCount = {user.places}
            />
        })}
    </ul>
};

export default UserList;