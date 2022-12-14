import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import styles from "./Background2.module.scss";
const Background2 = () => {
  const { width, height } = useWindowDimensions();
  const showCurve = useMediaQuery("(max-width:800px)");
  return (
    <svg
      id="visual"
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <g className={styles.g1} transform={`translate(${width},-20)`}>
        <motion.path
          d="M0 486C-62.2 473.8 -124.5 461.5 -181.4 437.9C-238.3 414.3 -289.9 379.3 -336.6 336.6C-383.2 293.8 -424.9 243.4 -449 186C-473.1 128.6 -479.5 64.3 -486 0L0 0Z"
          fill="#da3f67"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        ></motion.path>
      </g>

      {!showCurve && (
        <g className={styles.g2} transform={`translate(0, ${height})`}>
          <motion.path
            d="M0 -486C73 -488.3 146 -490.7 186 -449C226 -407.3 233 -321.6 274.4 -274.4C315.7 -227.1 391.4 -218.4 432.4 -179.1C473.4 -139.8 479.7 -69.9 486 0L0 0Z"
            fill="#da3f67"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
          ></motion.path>
        </g>
      )}
    </svg>
  );
};

export default Background2;
