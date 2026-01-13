import "./ClientsWork.css";
import { motion } from "framer-motion";

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
      "For Aurum, a corporate bulk gifting brand, Viral Marketing Trends created content strategies for Instagram, Facebook, and LinkedIn. Each platform received customized content ideas based on audience behavior and business goals. Our planning focused on showcasing product variety, corporate relevance, and gifting solutions for businesses"
  },
  {
    title: "Xinglin",
    subtitle: "Industrial Products Company",
    desc:
      "For Xinglin, an industrial products company, Viral Marketing Trends contributed to building nearly 40% of their website. Our focus was on creating a clear, structured, and professional digital platform that showcased their products effectively. We worked on organizing content, improving layout flow, and ensuring the website supported both user experience and business goals. "
  },
  {
    title: "Yetiply",
    subtitle: "Furniture Brand",
    desc:
      "Viral Marketing Trends managed Yetiply’s Instagram content planning with a strategy-first approach. Our team created a detailed content calendar along with creative post and reel ideas that highlighted product durability and brand values. After finalizing the content direction, we developed AI-powered advertisements to increase reach and engagement."
  },
  {
    title: "Reenita Malhotra Hora",
    subtitle: "Author | Ace of Blades",
    desc:
      "For the launch of Ace of Blades, we created a complete digital content strategy for December and January. This included a structured content calendar, engaging reel scripts, and algorithm-focused storytelling content that highlighted her journey as an author while authentically promoting her book. The approach ensured consistent visibility, engagement, and a strong personal brand presence."
  },
  {
    title: "Rupeen Popat",
    subtitle: "Author | Satyavati",
    desc:
      "We worked closely with Rupeen Popat to build a visually engaging digital presence for Satyavati. Our team developed creative content ideas and conducted a professional shoot at Hotel Taj to capture premium visuals aligned with his author identity. These visuals were used across posts and reels to communicate his story more effectively and connect emotionally with his audience."
  },
  {
    title: "Rajesh Dhobre",
    subtitle: "IRS Officer | Personal Branding",
    desc:
      "We supported Rajesh Dhobre’s personal branding with carefully curated content ideas and social media planning. The strategy focused on professionalism, authenticity, and clarity, ensuring a respectful and trustworthy digital presence aligned with his public role and leadership values."
  }
];

/* Animations */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
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
        Real results delivered through strategy, creativity, and thoughtful execution.
      </motion.p>

      {/* CARDS */}
      <motion.div className="clients-grid" variants={container}>
        {works.map((item, i) => (
          <motion.div
            className="client-card"
            key={i}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>{item.title}</h3>
            <span>{item.subtitle}</span>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
