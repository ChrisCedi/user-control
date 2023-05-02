import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container } from "./PostsElements";
import { PostCard } from "../../components/PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsById,
  getUserById,
  setPostsUser,
} from "../../redux/slices/users";
import { motion } from "framer-motion";

export const Posts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [postId, setPostId] = useState(null);
  const { postsUser, userSelected } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getPostsById(id));
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(setPostsUser(postsUser.filter((post) => post.id !== postId)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const handleChangePostId = (id) => {
    setPostId(id);
  };
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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <PostCard
              post={post}
              key={index}
              user={userSelected}
              handleId={handleChangePostId}
            />
          </motion.div>
        ))
      )}
    </Container>
  );
};
