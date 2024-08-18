import "./Portofolio.scss";
import {motion} from "framer-motion"

const Portofolio = () => {
  const cards = [
    {
      img: "https://img.freepik.com/free-vector/abstract-bussiness-flyer-template_23-2148298477.jpg?t=st=1723894668~exp=1723898268~hmac=58c12d5a9d08235bdb55ffe70e163db243382c4e1269e0431eab0a4e266e1019&w=740",
      title: "Flyer Design",
      type: "Graphic Design",
    },
    {
      img: "https://img.freepik.com/free-psd/modern-clean-professional-business-card-template_501970-93.jpg?t=st=1723894368~exp=1723897968~hmac=a84f6c3395bcaf57ad6b4a421c0d2354bc6d086b10e1469c3a88f43476db97ef&w=740",
      title: "Applications",
      type: "Graphic Design",
    },
    {
      img: "https://img.freepik.com/free-vector/abstract-modern-card_23-2147639395.jpg?t=st=1723894637~exp=1723898237~hmac=dbf5fec6e348a71c66d5854cfea1a086608f2f1824a4f3dc0bc820b61dda1b21&w=740",
      title: "Business Cards",
      type: "Graphic Design",
    },
    {
      img: "https://img.freepik.com/free-psd/modern-clean-professional-business-card-template_501970-93.jpg?t=st=1723894368~exp=1723897968~hmac=a84f6c3395bcaf57ad6b4a421c0d2354bc6d086b10e1469c3a88f43476db97ef&w=740",
      title: "Responsive Design",
      type: "Graphic Design",
    },
    {
      img: "https://img.freepik.com/free-vector/mobile-apps-concept-illustration_114360-840.jpg?t=st=1723894768~exp=1723898368~hmac=e5bbd31c5a413401d2352311005ba9175e0fa529d26aecc2928f91d1c1e058d3&w=740",
      title: "Applications",
      type: "UI / UX",
    },
    {
      img: "https://img.freepik.com/premium-photo/ui-ux-designs_1197721-38372.jpg?w=740",
      title: "Applications",
      type: "UI / UX",
    },
    {
      img: "https://img.freepik.com/free-psd/modern-clean-professional-business-card-template_501970-93.jpg?t=st=1723894368~exp=1723897968~hmac=a84f6c3395bcaf57ad6b4a421c0d2354bc6d086b10e1469c3a88f43476db97ef&w=740",
      title: "Business Cards",
      type: "Graphic Design",
    },
    {
      img: "https://img.freepik.com/free-vector/clean-style-modern-business-card-template_1017-30352.jpg?t=st=1723894135~exp=1723897735~hmac=bd44c6bc2432dfbe50476520811740ff5c38c208f4c53e8e652c783aedab582c&w=740",
      title: "Business Cards",
      type: "Graphic Design",
    },
    {
      img: "https://img.freepik.com/free-psd/flat-design-travel-poster-flyer-template_23-2149232126.jpg?t=st=1723894505~exp=1723898105~hmac=55496296046fcfbebaeec3c26f310d6ace70c1877ec02b6f518a7d07962cdc02&w=740",
      title: "Flyer Design",
      type: "Graphic Design",
    },
    {
      img: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg?t=st=1723894822~exp=1723898422~hmac=65568f0c407a933747bc2fa5312556612151b956b4df7a8d8bf7c19125d52f1e&w=996",
      title: "Applications",
      type: "Graphic Design",
    },
    {
      img: "https://img.freepik.com/free-vector/gold-foil-business-card-template_23-2148874380.jpg?t=st=1723893994~exp=1723897594~hmac=bc48c5a67c340ec62372902b611801a9968b858ba750ea5f078d6afe8ad43b5c&w=740",
      title: "Business Cards",
      type: "Graphic Design",
    },
    {
      img: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg?t=st=1723894822~exp=1723898422~hmac=65568f0c407a933747bc2fa5312556612151b956b4df7a8d8bf7c19125d52f1e&w=996",
      title: "Responsive Design",
      type: "Graphic Design",
    },
  ];

  return (
    <div className="portofolio">
      <div className="wrapper">
        <motion.h2
          initial={{ x: 500, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          Our Portfolio
        </motion.h2>
        <motion.p
          initial={{ x: -500, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <div className="portofolio-container">
          {cards.map((item, index) => {
            return (
              <motion.div
                className="card"
                key={index}
                initial={{ scale: 0.2, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
              >
                <div className="image-wrapper">
                  <img src={item.img} alt="" />
                </div>

                <motion.div className="info">
                  <h5>{item.title}</h5>
                  <span>{item.type}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
