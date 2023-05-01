import React from "react";
import { Card, Avatar } from "./UserCardElements";

export const UserCard = ({ user }) => {
  return (
    <Card key={user.id}>
      <div className="backgroundAvatar">
        <Avatar src={user.avatar} alt={user.firstName} />
      </div>
      <div className="divInformation">
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <p>{user.email}</p>
      </div>
    </Card>
  );
};
