import React from "react";
import { Button } from "../Button/Button";
import { Card } from "./PostCardElements";

export const PostCard = ({ post }) => {
  return (
    <Card>
      <div className="divHeaderPost">
        <div className="divAvatar">
          <img
            src="https://d3g9pb5nvr3u7.cloudfront.net/authors/559ed6d9e500c96f505a062c/244354738/256.jpg"
            alt="photoProfile"
            className="avatar"
          />
          <p>Chris</p>
        </div>
        <Button>Eliminar</Button>
      </div>
      <div className="divBody">
        <p className="titlePost">{post.title}</p>
        <p>{post.body}</p>
      </div>
      <hr className="divider" />
    </Card>
  );
};
