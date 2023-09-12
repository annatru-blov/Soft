import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#000000", "#000000", "#000000", "#000000", "#000000"];


export const MenuItem = ({ i, sectionId, title, closeMenu }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }} 
    >
      <Link
        to={sectionId}
        smooth={true}
        spy={true}
        offset={-50} // смещение, если есть фиксированная навигационная панель
        duration={500} // продолжительность анимации прокрутки
        className="menu-link"
        onClick={closeMenu}
      >
       
        <div className="title__menu">{title}</div>
      </Link>
    </motion.li>
  );
};
