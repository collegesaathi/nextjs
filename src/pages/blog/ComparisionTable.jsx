import React from 'react';
import styles from "../../styles/Blog.module.css"  

export default function ComparisionTable() {
    const salaryData = [
        { title: "IT Director / Head of IT", salary: "40 lakhs", industry: "Technology, SaaS, Product" },
        { title: "Chief Executive Officer (CEO) / MD", salary: "31.4 lakhs", industry: "Executive Leadership / All industries" },
    ];

    return (
        <div className={styles.comparisonContainer}>
            <h2 className={styles.comparisonHeading}>
                Comparison of High-paying jobs (average salaries and industries)
            </h2>

            {/* Salary Table Wrapper */}
            <div className={styles.tableScrollWrapper}>
                <table className={styles.salaryTable}>
                    <thead>
                        <tr className={styles.tableHeaderRow}>
                            <th className={`${styles.headerCell} ${styles.headerCellBorder}`}>Benefits</th>
                            <th className={`${styles.headerCell} ${styles.headerCellBorder}`}>Details</th>
                            <th className={styles.headerCell}>Industry</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        {salaryData.map((row, idx) => (
                            <tr key={idx} className={styles.bodyRow}>
                                <td className={`${styles.bodyCell} ${styles.cellFontBold}`}>
                                    {row.title}
                                </td>
                                <td className={styles.bodyCell}>
                                    {row.salary}
                                </td>
                                <td className={styles.bodyCell}>
                                    {row.industry}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}