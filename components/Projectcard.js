"use client";  // Ensure this is at the top

import Link from "next/link";
import React from 'react';
import './ProjectCards.css';
import styles from './Home.module.css';
import HoverImageEffect from './HoverImageEffect';
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

const ProjectCards = () => {
    return (
        <section className={styles.blur}>
        <div className="container py-5">
            <h2 className="text-center text-white mb-4">My Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card project-card h-100 shadow-sm">
                            {/* <img src={project.image} className="card-img-top" alt={project.title} /> */}
                            <HoverImageEffect src={project.image} width='100%' className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <p className="card-text"><small className="text-muted">Year: {project.date}</small></p>
                                
                                
                            <Link className={styles.button1} href={`/product/${project.id}`}>view</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>  
    );
};

export default ProjectCards;