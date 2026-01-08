import React from 'react';
import styles from "../../styles/Blog.module.css"  
import { BsShare } from "react-icons/bs";
export default function HighPay() {
    return (
        <>
            <header className={styles.articleHeader}>
                <h1 className={styles.mainTitle}>
                    Top High-Paying Job In India 2025 Edition
                </h1>

                <div className={styles.authorMetaSection}>
                    <div className={styles.authorInfo}>
                        <div className={styles.authorAvatar}>
                            {/* Replace with <Image /> if you have an author image */}
                        </div>
                        <div>
                            <p className={styles.authorName}>Chetna Sharma</p>
                            <p className={styles.authorDate}>Academic Expert • Jun 02, 2024</p>
                        </div>
                    </div>
                    
                    <button className={styles.shareButton}>
                        Share 
                      <BsShare />
                    </button>
                </div>
            </header>

            <div>
                {/* Featured Image */}
                <div className={styles.featuredImageWrapper}>
                    <img 
                        src="/images/blog/highpay.png" 
                        alt="High Paying Jobs Banner" 
                        className={styles.featuredImg}
                    />
                </div>

                {/* Article Text */}
                <div className={styles.articleContent}>
                    <p>
                        Everyone wants to get that high paying job in India, so that they can accomplish their dreams and goals. But the main question is how?
                    </p>
                    <p>
                        India’s job market industry is developing and growing at an extremely fast pace, which is raising competition daily for the
                        working professionals and the freshers to get their dream job. Nowadays, just completing a degree is not enough to get a 
                        job that pays a higher salary. If you are someone 
                        who wants to find ways to get the highest paying jobs that fulfills your goals, then this blog is for you!
                    </p>
                    <p>
                        You need to craft a strategic path for yourself to reach your dream job and to help you achieve that, this blog has mentioned the list of
                        high-paying jobs in India in 2025 and their pathways to reach there easily.
                        In addition, there are some bonus tips and tricks which you can use to develop a strategic mind and work effortlessly.
                    </p>
                    <p>Let’s dive-in this blog and start building your future strategies together!</p>
                </div>
            </div>
        </>
    );
}