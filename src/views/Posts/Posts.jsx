import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Container } from "./PostsElements";
import { PostCard } from "../../components/PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getPostsById, getUserById } from "../../redux/slices/users";

export const Posts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { postsUser, userSelected } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getPostsById(id));
    dispatch(getUserById(id));
  }, [dispatch, id]);

  if (!postsUser) return null;

  return (
    <Container>
      <h2 className="title">Publicaciones</h2>
      <p className="description">{`Puedes ver y eliminar las publicaciones de ${
        userSelected.fistName ? userSelected.firstName : ""
      } ${userSelected.lastName ? userSelected.lastName : ""}`}</p>

      {postsUser.length === 0 ? (
        <div className="divEmpty">
          <h2>No hay publicaciones</h2>
        </div>
      ) : (
        postsUser?.map((post, index) => (
          <PostCard post={post} key={index} user={userSelected} />
        ))
      )}
    </Container>
  );
};
