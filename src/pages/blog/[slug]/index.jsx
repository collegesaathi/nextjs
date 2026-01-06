import Link from "next/link";
import Layout from "@/pages/components/Layout";
import Image from "next/image";
import SideBarBlog from "../SideBarBlog";
import HighPay from "../HighPay";
import ComparisionTable from "../ComparisionTable";
import ConnectExpertForm from "@/pages/programs/ConnectExpertForm";
import styles from "../../../styles/Blog.module.css" // Assuming CSS Module usage
import JobProfessions from "../JobProfessions";

export default function Blog() {
    return (
        <Layout>
            <div className={styles.blogWrapper}>
                {/* Breadcrumb Navigation */}
                <nav className={styles.breadcrumbNav}>
                    <Link href="/" className={styles.redLink}>Home</Link>
                    <span className={styles.separator}>&gt;</span>
                    <Link href="/blog" className={styles.redLink}>Blog</Link>
                    <span className={styles.separator}>&gt;</span>
                    <span className={styles.currentPage}>Top High-Paying Job In India 2025 Edition</span>
                </nav>

                {/* Main Content Grid */}
                <div className={styles.mainGrid}>
                    <aside className={styles.sidebarSection}>
                        <SideBarBlog />
                    </aside>

                    <main className={styles.contentSection}>
                        <HighPay />
                       <div id="comparison-section">
                         <ComparisionTable /></div> 
                       
                        <ConnectExpertForm />
                        <div id="professions-section">
                            <JobProfessions />
                        </div>
                    </main>
                </div>
            </div>
        </Layout>
    );
}