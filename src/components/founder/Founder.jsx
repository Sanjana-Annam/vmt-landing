import "./Founder.css";
import founderImg from "../../assets/founder.jpg";
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

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Founder() {
  return (
    <motion.section
      className="founder-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="founder-container">

        {/* LEFT IMAGE */}
        <motion.div
          className="founder-image"
          variants={fadeLeft}
        >
          <img src={founderImg} alt="Founder of Viral Marketing Trends" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="founder-content"
          variants={container}
        >
          <motion.span
            className="founder-badge"
            variants={fadeUp}
          >
            Meet Our Founder
          </motion.span>

          <motion.h2 variants={fadeUp}>
            Built on Experience,
            <br />
            <span>Driven by Results</span>
          </motion.h2>

          <motion.p variants={fadeUp}>
            With over a decade of experience in digital marketing and growth
            strategy, our founder has helped hundreds of brands scale from
            startups to market leaders. We bring hands-on expertise, strategic
            insight, and a genuine commitment to your success.
          </motion.p>

          <motion.p variants={fadeUp}>
            Every client gets direct access to senior leadership. No junior
            account managers, no cookie-cutter strategies—just proven methods
            tailored to your unique goals.
          </motion.p>

          <motion.a
            href="https://sfurtisahare.com"
            className="founder-link"
            variants={fadeUp}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Learn more about our story →
          </motion.a>
        </motion.div>

      </div>
    </motion.section>
  );
}
