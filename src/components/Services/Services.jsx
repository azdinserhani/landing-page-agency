import ux from "../../../public/ux.png";
import Ads from "../../../public/Ads.png";
import consult from "../../../public/consult.png";
import graphic from "../../../public/graphic.png";
import logoDesign from "../../../public/logoDesign.png";
import mobile from "../../../public/mobile.png";
import Seo from "../../../public/Seo.png";
import webHost from "../../../public/webHost.png";
import website from "../../../public/website.png";
import "./Services.scss";
import { motion } from "framer-motion";
const Services = () => {
  const services = [
    {
      img: ux,
      text: "UI/UX Design",
    },
    {
      img: graphic,
      text: "Graphic Design",
    },
    {
      img: Seo,
      text: "SEO and ​Branding",
    },
    {
      img: Ads,
      text: "Digital Marketing",
    },
    {
      img: logoDesign,
      text: "Logo Design",
    },
    {
      img: webHost,
      text: "Web Hosting Plus",
    },
    {
      img: mobile,
      text: " ​App Development ",
    },
    {
      img: website,
      text: "Website Design",
    },
    {
      img: consult,
      text: "Consultations",
    },
  ];
  return (
    <div className="services">
      <motion.h2
        initial={{ x: -500, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
      >
        What We Do
      </motion.h2>
      <motion.p
        initial={{ x: 500, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maiores
        illum nisi, ipsam.
      </motion.p>
      <div className="service-container">
        {services.map((item, index) => {
          return (
            <motion.div
              className="item"
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.1,
                },
              }}
            >
              <img src={item.img} />
              <h3>{item.text}</h3>
            </motion.div>
          );
        })}
      </div>
      <motion.button
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration:1, ease: "easeInOut" },
        } }
        whileTap={{scale:0.7}}
      >
        read more
      </motion.button>
    </div>
  );
};

export default Services;
