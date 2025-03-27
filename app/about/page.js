import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from '@/components/Home.module.css';
import Skills from "@/components/Skills"
import Events from "@/components/events";
export default function About() {

  return (
    <>
      <div>
        <Header />
        {/* About Section */}
        <section className={styles.about}>
          <div className="container">
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle}>Get to know me 🤝</h2>
              <p className={styles.aboutText}>
                I am a full-stack developer with expertise in JavaScript, React, Node.js, PHP, and Python. I love building scalable and efficient web applications that solve real-world problems. With over 5 years of experience, I have worked on various projects ranging from e-commerce platforms to AI-driven applications.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}

        < section className={styles.projects} >
          <div className="container">

            <h2 className={styles.sectionTitle}>Skills</h2>
            <Skills />
          </div>
        </section>
        {/* Skills Section */}

        {/* Projects Section */}
        < section className={styles.projects} >
          <div className="container">
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.projectsGrid}>
              <div className={styles.projectCard}>
                <h3>E-Commerce Platform</h3>
                <p>Built a full-stack e-commerce platform using MERN stack with payment integration.</p>
              </div>
              <div className={styles.projectCard}>
                <h3>AI Chatbot</h3>
                <p>Developed an AI-driven chatbot using Python and TensorFlow.</p>
              </div>
              <div className={styles.projectCard}>
                <h3>Portfolio Website</h3>
                <p>Designed and developed a personal portfolio website using Next.js and Three.js.</p>
              </div>
            </div>
          </div>
        </section >

        < section className={styles.projects} >
          <div className="container">

            <h2 className={styles.sectionTitle}>Timeline</h2>
            <Events />
          </div>
        </section>


        <Footer />
      </div >
    </>

  );
}