import { motion, useScroll } from "framer-motion";

import "../styles/ScrollProgress.css";

export default function ScrollProgress() {

    const { scrollYProgress } = useScroll();

    return (

        <motion.div

            className="scroll-progress"

            style={{

                scaleX: scrollYProgress

            }}

        />

    )

}