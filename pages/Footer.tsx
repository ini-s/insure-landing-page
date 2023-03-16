import styles from "../styles/Footer.module.css"
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.footer}>
             <Image
                className={styles.bgFooterMobile}
                src="/images/bg-pattern-footer-mobile.png"
                alt="bg-pattern-footer-mobile"
                width={374}
                height={173}
            />
            <Image
                className={styles.logo}
                src="/images/logo.png"
                alt="logo"
                width={112}
                height={18}
            />
            <div className={styles.footerIcons}>
                <Image
                    className={styles.icon}
                    src="/images/icon-facebook.png"
                    alt="icon-facebook"
                    width={24}
                    height={24}
                />
                <Image
                    className={styles.icon}
                    src="/images/icon-twitter.png"
                    alt="icon-twitter"
                    width={24}
                    height={20}
                />
                <Image
                    className={styles.icon}
                    src="/images/icon-pinterest.png"
                    alt="icon-pinterest"
                    width={24}
                    height={24}
                />
                <Image
                    className={styles.icon}
                    src="/images/icon-instagram.png"
                    alt="icon-instagram"
                    width={24}
                    height={24}
                />
            </div>
            <div className={styles.line}></div>
            <ul className={styles.nav}>
                <li>
                    <p className={styles.p}>
                        Our company
                    </p>
                    <ul>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}> How we work</a>
                        </li>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>Why Insure?</a>
                        </li>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>View plans</a>
                        </li>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>Reviews</a>
                        </li>
                    </ul>
                    <p className={styles.p}>
                        Help me
                    </p>
                    <ul>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>FAQ</a>
                        </li>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>Terms of use</a>
                        </li>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>Privacy policy</a>
                        </li>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>Cookies</a>
                        </li>
                    </ul>
                    <p className={styles.p}>
                        Contact
                    </p>
                    <ul>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>Sales</a>
                        </li>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>Support</a>
                        </li>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>Live chat</a>
                        </li>
                    </ul>
                    <p className={styles.p}>
                        Others
                    </p>
                    <ul>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>Careers</a>
                        </li>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>Press</a>
                        </li>
                        <li className={styles.navList}>
                            <a className={styles.footerLink}>Licenses</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}