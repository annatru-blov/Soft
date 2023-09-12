import React, { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./menuToggle";
import { Navigation } from "./navigation";
import "./example.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function Example() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isNavActive, setNavActive] = useState(false);

  const handleNavToggle = () => {
    toggleOpen();
    setNavActive(!isNavActive);
  };
  const closeMenu = () => {
    toggleOpen(false);
    setNavActive(false);
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`nav-container ${isNavActive ? "nav-active" : ""}`}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation closeMenu={closeMenu} />
      <MenuToggle toggle={handleNavToggle} />
    </motion.nav>
  );
}

export default Example;
