import "./Contact.scss";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div className="contact">
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
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
          </form>
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
          <div className="item">
            <h2>Call Us</h2>
            <span>1(123)456789</span>
            <span>1(123)456789</span>
          </div>
          <div className="item">
            <h2>location</h2>
            <span>121 Rock Sreet, 21 Avenue,</span>
            <span>New York, NY 92103-9000</span>
          </div>
          <div className="item">
            <h2>Our top service</h2>
            <span>Web Design</span>
            <span>Marketing</span>
            <span>Branding</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
