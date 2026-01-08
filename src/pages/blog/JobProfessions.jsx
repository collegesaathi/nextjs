import React from 'react';
import styles from "../../styles/Blog.module.css";

export default function JobProfessions() {
    // 1. JSON Data Array
    const professionsData = [
        {
            id: 1,
            title: "IT Director/ Head of IT",
            description: "The IT Director or Head is responsible for managing the IT infrastructure and operations within the company. He is the senior who manages information technology strategies, infrastructure and helps the team in improving the overall technical operations of the business so that it can lead towards the growth and development of business. This <b>high-paying job in India</b> will make you become the most popular individual in the world of IT.",
            responsibilities: [
                "Coordinating between IT and other departments to understand every perspective and achieve overall objectives.",
                "Managing computer systems, networks, software, and hardware for the smooth functioning of the business.",
                "Identify, assess, and mitigate the risks related to IT, which includes cybersecurity, data privacy, and recovery planning."
            ]
        },
        {
            id: 2,
            title: "Marketing Director / CMO",
            description: "Marketing Directors are responsible for the brand's image and market position. They lead the marketing team to execute high-impact campaigns that drive growth. This is a <b>high-paying job in India</b> for creative and strategic minds.",
            responsibilities: [
                "Developing and overseeing the implementation of the marketing strategy.",
                "Managing the marketing budget and ensuring ROI on advertising spend.",
                "Analyzing market trends and competitor activity to stay ahead."
            ]
        },
        // Aap yahan aur bhi jobs add kar sakte hain...
    ];

    return (
        <div className={styles.professionSection}>
            {/* Main Section Header */}
            <h2 className={styles.sectionHeading}>
                Top 10 Highest Paid Professions: Responsibilities & Educational Path
            </h2>
            <p className={styles.introText}>
                Just knowing the position's name will not help you in reaching your desirable 
                job position, it's important to know what the responsibilities of that role are 
                and what is the educational path you can opt to learn important skills and 
                expertise. Now, you can explore the jobs roles in depth and explore the 
                education options that will support you to reach that role.
            </p>

            {/* 2. Mapping through JSON Data */}
            {professionsData.map((job, index) => (
                <div key={job.id} className={styles.jobEntry} style={{ marginBottom: '40px' }}>
                    <h3 className={styles.jobTitle}>
                        {index + 1}. {job.title}
                    </h3>
                    
                    {/* dangerouslySetInnerHTML bold tags (<b>) ko render karne ke liye */}
                    <p 
                        className={styles.jobDescription}
                        dangerouslySetInnerHTML={{ __html: job.description }}
                    />

                    <h4 className={styles.responsibilitiesHeading}>Responsibilities:</h4>
                    
                    <ul className={styles.checkList}>
                        {job.responsibilities.map((item, idx) => (
                            <li key={idx} className={styles.checkItem}>
                              <img src="/images/blog/tick.png" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}