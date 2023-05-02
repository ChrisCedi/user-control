import React from "react";
import { Card, Avatar } from "./UserCardElements";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../redux/slices/users/hooks/useUsers";
import { useDispatch } from "react-redux";

export const UserCard = ({ user, showSiderbar }) => {
  const { getUserById } = useUsers();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card>
      <div className="body" key={user.id}>
        <div className="backgroundAvatar">
          <Avatar src={user.avatar} alt={user.firstName} />
        </div>
        <div className="divInformation">
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <p>{user.email}</p>
        </div>
        <div className="divButtons">
          <Button onClick={() => navigate(`posts/${user.id}`)}>
            Publicaciones
          </Button>

          <Button>Álbum</Button>

          <Button
            onClick={() => {
              dispatch(getUserById(user.id));
              showSiderbar();
            }}
          >
            Editar
          </Button>
        </div>
      </div>
    </Card>
  );
};
