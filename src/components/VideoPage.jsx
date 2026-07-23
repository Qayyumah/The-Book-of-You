import "../styles/VideoPage.css";
import { motion } from "framer-motion";

export default function VideoPage({
  title,
  subtitle,
  video,
}) {
  return (
    <section className="video-page">
      <motion.div
        className="video-wrapper"
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        <p className="video-chapter">
          A Moment Worth Remembering
        </p>

        <h1>{title}</h1>

        <p className="video-text">
          {subtitle}
        </p>

        <div className="video-card">
          <video
            controls
            muted
            playsInline
            preload="metadata"
          >
            <source
              src={video}
              type="video/mp4"
            />

            Your browser does not support videos.
          </video>
        </div>
      </motion.div>
    </section>
  );
}