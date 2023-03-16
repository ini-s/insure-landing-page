import styles from "../styles/Header.module.css"
import Image from 'next/image'

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                className={styles.logo}
                src="/images/logo.png"
                alt="logo"
                width={112}
                height={18}
            />
            {/* <nav className={styles.mainNav}>
            </nav> */}
            <Image
                src="/images/icon-hamburger.png"
                className={styles.hamburger}
                alt="hamburger-menu"
                width={32}
                height={32}
            />
            {/* <nav className={styles.sideNav}></nav> */}
        </header>
    )
}