import "./Home.scss";
import sliderIconRight from "./img/slider-right.svg";
import sliderIconLeft from "./img/slider-left.svg";
import {
  Card,
  BigBlock,
  BigBlockReverse,
  InfoBlock,
  InfoBlockReverse,
  ServicesTab,
  PartnersTab,
} from "./CardEvent";

function Home() {
  return (
    <div className="home">
      <div className="main-screen">
        <div className="main-screen-text">
          USTA International — это международное сообщество инженеров и
          специалистов, фокусирующееся на устойчивых технологических решениях
          для достижения целей устойчивого развития в Центральной Азии. &quot;Мы
          поддерживаем обмен знаниями, внедрение инноваций в области
          инфраструктуры, энергетики и экологии, а также способствуем
          глобальному партнерству для устойчивого развития&quot;
        </div>
        <div className="main-screen-btn">ПРИСОЕДИНИТЬСЯ</div>
      </div>
      <div className="slider">
        <div className="slider-row">
          <div className="slider-row-name"></div>
          <div className="slider-btn">
            <img src={sliderIconLeft} className="slider-btn-icon" />
            <img src={sliderIconRight} className="slider-btn-icon" />
          </div>
        </div>
        <div className="slider-cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <ServicesTab />
      <PartnersTab />
      <BigBlock />
      <BigBlockReverse />
      <InfoBlock />
      <InfoBlockReverse />
      <InfoBlock />
      <InfoBlockReverse />
      <InfoBlock />
      <InfoBlockReverse />
      <div className="slider">
        <div className="slider-row">
          <div className="slider-row-name">Наша команда</div>
          <div className="slider-row-btn">
            <img src={sliderIconLeft} className="slider-btn-icon" />
            <img src={sliderIconRight} className="slider-btn-icon" />
          </div>
        </div>
        <div className="slider-cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
