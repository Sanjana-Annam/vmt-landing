import "./ClientsWork.css";
import { motion } from "framer-motion";

import Alizaidi from "../../assets/clients/Alizaidi.jpeg";
import Aurum from "../../assets/clients/Aurum.jpeg";
import HiA from "../../assets/clients/HiA.jpeg";
import RP from "../../assets/clients/RP.jpg";
import xinglin from "../../assets/clients/xinglin.jpeg";
import yetiply from "../../assets/clients/yetiply.jpeg";

const works = [
  {
    logo: HiA,
    title: "Hightech Albums",
    subtitle: "Printing & Digital Solutions",
    desc: "Meta Ads + performance marketing to improve visibility, engagement, and conversions with continuous optimization."
  },
  {
    logo: Alizaidi,
    title: "Ali Zaidi",
    subtitle: "Business Professional",
    desc: "Structured LinkedIn content calendar and post ideas aligned with professional positioning and authority."
  },
  {
    logo: Aurum,
    title: "Aurum",
    subtitle: "Corporate Gifting Brand",
    desc: "Multi-platform content strategy across Instagram, Facebook & LinkedIn to build trust and consistency."
  },
  {
    logo: xinglin,
    title: "Xinglin",
    subtitle: "Industrial Products Company",
    desc: "Website structure, UX improvements, and digital credibility for industrial buyers."
  },
  {
    logo: yetiply,
    title: "Yetiply",
    subtitle: "Furniture Brand",
    desc: "Strategy-first Instagram content planning and AI-powered ads to boost reach and engagement."
  }
];

/* Animation variants */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ClientsWork() {
  return (
    <motion.section
      className="clients-work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      {/* HEADER */}
      <motion.h2 variants={fadeUp}>
        What We’ve Done For Our Clients
      </motion.h2>

      <motion.p className="clients-subtitle" variants={fadeUp}>
        Real results delivered through strategy, creativity, and performance marketing.
      </motion.p>

      {/* CARDS */}
      <motion.div className="clients-grid" variants={container}>
        {works.map((item, i) => (
          <motion.div
            className="client-card"
            key={i}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            {/* LOGO CIRCLE */}
            <motion.div
              className="client-logo"
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 260 }}
            >
              <img src={item.logo} alt={item.title} />
            </motion.div>

            <h3>{item.title}</h3>
            <span>{item.subtitle}</span>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
