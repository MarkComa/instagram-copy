import React, { useEffect, useState } from "react";
import BlockAction from "../blockAction/BlockAction";
import WriteComment from "../writeComment/WriteComment";
import s from "./card.module.css";
import { NavLink } from "react-router-dom";
import { Modal } from "../../modals/Modal";
import { ModalCard } from "./ModalCard";
import { useDispatch } from "react-redux";
import {sendMessageComment} from "../../../redux/reducers/postsCardSlice"

const Card = (props) => {
  
  const [isModal, setModal] = useState(false);
  //const [content, setContent] = useState();
  const [isTitle, setTitle] = useState();
  const [isHeader, setHeader] = useState(false);
  const onClose = () => setModal(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect has been run" + nickName);
  });
  

  const sendComment = ({id: id, newMessageComment: newMessageComment}) =>{
    dispatch(sendMessageComment({id: id, newMessageComment: newMessageComment}))};


  const nickName = props.nickName || "NoName";
  const id = props.id;
  
  const content = <ModalCard
  sendMessageComment={sendComment}
  id={id}
  comments={props.comments}
  nickName={nickName}
  img={props.img}
/>
  

  const onCard = () => {
    setTitle("");
    setModal(true);
    setHeader(false);
  };

  return (
    <>
      <article className={s.card}>
        <div className={s.header}>
          <NavLink to="/profile/id">{nickName}</NavLink>
          <button className={s.btnMore}>
            <span className={s.kebabMenu}></span>
          </button>
        </div>
        <div className={s.photos}>
          {/* Сделать обработку изображения до квадрата */}
          <img className={s.photosImg} src={props.img} alt="image" />
        </div>
        <BlockAction onCard={onCard} />
        <div className={s.description}>{props.description}</div>
        <button className={s.comments} onClick={onCard}>
          Посмотреть все коментарии
        </button>
        <div className={s.date}>{props.date}</div>
        <WriteComment sendMessageComment={sendComment} id={props.id} />
      </article>
      <Modal
        visible={isModal}
        title={isTitle}
        content={content}
        onClose={onClose}
        isHeader={isHeader}
      />
    </>
  );
};

export default Card;
