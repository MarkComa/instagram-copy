import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "../direct.module.css";

const UsersDialogsItem = (props) => {
  return (
    <div>
      <NavLink to={`/send/` + props.id}>{props.nickname}</NavLink>
    </div>
  );
};

export const UsersDialogsList = () => {
  const users = useSelector((state) => state.direct.users);

  return (
    <div>
      <header className={s.header}>
        <span>nickname</span>
        <button>
          <img src="" alt="Написать сообщение" />
        </button>
      </header>
      <div>
        {users.map((el) => (
          <div key={el.id}>
            <UsersDialogsItem nickname={el.nickname} id={el.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
