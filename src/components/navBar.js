import { useState } from "react";
import Link from "next/link";
import styles from "./navBar.module.css";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Sidebar from "./sideBar";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

export default function Navbar() {
  //custom component should always be in capital because small letter can me misjudged as html element
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const handleLanguageChange = (e) => setLanguage(e.target.value);
  return (
    <>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <nav className={styles.navbar}>
        {/* Burger menu for mobile */}
        <div className={styles.burger} onClick={toggleSidebar}>
          <FaBars />
        </div>
        <Link href="/" className={styles.logo}>
          <Image
            priority
            src="/images/logo.jpg"
            width={140}
            height={50}
            alt=""
          ></Image>
        </Link>
        {/* Desktop nav links */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <FaSearch />
          </button>
        </div>
        <div className={styles.buttonClass}>
          <button className={styles.button}>
            <IoMdAdd />
            <span className={styles.createText}>Create</span>
          </button>
        </div>

        <div className={styles.languageSelector}>
          <select
            value={language}
            onChange={handleLanguageChange}
            className={styles.languageDropdown}
          >
            <option value="English">ENGLISH</option>
            <option value="Hindi">HINDI</option>
            <option value="Korean">KOREAN</option>
            <option value="French">FRENCH</option>
          </select>
        </div>
        <div className={styles.languageSelectorForMobile}>
          <select
            value={language}
            onChange={handleLanguageChange}
            className={styles.languageDropdown}
          >
            <option value="English">EN</option>
            <option value="Hindi">HN</option>
            <option value="Korean">KO</option>
            <option value="French">FR</option>
          </select>
        </div>
        <div className={styles.buttonClass}>
          <button className={styles.button}>Login</button>
        </div>
      </nav>
    </>
  );
}
