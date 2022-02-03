import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./carousel.css";

function Carousel1() {
  return (
    <div className="maincarousel">
      <Carousel className="carousel" autoPlay>
        <div>
          <h1 className="text">Ottez</h1>
          <img className="imgset" src="ottez-reel.gif" alt="" />
        </div>
        <div>
        <h1 className="text">Meta House Mafia</h1>
        <img className="imgset" src="meta.gif" alt="" />
      </div>
        <div>
          <h1 className="text1">COLON PARENTHIESIS</h1>
          <h3 className="text2">Nft Pairs</h3>
          <img
            className="imgset"
            src="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/19b446c183fd69bd40b16e98437861cd/244d48ec/cp-social.jpeg"
            alt=""
          />
        </div>
        <div>
          <h1 className="text1">Barragan “Pocket Vest” </h1>
          <img className="imgset" src="PocketVest_Optimised.gif" alt="" />
        </div>
        <div>
          <h1 className="text1">MadderHalf</h1>
          <img
            className="imgset"
            src="MadderHalf-Promo-Teaser_Optimised.gif"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousel1;
