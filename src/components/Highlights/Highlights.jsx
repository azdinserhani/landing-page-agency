import "./Highlights.scss";
import { motion } from "framer-motion";
const Highlights = () => {
  const cards = [
    {
      title: "Flexible work life",
      desc: "We don’t clock in and out. Work is just a part of our lives, things come up — we understand that. Click to select the.",
    },
    {
      title: "A culture of belonging",
      desc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      title: "Self-care & wellness",
      desc: "We don’t clock in and out. Work is just a part of our lives, things come up — we understand that. Click to select the.",
    },
    {
      title: "Your future",
      desc: "We don’t clock in and out. Work is just a part of our lives, things come up — we understand that. Click to select the.",
    },
  ];
  return (
    <div className="highlights">
      <div className="wrapper">
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          Grow Your Business with Full-Service <br />
          Digital Marketing
        </motion.h2>
        <motion.div
          className="card-container"
          initial={{ y: 500, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 ,transition:{duration:1,ease:"easeInOut"}}}
        >
          {cards.map((item, index) => {
            return (
              <div className="card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Highlights;
