import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";
import styles from "./lisa.module.css";
import Image from "next/image";
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>LISA ABOUT</title>
      </Head>
      <div className={styles.wrapperLisaAbout}>
        <div className={styles.aboutImage}>
          <Image
            priority
            src="/images/lisaAbout.jpg"
            width={300}
            height={500}
            alt=""
          ></Image>
        </div>
        <div className={styles.lisaAboutText}>
          <h1>LISA</h1>
          <p>
            LISA, renowned as a member of BLACKPINK, transcends the group with
            her global impact in music and fashion.{" "}
          </p>
          <p>
            Holding multiple Guinness World Records, LISA&aposs achievements are
            unparalleled. She&aposs the first female solo artist in K-pop to win
            &apos Best K-pop Artist &apos at the MTV Music Video Awards and
            Europe Music Awards and the first to exceed a billion Spotify
            streams.{" "}
          </p>
          <p>
            Continuously pushing boundaries, LISA&aposs journey is a testament
            to her influence in the ever-evolving world of global entertainment.
          </p>
        </div>
      </div>
      <div className={styles.wrapperLisaAboutMobile}>
        <div class={styles.imageMobileContainer}>
          <div className={styles.aboutImage}>
            <Image
              priority
              src="/images/lisaAbout.jpg"
              width={150}
              height={300}
              alt=""
            ></Image>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.lisaAboutText}>
            <h1>LISA</h1>
            <p>
              LISA, renowned as a member of BLACKPINK, transcends the group with
              her global impact in music and fashion.{" "}
            </p>
            <p>
              Holding multiple Guinness World Records, LISA&aposs achievements
              are unparalleled. She&aposs the first female solo artist in K-pop
              to win &apos Best K-pop Artist &apos at the MTV Music Video Awards
              and Europe Music Awards and the first to exceed a billion Spotify
              streams.{" "}
            </p>
            <p>
              Continuously pushing boundaries, LISA&aposs journey is a testament
              to her influence in the ever-evolving world of global
              entertainment.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
