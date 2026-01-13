import "./Process.css";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Process() {
  return (
    <motion.section
      className="process-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      <div className="process-container">

        {/* HEADER */}
        <motion.h2 variants={fadeUp}>How We Work</motion.h2>

        <motion.p
          className="process-subtitle"
          variants={fadeUp}
        >
          A simple, proven process designed to deliver results
        </motion.p>

        {/* GRID */}
        <motion.div className="process-grid" variants={container}>

          {/* STEP 1 */}
          <motion.div
            className="process-card"
            variants={fadeUp}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <span className="step-number">01</span>

            <div className="process-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>

            <h3>Understand Your Business</h3>
            <p>
              Deep dive into your goals, audience, and competitive landscape.
            </p>
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            className="process-card"
            variants={fadeUp}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <span className="step-number">02</span>

            <div className="process-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="2"/>
                <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>

            <h3>Build Custom Growth Plan</h3>
            <p>
              Tailored strategy designed specifically for your objectives.
            </p>
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            className="process-card"
            variants={fadeUp}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <span className="step-number">03</span>

            <div className="process-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 19l3-1 7-7-2-2-7 7-1 3z" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 3l7 7" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>

            <h3>Execute & Optimize Campaigns</h3>
            <p>
              Launch campaigns and continuously refine for peak performance.
            </p>
          </motion.div>

          {/* STEP 4 */}
          <motion.div
            className="process-card"
            variants={fadeUp}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <span className="step-number">04</span>

            <div className="process-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <line x1="4" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
                <line x1="7" y1="16" x2="7" y2="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="16" x2="12" y2="6" stroke="currentColor" strokeWidth="2"/>
                <line x1="17" y1="16" x2="17" y2="12" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>

            <h3>Measure, Report & Scale</h3>
            <p>
              Track results, share insights, and scale what works.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
}
