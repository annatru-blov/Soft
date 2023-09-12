import "./ExampleList.css";
import cross from "./../../../img/cross.png";
import { useState } from "react";




function ExampleList({title, subtext}) {

 


  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const className = isHovered
    ? "text_service_example_another"
    : "text_service_example";
  const classOpen = isOpen ? "cross_icon_close" : "cross_icon";
  const blockOpen = isOpen ? "open_input_active" : "open_input";

  return (
    <div>
      <div className="exaple_input">
        {" "}
        <div
          className={className}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {title}
        </div>
        <img
          onClick={handleToggle}
          className={classOpen}
          src={cross}
          alt="cross"
          width={30}
          height={30}
        />
      </div>
      <div className={blockOpen}>
  {subtext}
    </div>
      <div className="line"></div>
    </div>
  );
}

export default ExampleList;
