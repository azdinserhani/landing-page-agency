import "./Mession.scss";
import { easeInOut, motion } from "framer-motion";

const Mession = () => {
  return (
    <div className="mession">
      <motion.div
        className="image"
        initial={{ x: -500, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            ease: easeInOut,
          },
        }}
      >
        {" "}
        <motion.div
          className="circle-top"
          initial={{ opacity: 0, rotateX: " -90deg" }}
          whileInView={{
            opacity: 1,
            rotateX: "0deg",
            transition: { duration: 1, ease: "easeInOut", delay: 1 },
          }}
        ></motion.div>
        <motion.div
          className="circle-buttom"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeInOut" },
          }}
        ></motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 500 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <h2>
            Our mission is to harmonize human design with digital technology.
          </h2>
          <p>
            Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus
            pellentesque eu tincidunt tortor aliquam nulla.
          </p>
          <button>read more</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mession;
