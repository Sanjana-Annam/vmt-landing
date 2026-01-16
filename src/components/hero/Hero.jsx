import "./Hero.css";
import LeadForm from "../leadform/LeadForm";
import logo from "../../assets/vmt-logo.png";
import { motion } from "framer-motion";

/* Animation variants */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function Hero() {
  return (
    <section className="hero">
      {/* LOGO */}
      <motion.img
        src={logo}
        alt="Viral Marketing Trends"
        className="hero-logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="hero-inner">

        {/* 🔹 MOBILE CTA (VISIBLE ONLY ON MOBILE) */}
        <motion.div
          className="hero-form hero-form-mobile"
          variants={fadeScale}
          initial="hidden"
          animate="visible"
        >
          <LeadForm />
        </motion.div>

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-badge" variants={fadeUp}>
            Performance-Driven Marketing
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Grow Your Brand With <br />
            <span>Viral Marketing Trends</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            We help brands scale using paid ads, SEO, and ROI-focused
            performance marketing strategies.
          </motion.p>

          <motion.ul className="hero-points" variants={container}>
            <motion.li variants={fadeUp}>✔ ROI-focused growth</motion.li>
            <motion.li variants={fadeUp}>✔ Full-service digital marketing</motion.li>
            <motion.li variants={fadeUp}>✔ Transparent reporting</motion.li>
          </motion.ul>
        </motion.div>

        {/* 🔹 DESKTOP CTA (VISIBLE ONLY ON DESKTOP) */}
        <motion.div
          className="hero-form hero-form-desktop"
          variants={fadeScale}
          initial="hidden"
          animate="visible"
        >
          <LeadForm />
        </motion.div>

      </div>
    </section>
  );
}