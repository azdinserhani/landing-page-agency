import "./Hero.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.h1
          initial={{ opacity: 0, rotateX: "-90deg" }}
          animate={{
            opacity: 1,
            rotateX: "0deg",

            x: 0,

            transition: {
              duration: 1,
              type: "spring", // Use spring for bounce effect
              stiffness: 100,
              damping: 100,
            },
          }}
        >
          products & <br />
          brand design <br /> studio!
        </motion.h1>
        <motion.button
          initial={{ y: 500 }}
          animate={{
            y: 0,
            transition: {
              duration: 1,
              type: "tween",
            },
          }}
        >
          learn more
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
