import Link from "next/link";
import styles from "./sideBar.module.css";
import { FaHome } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { FaInfo } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      {/* <h3 className={styles.heading}>Browse</h3> */}
      <ul className={styles.menu}>
        <li>
          <Link href="/" onClick={toggleSidebar} className={styles.field}>
            <FaHome className={styles.icon} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/" onClick={toggleSidebar} className={styles.field}>
            <BiSolidVideos className={styles.icon} />
            <span>Videos</span>
          </Link>
        </li>
        <li>
          <Link href="/" onClick={toggleSidebar} className={styles.field}>
            <FaInfo className={styles.icon} />
            <span>Members Info</span>
          </Link>
        </li>
        <li>
          <Link href="/" onClick={toggleSidebar} className={styles.field}>
            <IoCreateSharp className={styles.icon} />
            <span>Create</span>
          </Link>
        </li>
        <li>
          <Link href="/" onClick={toggleSidebar} className={styles.field}>
            <FaRegLightbulb className={styles.icon} />
            <span>About</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
