import "../styles/Gallery.css";

import { motion } from "framer-motion";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Gallery({
  title,
  caption,
  description,
  images,
}) {
  return (
    <section className="gallery-page">

      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <p className="chapter">
          {title}
        </p>

        <h1>{caption}</h1>

        <p className="description">
          {description}
        </p>

      </motion.div>

      <PhotoProvider>

        <div className="gallery-grid">

          {images.map((image, index) => (

            <motion.div

              key={index}

              className={`photo-card card-${(index % 6) + 1}`}

              initial={{
                opacity: 0,
                y: 60,
                rotate: -5
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0
              }}

              transition={{
                duration: .7,
                delay: index * .15
              }}

              viewport={{
                once: true
              }}

            >

              <PhotoView src={image}>

                <img

                  src={image}

                  alt={`Memory ${index + 1}`}

                />

              </PhotoView>

            </motion.div>

          ))}

        </div>

      </PhotoProvider>

    </section>
  );
}