import React from 'react';
import styles from './event.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faCodeBranch, faCode } from '@fortawesome/free-solid-svg-icons';
function Events() {
  
  return (<>


    <div className={styles.blur}>
      <section className={styles.main}>
        <main>
          <h1 className={styles.h1}>My Timeline - 2024 & 2025</h1>

          <section className={styles.section}>
            <h2 className={styles.h2}>June 2024 - Graduation</h2>
            <div className={styles.gridWrapper}>
              <article className={styles.article}>
                <h3 className={styles.h3}>BSc in Computer Science</h3><FontAwesomeIcon icon={faBuildingColumns} className='me-2 fs-2' style={{ color: "cyan", maxWidth: "50px" }} />
                <p>Graduated from St. John College with a Bachelor of Science in Computer Science.</p>
                <img className={styles.img} src="https://i2.wp.com/www.bwallpaperhd.com/wp-content/uploads/2018/09/JamesWebbSpaceTelescope-1280x1080.jpg" alt="Graduation Ceremony" />
              </article>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>October - December 2024 - Internship at Zidio</h2>
            <div className={styles.gridWrapper}>
              <article className={styles.article}>
                <h3 className={styles.h3}>MERN Stack Developer Intern</h3><FontAwesomeIcon icon={faCodeBranch} className='me-2 fs-2' style={{ color: "cyan", maxWidth: "50px" }} />
                <p>Worked as a MERN Stack Developer Intern at Zidio, focusing on building scalable web applications.</p>
                <img className={styles.img} src="https://i2.wp.com/www.bwallpaperhd.com/wp-content/uploads/2018/09/JamesWebbSpaceTelescope-1280x1080.jpg" alt="Zidio Internship" />
              </article>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>January - February 2025 - Real-Time Projects at Solution Cone</h2>
            <div className={styles.gridWrapper}>
              <article className={styles.article}>
                <h3 className={styles.h3}>PHP CodeIgniter</h3>
                <FontAwesomeIcon icon={faCode} className='me-2 fs-2' style={{ color: "cyan", maxWidth: "50px" }} />             <p>Developed backend applications using PHP CodeIgniter.</p>
                <img className={styles.img} src="https://i2.wp.com/www.bwallpaperhd.com/wp-content/uploads/2018/09/JamesWebbSpaceTelescope-1280x1080.jpg" alt="PHP CodeIgniter Development" />
              </article>
              <article className={styles.article}>
                <h3 className={styles.h3}>React & Next.js</h3>
                <FontAwesomeIcon icon={faCode} className='me-2 fs-2' style={{ color: "cyan", maxWidth: "50px" }} />            <p>  Worked on frontend development using React.js and Next.js for dynamic web applications.</p>
                <img className={styles.img} src="https://i2.wp.com/www.bwallpaperhd.com/wp-content/uploads/2018/09/JamesWebbSpaceTelescope-1280x1080.jpg" alt="React & Next.js Development" />
              </article>
              <article className={styles.article}>
                <h3 className={styles.h3}>Shopify Development</h3>
                <FontAwesomeIcon icon={faCode} className='me-2 fs-2' style={{ color: "cyan", maxWidth: "50px" }} />                <p>  Built e-commerce features and customizations for Shopify-based stores.</p>
                <img className={styles.img} src="https://i2.wp.com/www.bwallpaperhd.com/wp-content/uploads/2018/09/JamesWebbSpaceTelescope-1280x1080.jpg" alt="Shopify Development" />
              </article>
            </div>
          </section>

        </main>
      </section>
    </div></>

  );
}


export default Events;
