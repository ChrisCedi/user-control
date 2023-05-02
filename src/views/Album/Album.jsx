import React, { useEffect } from "react";
import { Container } from "./AlbumElements";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsById, getUserById } from "../../redux/slices/users";
import { useParams } from "react-router-dom";
import { Row, Column } from "styled-grid-system-component";
import { motion } from "framer-motion";

export const Album = () => {
  const dispatch = useDispatch();
  const { userSelected, albumsUser } = useSelector((state) => state.users);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAlbumsById(id));
    dispatch(getUserById(id));
  }, [dispatch, id]);

  return (
    <Container>
      <h2 className="title">Álbums</h2>
      <p className="description">
        {`Estos son los álbums de 
        ${userSelected.fistName ? userSelected.firstName : ""} 
        ${userSelected.lastName ? userSelected.lastName : ""}`}
      </p>
      <Row>
        {albumsUser.map((album, index) => (
          <Column xs={12} md={4} lg={3} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "tween", stiffness: 300, damping: 1 }}
              >
                <h1>{album.title}</h1>
              </motion.div>
            </motion.div>
          </Column>
        ))}
      </Row>
    </Container>
  );
};
