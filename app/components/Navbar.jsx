import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/components/navbar_desktop.module.scss";

// ASSET IMPORTS
import logo from "@/public/images/logo.png";
import logoText from "@/public/images/logo_text.png";

export default function Navbar({
  headerRef,
  historyLinkRef,
  teamLinkRef,
  logoTextRef,
}) {
  return (
    <header id={styles.header} ref={headerRef}>
      <nav className={styles.nav_desktop}>
        <div className={styles.nav_container}>
          <div className={styles.nav_image_container}>
            <Image
              className={styles.logo_image}
              src={logo}
              alt='Los Angeles Mountains logo'
            />
            <Image
              className={styles.logo_text}
              src={logoText}
              alt='Los Angeles Mountains logo text'
              ref={logoTextRef}
            />
          </div>
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
