import "./About.scss";
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <motion.div
          className="left"
          initial={{ x: -500, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <motion.button 
          initial={{ scale:0, opacity: 0 }}
          whileInView={{
            scale:1,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut",delay:1 },
          }}>read more</motion.button>
        </motion.div>
        <motion.div
          className="right"

          initial={{ x: 500, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <img
            src="https://img.freepik.com/free-psd/woman-typing-laptop-sitting-white-table_23-2147636584.jpg?t=st=1723896921~exp=1723900521~hmac=3aedf1523e29ed89579c7e2376bafaa00bdec718383e5300a198cb2f002bee2b&w=740"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
