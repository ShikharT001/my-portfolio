
"use client";
import React, { useRef } from 'react';
import styles from '@/components/Home.module.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

import ProjectCards from '@/components/Projectcard';
import TypingEffect from '@/components/features/typing';
import Head from 'next/head';
import HoverImageEffect from '@/components/HoverImageEffect';
import Counter from '@/components/counter';
import Link from 'next/link';
import Events from '@/components/events';

export default function Home() {

  const projects = [
    {
        id: 1,
        title: "Answer Analyzer",
        description: "An online exam platform using ML to evaluate answers.",
        image: "https://4kwallpapers.com/images/walls/thumbs_3t/21418.jpg",
        date: "2023",
        link: "#"
    },
    {
        id: 2,
        title: "Waste Management System",
        description: "A Flask-based system for managing waste disposal efficiently.",
        image: "https://4kwallpapers.com/images/walls/thumbs_3t/21418.jpg",
        date: "2022",
        link: "#"
    },
    {
        id: 3,
        title: "Scrapify & Auction Conduction",
        description: "A platform for selling scraps and conducting auctions.",
        image: "https://4kwallpapers.com/images/walls/thumbs_3t/21418.jpg",
        date: "2021",
        link: "#"
    },
    {
        id: 4,
        title: "Technocyte",
        description: "My website to showcase website-building services.",
        image: "https://4kwallpapers.com/images/walls/thumbs_3t/21418.jpg",
        date: "2024",
        link: "#"
    },
    {
        id: 5,
        title: "Freshly",
        description: "An online platform for purchasing fresh fruits.",
        image: "https://4kwallpapers.com/images/walls/thumbs_3t/21418.jpg",
        date: "2023",
        link: "#"
    }
];


  return (
    <>
      <Header />
      <Head>
        <link rel="icon" href="/portfolio.ico" />
      </Head>
      {/* Hero Section */}

      <section className={styles.section}>
        <div className='container'>
          <div className={styles.blur}>
          <div className='row'>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>


              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Hi, I&apos;m Shikhar Tiwari</h1>
                <p className={styles.heroSubtitle}>
                  A passionate <span> <TypingEffect /></span>.
                </p>
                <Link href='/product' className={styles.ctaButton}>View My Work</Link>

              </div>
            </div>

            <div className='col-md-6'>   
              <HoverImageEffect src="/images/herosection.webp" style={{ borderRadius: "5px",maxWidth:'400px', minWidth:'200px' }} />
            </div>

          </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className={styles.section}>
      <div className='container'>
        <div className={styles.blur}>
          <div className={styles.featuresContent}>
            <h2 className={styles.featuresTitle}>What I Do</h2>
            <div className={styles.featuresList}>
              <div className={styles.feature}>
                <i className="fa-solid fa-code"></i>
                <h3 className={styles.featuresTitle}>Web Development</h3>
                <p className={styles.featureDescription}>
                  Building responsive and user-friendly web applications in popular multiple languages and frameworks like NextJS, PHP, Django.

                </p>

              </div>

            </div> </div>

          </div></div>
      </section>
      
      <Events/>
{/* Counter Start */}
<Counter />
{/* Counter End */}
      <ProjectCards />
      

      <Footer />
    </>
  );
}