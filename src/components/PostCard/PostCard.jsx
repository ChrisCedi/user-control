import React from "react";
import { Button } from "../Button/Button";
import { Card } from "./PostCardElements";

export const PostCard = ({ post, user, handleId }) => {
  return (
    <Card>
      <div className="divHeaderPost">
        <div className="divAvatar">
          <img src={user.avatar} alt="photoProfile" className="avatar" />
          <p>{user.firstName}</p>
          <p className="lastName">{user.lastName}</p>
        </div>
        <Button onClick={() => handleId(post.id)}>Eliminar</Button>
      </div>
      <div className="divBody">
        <p className="titlePost">{post.title}</p>
        <p>{post.body}</p>
      </div>
      <hr className="divider" />
    </Card>
  );
};
