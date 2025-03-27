// components/Timeline.js
import styles from './timeline.module.css';



const Timeline = () => {
  const colors = ['#FFEB3B', '#FF7043', '#4CAF50', '#42A5F5', '#AB47BC', '#FBC02D'];
  const events = [
    {
      title: 'Graduation',
      date: 'June 2024',
      description: 'Graduated from St. John College with a Bachelor of Science in Computer Science.',
    },
    {
      title: 'Internship at Zidio',
      date: 'December 2024',
      description: 'Worked as a MERN Stack Developer Intern at Zidio, focusing on building scalable web applications.',
    },
    {
      title: 'PHP CodeIgniter [ Real-World Project ]',
      date: 'January 2025',
      description: 'Developed backend applications using PHP CodeIgniter.',
    },
    {
      title: 'React & Next.js [ Real-World Project ]',
      date: 'January - Febrary 2025',
      description: ' Worked on frontend development using React.js and Next.js for dynamic web applications.',
    },{
      title: 'Shopify Development [ Real-World Project ]',
      date: 'Febrary 2025',
      description: 'Built e-commerce features and customizations for Shopify-based stores.',
    },{
      title: 'Revivors',
      date: 'Febrary 2025',
      description: 'Created a Python Django based project on Supporting NGO.',
    },
  ];
  return (
    <div className={styles.timelineContainer}>
      {events.map((event, index) => (
        <div
          key={index}
          className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
        >
          <div
            className={styles.content}
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.date}>{event.date}</p>
            <p className={styles.description}>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Timeline;
