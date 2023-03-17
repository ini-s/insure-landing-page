import styles from "../styles/Header.module.css"
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
    const [active, setIsActive] = useState<boolean>(false)
    function handleClick(e: React.MouseEvent<HTMLElement>) {
        setIsActive(prevValue => !prevValue)
    }
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
            {
                !active ?
                    <Image
                        src="/images/icon-hamburger.png"
                        className={styles.hamburger}
                        alt="hamburger-menu"
                        width={32}
                        height={32}
                        onClick={handleClick}
                    />
                    :
                    <>
                        <Image
                            src="/images/icon-close.png"
                            className={styles.close}
                            alt="hamburger-menu"
                            width={32}
                            height={32}
                            onClick={handleClick}
                        />
                        <nav className={styles.sideNav}>
                            <ul>
                                <li className={styles.navList}>
                                    <a>How we work</a>
                                </li>
                                <li className={styles.navList}>
                                    <a> Blog</a>
                                </li>
                                <li className={styles.navList}>
                                    <a>Account</a>
                                </li>
                            </ul>
                            <button className={styles.plansBtn}>
                                View plans
                            </button>
                            <Image
                                src="/images/bg-pattern-mobile-nav.png"
                                className={styles.bgMobileNav}
                                alt="bg-pattern-mobile-nav"
                                width={375}
                                height={218}
                            />
                        </nav>
                    </>
            }
        </header>
    )
}