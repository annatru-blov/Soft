import "./using.css";
import {motion} from 'framer-motion';
import image1 from './../../img/about-img1.jpeg'
import image2 from './../../img/about-img2.jpeg'



const textAnimation = {
    hidden:{
z: 200, 
opacity: 0,
    },
    visible: custom =>({
        z: 55, 
opacity: 1,
transition: {delay: custom * 0.3},
    }),
}

const Using = () => {
  return (
    <motion.section initial="hidden" whileInView="visible" className="using" id="section2">
      <div className="container">
        <div className="using_wrapper">
        <div className="wrapper_block_one">
        <motion.img custom={1} variants={textAnimation} className="image_one" src={image1} alt="image1" width={400} height={270}/>
           
          <div className="wrap_text">
            <motion.div custom={1} variants={textAnimation} className="using_text">
              We’re a software and services company that builds and transforms
              businesses using advance technologies.
            </motion.div>
            <motion.div custom={1} variants={textAnimation} className="using_subtext">
              We enable some of the most demanding organizations to enrich
              customer experiences, optimize operations, launch new platforms,
              and monetize data opportunities. We offer fully-managed and
              end-to-end strategy, tech, tools and talent as a single platform
              to deliver on mission-critical technology initiatives. We’re known
              for our speed, reliability, quality, and unbeatable ROI.
            </motion.div>
          </div>
        </div>
        <div className="wrapper_block_two">
            <motion.div custom={2} variants={textAnimation} className="subtext_two">Our approach and processes are focused on effective collaboration and improving the user experience with your product.</motion.div>
            <motion.img custom={2} variants={textAnimation} className="image_two" src={image2} alt="image2" width={400} height={270} />
        </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Using;
