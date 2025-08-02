import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";
import styles from "./rose.module.css";
import Image from "next/image";
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>ROSIE ABOUT</title>
      </Head>
      <div className={styles.wrapperRoseAbout}>
        <div className={styles.aboutImage}>
          <Image
            priority
            src="/images/roseAbout.jpg"
            width={300}
            height={500}
            alt=""
          ></Image>
        </div>
        <div className={styles.roseAboutText}>
          <h1>ROSIE</h1>
          <p>
            Rosé stands out as BLACKPINK’s main vocalist, celebrated for her
            ethereal tone and emotional depth. An apt and versatile singer, she
            captivates with her ability to convey raw feeling through every
            note.
            <p>
              Her solo debut “On The Ground” shattered global records, and she
              quickly became the first K-pop female soloist to top Billboard’s
              Global chart. Beyond music, Rosé is a fashion icon — a global
              ambassador for YSL and Tiffany & Co., and a frequent face on
              high-end magazine covers.
            </p>
            <p>
              Graceful, gifted, and globally adored — Rosé continues to redefine
              what it means to be a global pop artist.{" "}
            </p>
          </p>
        </div>
      </div>
      <div className={styles.wrapperRoseAboutMobile}>
        <div class={styles.imageMobileContainer}>
          <div className={styles.aboutImage}>
            <Image
              priority
              src="/images/roseAbout.jpg"
              width={150}
              height={300}
              alt=""
            ></Image>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.roseAboutText}>
            <h1>ROSIE</h1>
            <p>
              Rosé stands out as BLACKPINK’s main vocalist, celebrated for her
              ethereal tone and emotional depth. An apt and versatile singer,
              she captivates with her ability to convey raw feeling through
              every note.
              <p>
                Her solo debut “On The Ground” shattered global records, and she
                quickly became the first K-pop female soloist to top Billboard’s
                Global chart. Beyond music, Rosé is a fashion icon — a global
                ambassador for YSL and Tiffany & Co., and a frequent face on
                high-end magazine covers.
              </p>
              <p>
                Graceful, gifted, and globally adored — Rosé continues to
                redefine what it means to be a global pop artist.{" "}
              </p>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
