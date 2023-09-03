import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/components/navbar_desktop.module.scss";

// ASSET IMPORTS
import logo from "@/public/images/logo.png";

export default function Navbar({ headerRef, historyLinkRef, teamLinkRef }) {
  const navLinks = [
    { title: "01. history", url: "#history" },
    { title: "02. team", url: "#climb" },
  ];

  return (
    <header id={styles.header} ref={headerRef}>
      <nav className={styles.nav_desktop}>
        <div className={styles.nav_container}>
          <Image src={logo} alt='Los Angeles Mountains logo' />
          <ul className={styles.nav_links}>
            <li>
              <Link href={"#history"} ref={historyLinkRef}>
                01. history
              </Link>
            </li>
            <li>
              <Link href={"#climb"} ref={teamLinkRef}>
                02. team
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
