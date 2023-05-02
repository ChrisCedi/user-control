import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Card } from "./PostCardElements";
import { Modal } from "../Modal/Modal";
import { Images } from "../../assets/Images";

export const PostCard = ({ post, user, handleId }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card>
      <div className="divHeaderPost">
        <div className="divAvatar">
          <img src={user.avatar} alt="photoProfile" className="avatar" />
          <p>{user.firstName}</p>
          <p className="lastName">{user.lastName}</p>
        </div>

        <Button onClick={() => setIsOpen(true)}>Eliminar</Button>
      </div>
      <div className="divBody">
        <p className="titlePost">{post.title}</p>
        <p>{post.body}</p>
      </div>
      <hr className="divider" />
      {isOpen && (
        <Modal>
          <div>
            <div className="divCloseButton">
              <img
                src={Images.closeIcon}
                alt="close"
                className="closeIcon"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <p>¿Deseas borrar esta publicación?</p>
            <div className="divButtonsModal">
              <Button
                onClick={() => {
                  handleId(post.id);
                  setIsOpen(false);
                }}
              >
                Aceptar
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </Card>
  );
};
