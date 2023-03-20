import styles from "../styles/Home.module.css"
import Image from 'next/image'

export default function Home() {
    return (
        <section className={styles.home}>
            <Image
                className={styles.introMobile}
                src="/images/image-intro-mobile.jpg"
                alt="intro-mobile"
                width={375}
                height={451}
            />
            <Image
                className={styles.introDesktop}
                src="/images/image-intro-desktop.jpg"
                alt="intro-desktop"
                width={540}
                height={650}
            />
            <div className={styles.violet}>
                <div className={styles.text}>
                    <div className={styles.line}></div>
                    <h1 className={styles.heading1}>
                        Humanizing <br /> your insurance.
                    </h1>
                    <p className={styles.p}>
                        Get your life insurance coverage easier and faster. We blend our expertise
                        and technology to help you find the plan that’s right for you. Ensure you
                        and your loved ones are protected.
                    </p>
                    <button className={styles.plansBtn}>
                        View plans
                    </button>
                </div>
                <Image
                    className={styles.bgIntroLeftMobile}
                    src="/images/bg-pattern-intro-left-mobile.png"
                    alt="bg-pattern-intro-left-mobile"
                    width={168}
                    height={165}
                />
                <Image
                    className={styles.bgIntroRightMobile}
                    src="/images/bg-pattern-intro-right-mobile.png"
                    alt="bg-pattern-intro-right-mobile"
                    width={124}
                    height={330}
                />
                 <Image
                    className={styles.bgIntroLeftDesktop}
                    src="/images/bg-pattern-intro-left-desktop.png"
                    alt="bg-pattern-intro-left-desktop"
                    width={195}
                    height={504}
                />
                <Image
                    className={styles.bgIntroRightDesktop}
                    src="/images/bg-pattern-intro-right-desktop.png"
                    alt="bg-pattern-intro-right-desktop"
                    width={436}
                    height={593}
                />
            </div>
        </section>
    )
}