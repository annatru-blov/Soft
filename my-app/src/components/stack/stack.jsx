import React from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./stack.css";
import SliderIcon from "./slider_icon";
import { motion } from "framer-motion";
import imgReact from "./../../img/react.jpg"
import imgRabbit from "./../../img/rabbit.png"
import imgKafka from "./../../img/kafka.jpg"
import imgPostgre from "./../../img/postgre.png"
import imgNet from "./../../img/net.png"
import imgAws from "./../../img/aws.png"


const textAnimation = {
  hidden: {
    z: -300,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

const Stack = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    
      {
        breakpoint: 1148,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 754,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  

  return (
    <motion.section initial="hidden" whileInView="visible" className="stack" id="section4">
      <div className="container">
        <div className="stack_wrapper">
          <motion.div
            custom={5}
            variants={textAnimation}
            className="stack_text"
          >
            Stack
          </motion.div>
          <Slider {...settings}>
            <SliderIcon img={imgReact}/>
            <SliderIcon img={imgRabbit} />
            <SliderIcon img={imgKafka} />
            <SliderIcon img={imgPostgre}/>
            <SliderIcon img={imgNet} />
            <SliderIcon img={imgAws} />
          </Slider>
        </div>
      </div>
    </motion.section>
  );
};
export default Stack;
