import styles from "../styles/Middle.module.css"
import Image from 'next/image'
export default function Middle() {
    return (
        <section className={styles.middle}>
            <div className={styles.line}></div>
            <h2 className={styles.heading2}>
                We’re different
            </h2>
            <div className={styles.middleFlexBox}>
                <div className={styles.col}>
                    <Image
                        className={styles.icon}
                        src="/images/icon-snappy-process.png"
                        alt="icon-snappy-process"
                        width={86}
                        height={86}
                    />
                    <h3 className={styles.heading3}>
                        Snappy Process
                    </h3>
                    <p className={styles.p}>
                        Our application process can be completed in minutes, not hours. Don’t get
                        stuck filling in tedious forms.
                    </p>
                </div>
                <div className={styles.col}>
                    <Image
                        className={styles.icon}
                        src="/images/icon-affordable-prices.png"
                        alt="icon-affordable-prices"
                        width={86}
                        height={86}
                    />
                    <h3 className={styles.heading3}>
                        Affordable Prices
                    </h3>
                    <p className={styles.p}>
                        We don’t want you worrying about high monthly costs. Our prices may be low,
                        but we still offer the best coverage possible.
                    </p>
                </div>
                <div className={styles.col}>
                    <Image
                        className={styles.icon}
                        src="/images/icon-people-first.png"
                        alt="icon-people-first"
                        width={86}
                        height={86}
                    />
                    <h3 className={styles.heading3}>
                        People First
                    </h3>
                    <p className={styles.p}>
                        Our plans aren’t full of conditions and clauses to prevent payouts. We make
                        sure you’re covered when you need it.
                    </p>
                </div>
            </div>
            <div className={styles.violet}>
                <div className={styles.workText}>
                    <h2 className={styles.heading2b}>
                        Find out more <br className={styles.violetBreak}/> about how we work
                    </h2>
                    <button className={styles.workBtn}>
                        How we work
                    </button>
                </div>
                <Image
                    className={styles.bgWorkMobile}
                    src="/images/bg-pattern-how-we-work-mobile.png"
                    alt="bg-pattern-how-we-work-mobile"
                    width={176}
                    height={317}
                />
                <Image
                    className={styles.bgWorkDesktop}
                    src="/images/bg-pattern-how-we-work-desktop.png"
                    alt="bg-pattern-how-we-work-desktop"
                    width={434}
                    height={250}
                />
            </div>
        </section>
    )
}