import "./WhyChooseUs.css";
import { motion } from "framer-motion";

const features = [
  {
    title: "Performance-Driven Growth",
    desc: "Results that matter, backed by data and continuous optimization.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M14 4h7v7" />
      </svg>
    )
  },
  {
    title: "Full-Service Digital Marketing",
    desc: "Complete solutions from strategy to execution across all channels.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    title: "Transparent Reporting & ROI",
    desc: "Clear metrics and honest communication every step of the way.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M4 19V5" />
        <path d="M10 19V9" />
        <path d="M16 19V3" />
      </svg>
    )
  },
  {
    title: "Creative + Data-Backed Strategy",
    desc: "Perfect blend of innovative ideas and analytical insights.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12c.7.6 1 1.2 1 2h6c0-.8.3-1.4 1-2a7 7 0 0 0-4-12z" />
      </svg>
    )
  },
  {
    title: "Dedicated Account Team",
    desc: "Your success is our priority with hands-on expert support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c1.5-4 14.5-4 16 0" />
      </svg>
    )
  },
  {
    title: "Proven Track Record",
    desc: "Trusted by brands across industries to drive real growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <circle cx="12" cy="8" r="5" />
        <path d="M8 14l-1 8 5-3 5 3-1-8" />
      </svg>
    )
  }
];

/* Animation Variants */
const sectionVariants = {
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
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WhyChooseUs() {
  return (
    <motion.section
      className="why-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      {/* HEADER */}
      <motion.div className="why-header" variants={fadeUp}>
        <h2>Why Choose Viral Marketing Trends</h2>
        <p>
          We combine strategic thinking with flawless execution to deliver
          measurable results.
        </p>
      </motion.div>

      {/* CARDS */}
      <motion.div className="why-grid" variants={sectionVariants}>
        {features.map((item, i) => (
          <motion.div
            className="why-card"
            key={i}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <motion.div
              className="why-icon"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 260 }}
            >
              {item.icon}
            </motion.div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
