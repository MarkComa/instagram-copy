import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UsersDialogsList } from "./usersDialog/UsersDialogsList";
import { UserDialog } from "./usersDialog/UserDialog";
import s from "./direct.module.css";
import { sendMessageClick } from "../../../redux/reducers/directSlice";

export const Direct = () => {
  const users = useSelector((state) => state.direct.users);
  const paramsUserId = useParams();
  const dispatch = useDispatch();
  let userId = paramsUserId.id;
  if (!userId) {
    userId = "";
  }

  const sendMessage = ({id: id,newMessageText: newMessageText}) =>
    dispatch(sendMessageClick({id: id,newMessageText: newMessageText}));

  const user = users.filter((i) => {
    return i.id === userId;
  });
  return (
    <div className={s.direct}>
      <section className={s.content}>
        <div className={s.left}>
          <UsersDialogsList />
        </div>
        <div className={s.right}>
          <UserDialog
            user={user}
            userId={userId}
            sendMessageClick={sendMessage}
          />
        </div>
      </section>
    </div>
  );
};
