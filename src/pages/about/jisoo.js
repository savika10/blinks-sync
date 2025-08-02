import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";
import styles from "./jisoo.module.css";
import Image from "next/image";
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>JISOO ABOUT</title>
      </Head>
      <div className={styles.wrapperJisooAbout}>
        <div className={styles.aboutImage}>
          <Image
            priority
            src="/images/JisooAbout.jpg"
            width={300}
            height={500}
            alt=""
          ></Image>
        </div>
        <div className={styles.jisooAboutText}>
          <h1>JISOO</h1>
          <p>
            JISOO, who debuted with BLACKPINK in 2016, is a multi-talented
            artist, shining both as a singer and actress.
          </p>
          <p>
            She is recognized not only for her contributions to the group but
            also for her successful solo career, earning multiple awards in
            music and acting.
          </p>
          <p>
            Now established as a icon, JISOO continues to broaden her influence
            into the realms of fashion, beauty, and beyond.
          </p>
        </div>
      </div>
      <div className={styles.wrapperJisooAboutMobile}>
        <div class={styles.imageMobileContainer}>
          <div className={styles.aboutImage}>
            <Image
              priority
              src="/images/JisooAbout.jpg"
              width={150}
              height={300}
              alt=""
            ></Image>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.jisooAboutText}>
            <h1>JISOO</h1>
            <p>
              JISOO, who debuted with BLACKPINK in 2016, is a multi-talented
              artist, shining both as a singer and actress.
            </p>
            <p>
              She is recognized not only for her contributions to the group but
              also for her successful solo career, earning multiple awards in
              music and acting.
            </p>
            <p>
              Now established as a icon, JISOO continues to broaden her
              influence into the realms of fashion, beauty, and beyond.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
