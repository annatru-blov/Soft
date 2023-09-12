import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [0, 1, 2, 3, 4];
const sectionIds = ["section1", "section2", "section3", "section4", "section5"];
const texts = ["Description", "About", "Service", "Stack", "Form"];

export const Navigation = ({ closeMenu }) => (
  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} sectionId={sectionIds[i]} title={texts[i]}  closeMenu={closeMenu}/>
    ))}
  </motion.ul>
);








