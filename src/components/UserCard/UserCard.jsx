import React from "react";
import { Card, Avatar } from "./UserCardElements";

export const UserCard = ({ user }) => {
  return (
    <Card key={user.id}>
      <div className="backgroundAvatar">
        <Avatar src={user.avatar} alt={user.first_name} />
      </div>
      <div className="divInformation">
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <text>{user.email}</text>
      </div>
    </Card>
  );
};
