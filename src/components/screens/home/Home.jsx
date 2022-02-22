import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../shared/card/Card";
import Footer from "../../footer/Footer";
import s from "./home.module.css";

const Home = () => {
  
  const card = useSelector((state) => state.postsCard.card);
  useEffect(() => {
    console.log("useEffect has been run home");
  });

  const footerStyle = {
    footer: s.footer,
    link: s.link,
    item: s.item,
    copyright: s.copyright,
    nav: s.nav,
    list: s.list,
    btn: s.btn,
  };
  
  let cardEl = card.map((el) => {
    return (
      <div key={el.id}>
        <Card {...el} />
      </div>
    );
  });

  return (
    <div className={s.home}>
      <div className={s.content}>
        <div>{cardEl}</div>

        <div>
          <div>Информация об аккаунте</div>
          <div>Рекомендации для вас</div>
          <Footer {...footerStyle} />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
