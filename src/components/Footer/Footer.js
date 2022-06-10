import React from "react";
import styles from "./Footer.module.scss";
import footerImage from "../../assets/footerImage.png";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <img src={footerImage} alt={footerImage} />
      <div className={styles.content_box}>
        <div className={styles.content}>
          <span className={styles.bold}>İletişim</span>
          <span>
            Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi
            D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
          </span>
        </div>

        <span className={styles.bold}>Email: bilgi@tesodev.com</span>
      </div>
      <iframe
        title="location"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        width="400"
        height="200"
        src="https://maps.google.com/maps?q=41.00270064125843,
                        28.70276338212579&amp;hl=es;z=14&amp;output=embed"
        className="contact-iframe"
      ></iframe>
    </div>
  );
}
