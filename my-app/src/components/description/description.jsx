import "./description.css";
import Cube from "./cube/cube";
import sendImg from "./../../img/icondown.png";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "./../../img/svg/logo.svg";

const Description = () => {
  return (
    <section className="description" id="section1">
      <div className="container">
        <div className="container_wrapper">
          <img className="logo-img" src={logo} alt="logo" width={80} />
          <div className="desc_content">
            <div className="desc_text">
              Creating a digital <br></br>future for <br></br>business and{" "}
              <br></br>government
            </div>
            <div className="desc_subtext">
              “Simplicity is the ultimate sophistication”
            </div>
            <div className="desc_sub_sub">Leonardo da Vinci</div>
            <div className="descrip_btn_wrapper"></div>
          </div>
          <div className="cube_container">
            <Cube />
          </div>
        </div>

        <div className="block_sub">
          <div className="contact_wrapper">
            <div className="contact_info">info@info.com</div>
            <div className="contact_telegram">Telegram: +777(77)777-77-77</div>
          </div>
          <div className="return_but">
            <div className="text_button">start with us</div>
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="imgsend"
            >
              <img className="imgsend" src={sendImg} alt="sendImg" width={40} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Description;
