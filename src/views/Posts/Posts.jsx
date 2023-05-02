import React from "react";
import { useParams } from "react-router";
import { postList } from "./mocks";
import { Container } from "./PostsElements";
import { PostCard } from "../../components/PostCard/PostCard";

export const Posts = () => {
  const { id } = useParams();

  return (
    <Container>
      <h2 className="title">Publicaciones</h2>
      <p className="description">{`Puedes ver y eliminar las publicaciones de ${"Chris"}`}</p>
      {postList.map((post, index) => (
        <PostCard post={post} />
      ))}
    </Container>
  );
};
