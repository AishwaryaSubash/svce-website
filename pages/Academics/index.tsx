import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../components/SideBar";
import Head from "next/head";

import styles from "./Academics.module.scss";
import Department from "../../components/Department";

import { FaShip } from "react-icons/fa";
import { IoIosFlask } from "react-icons/io";
import { FcElectronics, FcAutomotive } from "react-icons/fc";
import {
  GiElectric,
  GiMicroscope,
  GiChemicalDrop,
  GiBookmark,
} from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";
import { MdEngineering } from "react-icons/md";
import { TbMathSymbols } from "react-icons/tb";
import { DiAtom } from "react-icons/di";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

const Academics = () => {
  const [dept, setDept] = useState<number>(-1);
  const scroll = useRef() as React.MutableRefObject<HTMLInputElement>;
  const matches = useMediaQuery("(max-width:700px)");
  const showSideBar = useMediaQuery("(max-width:600px)");
  const selectDepartment = (id: number) => {
    setDept(id);
  };
  useEffect(() => {
    if (dept !== -1) {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [dept]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sri Venkateswara College of Engineering</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      {!showSideBar && <div className={styles.emptyForAReason}></div>}
      <div className={styles.innerContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.departmentC}>
            <motion.div
              className={styles.dept}
              initial={
                matches
                  ? { x: -200, y: 0, opacity: 0.5 }
                  : { y: -200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.1 }}
              onClick={() => selectDepartment(0)}
            >
              <div className={styles.icon}>
                <IoIosFlask />
              </div>
              <div className={styles.content}> Applied Chemistry </div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: 200, y: 0, opacity: 0.5 }
                  : { y: 200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.2 }}
              className={styles.dept}
              onClick={() => selectDepartment(1)}
            >
              <div className={styles.icon}>
                <TbMathSymbols />
              </div>
              <div className={styles.content}> Applied Mathematics </div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: -200, y: 0, opacity: 0.5 }
                  : { y: -200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.3 }}
              className={styles.dept}
              onClick={() => selectDepartment(2)}
            >
              <div className={styles.icon}>
                <DiAtom />
              </div>
              <div className={styles.content}> Applied Physics </div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: 200, y: 0, opacity: 0.5 }
                  : { y: 200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.4 }}
              className={styles.dept}
              onClick={() => selectDepartment(3)}
            >
              <div className={styles.icon}>
                <FcAutomotive />
              </div>
              <div className={styles.content}> Automobile Engineering </div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: -200, y: 0, opacity: 0.5 }
                  : { y: -200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.5 }}
              className={styles.dept}
              onClick={() => selectDepartment(4)}
            >
              <div className={styles.icon}>
                <GiMicroscope />
              </div>
              <div className={styles.content}> Biotechnology </div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: 200, y: 0, opacity: 0.5 }
                  : { y: 200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.6 }}
              className={styles.dept}
              onClick={() => selectDepartment(5)}
            >
              <div className={styles.icon}>
                <GiChemicalDrop />
              </div>
              <div className={styles.content}> Chemical Engineering </div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: -200, y: 0, opacity: 0.5 }
                  : { y: -200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.7 }}
              className={styles.dept}
              onClick={() => selectDepartment(6)}
            >
              <div className={styles.icon}>
                <BiBuildingHouse />
              </div>
              <div className={styles.content}> Civil Engineering </div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: 200, y: 0, opacity: 0.5 }
                  : { y: 200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.8 }}
              className={styles.dept}
              onClick={() => selectDepartment(7)}
            >
              <div className={styles.icon}>
                <RiComputerLine />
              </div>
              <div className={styles.content}>Computer Science Engineering</div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: -200, y: 0, opacity: 0.5 }
                  : { y: -200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 1 }}
              className={styles.dept}
              onClick={() => selectDepartment(8)}
            >
              <div className={styles.icon}>
                <FcElectronics />
              </div>
              <div className={styles.content}>
                Electrical &amp; Electronics Engineering
              </div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: 200, y: 0, opacity: 0.5 }
                  : { y: 200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 1.1 }}
              className={styles.dept}
              onClick={() => selectDepartment(9)}
            >
              <div className={styles.icon}>
                <GiElectric />
              </div>
              <div className={styles.content}>
                Electronics &amp; Communication Engineering
              </div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: -200, y: 0, opacity: 0.5 }
                  : { y: -200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 1.2 }}
              className={styles.dept}
              onClick={() => selectDepartment(10)}
            >
              <div className={styles.icon}>
                <GiBookmark />
              </div>
              <div className={styles.content}>
                Humanities &amp; Social Sciences
              </div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: 200, y: 0, opacity: 0.5 }
                  : { y: 200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 1.3 }}
              className={styles.dept}
              onClick={() => selectDepartment(11)}
            >
              <div className={styles.icon}>
                <GrCloudComputer />
              </div>
              <div className={styles.content}> Information Technology </div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: -200, y: 0, opacity: 0.5 }
                  : { y: -200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 1.4 }}
              className={styles.dept}
              onClick={() => selectDepartment(12)}
            >
              <div className={styles.icon}>
                <MdEngineering />
              </div>
              <div className={styles.content}> Mechanical Engineering </div>
            </motion.div>
            <motion.div
              initial={
                matches
                  ? { x: 200, y: 0, opacity: 0.5 }
                  : { y: 200, x: 0, opacity: 0.5 }
              }
              animate={
                matches
                  ? { x: 0, y: 0, opacity: 1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 1.5 }}
              className={styles.dept}
              onClick={() => selectDepartment(13)}
            >
              <div className={styles.icon}>
                <FaShip />
              </div>
              <div className={styles.content}> Marine Engineering </div>
            </motion.div>
          </div>
        </div>
        <div ref={scroll}></div>
        <div>{dept != -1 ? <Department select={dept} /> : null} </div>
      </div>
    </div>
  );
};

export default Academics;
