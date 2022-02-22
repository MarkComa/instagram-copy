import React from "react";
import { useForm } from "react-hook-form";

const MessageList = (props) => {
  return props.messages.map((m) => {
    return <MessageItem message={m.message} />;
  });
};

const MessageItem = (props) => {
  return <div>{props.message}</div>;
};

export const UserDialog = (props) => {
  const { register, handleSubmit } = useForm();

  const id = props.userId;

  const messageItemEl = props.user.map((el) => {
    return <MessageList messages={el.messages} />;
  });

  const onSubmit = (value) => {
    props.sendMessageClick({id: id, newMessageText: value.newMessageText});
  };

  return (
    <>
      <div>{messageItemEl}</div>
      {id ? (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              {...register("newMessageText")}
              placeholder="Напишите сообщение"
            />
            <button>Отправить</button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

//sendMessageClick
