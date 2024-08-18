// import "./Philosophy.scss";
// import { easeInOut, motion } from "framer-motion";
// const Philosophy = () => {
//   return (
//     <div className="philosophy">
//       <motion.div
//         className="image"
//         initial={{ rotateX: "90deg", opacity: 0 }}
//         whileInView={{
//           rotateX: "0deg",
//           opacity: 1,
//           y: [0, -20, 0],
//           transition: {
//             duration: 1.5, // Longer duration for a smoother bounce
//             ease: "easeInOut",
//             delayChildren: 1.5,
//           },
//         }}
//       >
//         <motion.div
//           className="circle-top"
//           initial={{ opacity: 0, y: -500 }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//             transition: {
//               duration: 1,
//               ease: "easeInOut",
//               delay: 1,
//             },
//           }}
//         ></motion.div>
//         <div className="circle-buttom"></div>
//         <motion.div
//           className="circle-image"
//           initial={{ rotate: "360deg", x: 500, opacity: 0 }}
//           whileInView={{
//             rotate: "0deg",
//             x: 0,
//             opacity: 1,
//             transition: {
//               duration: 2,
//               ease: "easeInOut",
//             },
//           }}
//         ></motion.div>
//       </motion.div>
//       <div className="card">
//         <motion.h2
//           initial={{ y: 500, opacity: 0 }}
//           whileInView={{
//             y: 0,
//             opacity: 1,
//             transition: { ease: "easeInOut", duration: 1 },
//           }}
//         >
//           Our Philosophy
//         </motion.h2>
//         <motion.p
//           initial={{ y: 500, opacity: 0 }}
//           whileInView={{
//             y: 0,
//             opacity: 1,
//             transition: { ease: "easeInOut", duration: 1 },
//           }}
//         >
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum
//           faucibus vitae aliquet nec. Sodales ut etiam sit amet nisl. Egestas
//           pretium aenean pharetra magna ac placerat vestibulum lectus. Viverra
//           accumsan in nisl nisi scelerisque eu. Elementum sagittis vitae et leo
//           duis ut diam quam. Rhoncus mattis rhoncus urna neque. Venenatis lectus
//           magna fringilla urna porttitor rhoncus dolor purus.
//         </motion.p>
//         <motion.button
//           initial={{ y: 500, opacity: 0 }}
//           whileInView={{
//             y: 0,
//             opacity: 1,

//             transition: { ease: "easeInOut", duration: 1 },
//           }}
//         >
//           read more
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default Philosophy;
import "./Philosophy.scss";
import { easeInOut, motion } from "framer-motion";

const Philosophy = () => {
  return (
    <div className="philosophy">
      <motion.div
        className="image"
        initial={{ rotateX: "90deg", opacity: 0 }}
        whileInView={{
          rotateX: "0deg",
          opacity: 1,
          y: [0, -20, 0],
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            delayChildren: 0.3, // Shorter delay to make sure children start animating sooner
            staggerChildren: 0.2, // Staggering children to create a cascading effect
          },
        }}
      >
        <motion.div
          className="circle-top"
          initial={{ opacity: 0, y: -500 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.2,
              ease: "easeInOut",
            },
          }}
        ></motion.div>
        <motion.div
          className="circle-buttom"
          initial={{ opacity: 0, y: 500 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.2,
              ease: "easeInOut",
              delay: 0.2,
            },
          }}
        ></motion.div>
        <motion.div
          className="circle-image"
          initial={{ rotate: "360deg", x: 500, opacity: 0 }}
          whileInView={{
            rotate: "0deg",
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.4,
            },
          }}
        ></motion.div>
      </motion.div>

      <motion.div
        className="card"
        initial={{ opacity: 0, rotateX: "30deg" }}
        whileInView={{
          opacity: 1,
          rotateX: "0deg",
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            delayChildren: 0.2, // Delay before animating text and button
            staggerChildren: 0.1, // Shorter stagger for a smoother transition
          },
        }}
      >
        <h2>Our Philosophy</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum
          faucibus vitae aliquet nec. Sodales ut etiam sit amet nisl. Egestas
          pretium aenean pharetra magna ac placerat vestibulum lectus. Viverra
          accumsan in nisl nisi scelerisque eu. Elementum sagittis vitae et leo
          duis ut diam quam. Rhoncus mattis rhoncus urna neque. Venenatis lectus
          magna fringilla urna porttitor rhoncus dolor purus.
        </p>
        <button>read more</button>
      </motion.div>
    </div>
  );
};

export default Philosophy;
