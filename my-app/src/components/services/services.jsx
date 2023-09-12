import { motion } from "framer-motion";
import "./services.css";
import service from "./../../img/service.png";
import List from "./ExampleList/List";


const textAnimation = {
  hidden: {
    z: 200,
    opacity: 0,
  },
  visible: (custom) => ({
    z: 55,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

const Services = () => {
  return (
    <motion.section initial="hidden" whileInView="visible" className="services" id="section3">
      <div className="container">
        <div className="services_wrapper">
          <div className="service_block">
            <motion.div
              custom={5}
              variants={textAnimation}
              className="text_services"
            >
              Our Services
            </motion.div>
            <motion.img  custom={6}
              variants={textAnimation} className="service_icon" src={service} alt="service" />
          </div>
          <div className="service_examples">
            <List />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Services;
