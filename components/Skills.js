'use client';
import { useState } from 'react';
import styles from './skills.module.css';

const Skills = () => {
    const skills = [
        {
          title: 'JavaScript',
          content:
            'JavaScript is a versatile and powerful programming language widely used for building dynamic and interactive web applications. It enables developers to create responsive user interfaces, handle real-time events, and enhance website functionality. With frameworks and libraries like React.js, Node.js, and Express.js, JavaScript extends beyond front-end development to power full-stack applications.',
          btnname: 'JavaScript',
          color: '#ff69b4',
        },
        {
          title: 'PHP',
          content:
            'PHP is a widely-used server-side scripting language known for its efficiency in web development and dynamic content generation. It powers many popular websites and CMS platforms like WordPress, making it essential for backend development. With frameworks like Laravel and CodeIgniter, PHP enables developers to build secure, scalable, and high-performance applications.',
          btnname: 'PHP',
          color: '#00D1FF',
        },
        {
          title: 'Python',
          content:
            'Python is a high-level, versatile programming language known for its simplicity and readability, making it ideal for both beginners and experienced developers. It is widely used in web development, data science, automation, artificial intelligence, and machine learning. Python’s extensive community support and cross-platform compatibility make it a top choice.',
          btnname: 'Python',
          color: 'yellowgreen',
        },
        {
          title: 'Next JS',
          content:
            'Next.js is a powerful React framework known for its server-side rendering (SSR) and static site generation (SSG), enabling faster performance and improved SEO. It simplifies full-stack development with built-in API routes, automatic code splitting, and optimized image handling. It supports hybrid rendering for modern web apps.',
          btnname: 'Next JS',
          color: '#FFB400',
        },
        {
          title: 'HTML & CSS',
          content:
            'HTML and CSS are the foundational technologies for web development, responsible for structuring and styling web pages. HTML defines the content and layout of a webpage, while CSS controls the visual presentation. Flexbox, Grid, and animations enable the creation of responsive and modern designs.',
          btnname: 'HTML & CSS',
          color: '#9B59B6',
        },
        {
          title: 'MongoDB',
          content:
            'MongoDB is a powerful NoSQL database known for its scalability, flexibility, and high performance. It stores data in a JSON-like format, making it ideal for handling unstructured and semi-structured data. MongoDB integrates seamlessly with Node.js, making it a preferred choice in MERN/MEAN stack applications.',
          btnname: 'MongoDB',
          color: '#2C3E50',
        },
      ];
  const [activeSkill, setActiveSkill] = useState(skills[0]);
 
  return (<>
    <div className={styles.skillsContainer}>
        
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <button
            key={index}
            className={`${styles.skillBtn} ${
              activeSkill.title === skill.title ? styles.active : ''
            }`}
            style={{ backgroundColor: skill.color }}
            onClick={() => setActiveSkill(skill)}
          >
            {skill.btnname}
          </button>
        ))}
      </div>

      <div className={styles.skillDetail}>
        <h2 className={styles.skillTitle}>{activeSkill.title}</h2>
        <p className={styles.skillContent}>{activeSkill.content}</p>
      </div>
    </div>
    </>
  );
};

export default Skills;
