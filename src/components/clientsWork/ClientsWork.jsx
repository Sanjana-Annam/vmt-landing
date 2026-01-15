import "./ClientsWork.css";
import { motion, useReducedMotion } from "framer-motion";

/* =======================
   DATA
======================= */

const works = [
  {
    title: "Hightech Albums",
    subtitle: "Printing & Digital Solutions",
    desc:
      "Hightech Albums has a large and detailed website, and Viral Marketing Trends supported the brand through Meta Ads and performance marketing. Our team created targeted advertising campaigns to improve visibility, engagement, and conversions. We focused on reaching the right audience while maintaining the brand’s professional image."
  },
  {
    title: "Ali Zaidi",
    subtitle: "Business Professional",
    desc:
      "Viral Marketing Trends developed a structured LinkedIn content calendar for Ali Zaidi along with post ideas that aligned with his professional goals. Our team focused on building authority, visibility, and clarity in his personal brand communication. In addition to LinkedIn strategy, we also worked on his website to ensure consistency across all digital platforms."
  },
  {
    title: "Aurum",
    subtitle: "Corporate Gifting Brand",
    desc:
      "For Aurum, a corporate bulk gifting brand, Viral Marketing Trends created content strategies for Instagram, Facebook, and LinkedIn. Each platform received customized content ideas based on audience behavior and business goals. Our planning focused on showcasing product variety, corporate relevance, and gifting solutions for businesses."
  },
  {
    title: "Xinglin",
    subtitle: "Industrial Products Company",
    desc:
      "For Xinglin, an industrial products company, Viral Marketing Trends contributed to building nearly 40% of their website. Our focus was on creating a clear, structured, and professional digital platform that showcased their products effectively."
  },
  {
    title: "Yetiply",
    subtitle: "Furniture Brand",
    desc:
      "Viral Marketing Trends managed Yetiply’s Instagram content planning with a strategy-first approach. Our team created a detailed content calendar along with creative post and reel ideas that highlighted product durability and brand values."
  },
  {
    title: "Reenita Malhotra Hora",
    subtitle: "Author | Ace of Blades",
    desc:
      "For the launch of Ace of Blades, we created a complete digital content strategy including content calendars, engaging reel scripts, and storytelling posts that built visibility and reader interest."
  },
  {
    title: "Rupeen Popat",
    subtitle: "Author | Satyavati",
    desc:
      "We built a visually engaging digital presence for Satyavati with professional content and a premium shoot at Hotel Taj, used across reels and posts."
  },
  {
    title: "Rajesh Dhobre",
    subtitle: "IRS Officer | Personal Branding",
    desc:
      "We supported Rajesh Dhobre’s personal branding with curated content ideas and social media planning that focused on professionalism and trust."
  }
];

/* =======================
   ANIMATIONS
======================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      delay: i * 0.05 // 👈 mobile-safe delay
    }
  })
};

/* =======================
   COMPONENT
======================= */

export default function ClientsWork() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="clients-work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // ✅ MOBILE FIX
    >
      {/* HEADER */}
      <motion.h2 variants={fadeUp}>
        What We’ve Done For Our Clients
      </motion.h2>

      <motion.p className="clients-subtitle" variants={fadeUp}>
        Real results delivered through strategy, creativity, and thoughtful execution.
      </motion.p>

      {/* CARDS */}
      <div className="clients-grid">
        {works.map((item, i) => (
          <motion.div
            key={i}
            className="client-card"
            custom={i}
            variants={fadeUp}
            whileHover={
              reduceMotion ? undefined : { y: -8 }
            } // ❌ hover disabled on mobile
          >
            <h3>{item.title}</h3>
            <span>{item.subtitle}</span>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
