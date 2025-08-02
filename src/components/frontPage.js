import { useEffect, useRef } from "react";
import styles from "./frontPage.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Frontpage() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        wrapper.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      } else if (e.key === "ArrowUp") {
        wrapper.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
      }
    };

    // Make wrapper focusable and add key listener
    wrapper.setAttribute("tabindex", "0");
    wrapper.addEventListener("keydown", handleKeyDown);

    // Optional: autofocus on wrapper
    wrapper.focus();

    return () => {
      wrapper.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <section className={`${styles.section} ${styles.introductionImage}`}>
        <div className={styles.intro}>
          <h1 className={styles.textDesktop}>
            Welcome to BLACKPINK Streaming Platform
          </h1>
          <h3 className={styles.paraDesktop}>
            Blackpink is a South Korean girl group formed by YG Entertainment.
            The group is composed of four members: Jisoo, Jennie, Rosé, and
            Lisa. Regarded by various publications as the &quot;biggest girl
            group in the world&quot;, they are recognized as a leading force in
            the Korean Wave and an ambassador of the &quot;girl crush &quot;
            concept in K-pop, which explores themes of self-confidence and
            female empowerment. The group’s name may seem simple on the surface,
            but it holds a deeper message. The pairing of the contrasting colors
            encapsulates the group’s attitude, aesthetic, and sound — bold and
            confident with an underlying sweetness.
          </h3>
          <h1 className={styles.textMobile}>
            Welcome to BLACKPINK Streaming Platform
          </h1>
          <h3 className={styles.paraMobile}>
            Blackpink is a South Korean girl group formed by YG Entertainment.
            The group is composed of four members: Jisoo, Jennie, Rosé, and
            Lisa. Regarded by various publications as the &quot;biggest girl
            group in the world&quot;, they are recognized as a leading force in
            the Korean Wave and an ambassador of the &quot;girl crush &quot;
            concept in K-pop, which explores themes of self-confidence and
            female empowerment. The group’s name may seem simple on the surface,
            but it holds a deeper message. The pairing of the contrasting colors
            encapsulates the group’s attitude, aesthetic, and sound — bold and
            confident with an underlying sweetness.
          </h3>
        </div>
      </section>

      <div className={styles.artistInfo}>
        <div className={styles.artistflexContainer}>
          <Link href="about/jisoo">
            <section className={`${styles.image} ${styles.jisooIntroImage}`}>
              <h1 className={styles.heading}>JISOO</h1>
            </section>
          </Link>
          <Link href="about/jennie">
            <section className={`${styles.image} ${styles.jennieIntroImage}`}>
              <h1 className={styles.heading}>JENNIE</h1>
            </section>
          </Link>
        </div>
        <div className={styles.artistflexContainer}>
          <Link href="about/rose">
            <section className={`${styles.image} ${styles.roseIntroImage}`}>
              <h1 className={styles.heading}>ROSIE</h1>
            </section>
          </Link>
          <Link href="about/lisa">
            <section className={`${styles.image} ${styles.lisaIntroImage}`}>
              <h1 className={styles.heading}>LISA</h1>
            </section>
          </Link>
        </div>
      </div>
      <div className={styles.artistInfo}>
        <div className={`${styles.content}`}>
          <div className={styles.aboutImage}>
            <Image
              priority
              src="/images/about.jpg"
              width={500}
              height={300}
              alt=""
            ></Image>
          </div>
          <div className={styles.pageAboutText}>
            <h3>
              This is not just a page — it is a movement. A heartfelt tribute
              built by the unwavering love of fans who breathe the rhythm of
              BLACKPINK. It is a digital haven, where BLINKs from every corner
              of the globe come together to celebrate, connect, and create. From
              the glowing streets of Seoul to the quiet corners of distant
              towns, this platform brings us all under one banner of music,
              strength, and sisterhood.{" "}
            </h3>
          </div>
        </div>
        <div class={`${styles.content}`}>
          <div className={styles.pageAboutText}>
            <h3>
              Here, we don’t just admire BLACKPINK — we live their journey. We
              relive their iconic moments, amplify their voices, and share in
              the passion that unites millions. Whether you’ve been a BLINK
              since debut or just joined the pink wave, this space is yours —
              built for you, by you. Together, we are more than fans. We are a
              family. One heart. One voice. One love — BLACKPINK.
            </h3>
          </div>
          <div className={styles.aboutImage}>
            <Image
              priority
              src="/images/create.jpg"
              width={500}
              height={300}
              alt=""
            ></Image>
          </div>
        </div>
        <div className={`${styles.contentMobile}`}>
          <div className={styles.pageAboutText}>
            <h3>
              This is not just a page — it is a movement. A heartfelt tribute
              built by the unwavering love of fans who breathe the rhythm of
              BLACKPINK. It is a digital haven, where BLINKs from every corner
              of the globe come together to celebrate, connect, and create. From
              the glowing streets of Seoul to the quiet corners of distant
              towns, this platform brings us all under one banner of music,
              strength, and sisterhood.{" "}
            </h3>
          </div>
        </div>
        <div class={`${styles.contentMobile}`}>
          <div className={styles.pageAboutText}>
            <h3>
              Here, we don’t just admire BLACKPINK — we live their journey. We
              relive their iconic moments, amplify their voices, and share in
              the passion that unites millions. Whether you’ve been a BLINK
              since debut or just joined the pink wave, this space is yours —
              built for you, by you. Together, we are more than fans. We are a
              family. One heart. One voice. One love — BLACKPINK.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
