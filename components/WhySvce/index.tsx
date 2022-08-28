import React from "react";
import Image from "next/image";
import styles from "./WhySvce.module.scss";
import { motion } from "framer-motion";
const WhySvce = ({
  delay,
  height,
  picture,
  text,
  bgColor,
  fontSize,
  x,
  y,
  duration,
}: {
  delay: number;
  height: string;
  picture: string;
  text: string;
  bgColor: string;
  fontSize: number;
  x: number;
  y: number;
  duration: number;
}) => {
  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragElastic={0.06}
      className={styles.outerContainer}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      style={{ height, background: bgColor, borderRadius: "20px" }}
    >
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={picture}
            width={100}
            height={100}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <p style={{ fontSize }} className={styles.text}>
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WhySvce;
