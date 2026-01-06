import React, { useState, useEffect } from 'react';
import styles from "../../styles/Blog.module.css";

export default function SideBarBlog() {
    const [activeId, setActiveId] = useState("");

    // 1. Dynamic List of items (ID must match with section IDs in main page)
    const tocItems = [
        { label: "Comparison of High-paying jobs", id: "comparison-section" },
        { label: "Top 10 Highest Paid Professions", id: "professions-section" },
        { label: "Tips for preparing yourself", id: "tips-section" },
        { label: "Conclusion", id: "conclusion-section" },
        { label: "Frequently Asked Questions", id: "faq-section" },
    ];

    // 2. Click handle karne ke liye smooth scroll function
    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120; // Sticky header ke liye gap
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // 3. Scroll position track karke active state set karne ke liye logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -70% 0px" } // Screen ke center area ko track karne ke liye
        );

        tocItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <aside className={styles.sidebarSection}>
            <div className={styles.stickyWrapper}>
                <h2 className={styles.sidebarTitle}>Table of Contents</h2>
                <ul className={styles.tocList}>
                    {tocItems.map((item) => (
                        <li 
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            className={`${styles.tocItem} ${activeId === item.id ? styles.tocActive : ""}`}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}