import { useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/HomePage";
import SideBar from "../components/SideBar";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const showSideBar = useMediaQuery("(max-width:600px)");
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
      <div className={styles.hp}>
        <HomePage />
      </div>
    </div>
  );
};

export default Home;
