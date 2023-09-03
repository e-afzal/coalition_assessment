import Image from "next/image";

// STYLES
import styles from "@/public/styles/components/footer.module.scss";

// ASSET IMPORT
import logo from "@/public/images/logo-footer_text.png";

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.logo_container}>
          <Image src={logo} alt='Los Angeles Mountains logo' />
        </div>
        <div className={styles.copyright_content}>
          <p>copyright 2016. all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
