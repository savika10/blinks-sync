import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";
import styles from "./jennie.module.css";
import Image from "next/image";
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>JENNIE ABOUT</title>
      </Head>
      <div className={styles.wrapperJennieAbout}>
        <div className={styles.aboutImage}>
          <Image
            priority
            src="/images/jennieAbout.jpg"
            width={300}
            height={500}
            alt=""
          ></Image>
        </div>
        <div className={styles.jennieAboutText}>
          <h1>JENNIE</h1>
          <p>
            DEBUTED IN 2016 AS A MEMBER OF BLACKPINK, JENNIE IS ONE OF THE MOST
            INFLUENTIAL ARTISTS OF THE ERA. SHE IS A SINGER, RAPPER, ACTOR, AND
            FASHION ICON WITH GLOBAL INFLUENCE.
          </p>
          <p>
            OTHER THAN HER WORLD RECORD-BREAKING CAREER AS BLACKPINK, SHE BECAME
            THE FIRST KOREAN FEMALE SOLO ARTIST TO TOP ITUNES WORLDWIDE SONG
            CHART WITH HER SOLO SINGLE ‘SOLO’ IN 2018, HIT NO.1 ON BILLBOARD’S
            WORLD DIGITAL SONG SALES CHART, AND EARNED NUMEROUS ACCOLADES AS
            WELL.
          </p>
        </div>
      </div>
      <div className={styles.wrapperJennieAboutMobile}>
        <div class={styles.imageMobileContainer}>
        <div className={styles.aboutImage}>
          <Image
            priority
            src="/images/jennieAbout.jpg"
            width={150}
            height={300}
            alt=""
          ></Image>
        </div>
        </div>
        <div className={styles.textContainer}>
        <div className={styles.jennieAboutText}>
          <h1>JENNIE</h1>
          <p>
            DEBUTED IN 2016 AS A MEMBER OF BLACKPINK, JENNIE IS ONE OF THE MOST
            INFLUENTIAL ARTISTS OF THE ERA. SHE IS A SINGER, RAPPER, ACTOR, AND
            FASHION ICON WITH GLOBAL INFLUENCE.
          </p>
          <p>
            OTHER THAN HER WORLD RECORD-BREAKING CAREER AS BLACKPINK, SHE BECAME
            THE FIRST KOREAN FEMALE SOLO ARTIST TO TOP ITUNES WORLDWIDE SONG
            CHART WITH HER SOLO SINGLE ‘SOLO’ IN 2018, HIT NO.1 ON BILLBOARD’S
            WORLD DIGITAL SONG SALES CHART, AND EARNED NUMEROUS ACCOLADES AS
            WELL.
          </p>
        </div>
        </div>
      </div>
    </Layout>
  );
}
