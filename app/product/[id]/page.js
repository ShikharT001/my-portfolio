"use client";
import { useState } from "react";
import styles from "@/components/productDetail.module.css";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";


const ProductDetail = () => {
    const product = {
        title: "Premium Wireless Headphones",
        description: "Experience premium sound quality and industry-leading noise cancellation with these wireless headphones. Perfect for music lovers and frequent travelers.",
        features: [
            "Industry-leading noise cancellation",
            "30-hour battery life",
            "Touch sensor controls",
            "Speak-to-chat technology"
        ],
        images: [
            "https://4kwallpapers.com/images/walls/thumbs_3t/21418.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_3t/21418.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_3t/21418.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_3t/21418.jpg"
        ]
    };

    const [mainImage, setMainImage] = useState(product.images[0]);

    return (
    <>
        <Header/>
        <section className={styles.pageContainer}>
            <div className="container-fluid mt-5 p-5 mb-5">
                <div className="row align-items-center">
                    {/* Responsive Image Section */}
                    <div className="col-lg-8 col-md-8 col-sm-12 text-center">
                        <img src={mainImage} alt="Product" className="img-fluid rounded mb-3 w-100" style={{ maxHeight: "400px", objectFit: "cover" }} />
                        <div className="d-flex justify-content-center flex-wrap gap-2">
                            {product.images.map((img, index) => (
                                <img key={index} src={img} alt={`Thumbnail ${index + 1}`} className={`rounded ${mainImage === img ? "opacity-100" : "opacity-50"}`} style={{ width: "70px", height: "70px", objectFit: "cover", cursor: "pointer" }} onClick={() => setMainImage(img)} />
                            ))}
                        </div>
                    </div>
                    
                    {/* Product Details Section */}
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center text-md-start">
                        <div className={styles.blur}>
                        <h2 className="mb-3 text-white">{product.title}</h2>
                        <p className="mb-4 text-white">{product.description}</p>
                        <div className="d-flex flex-column flex-md-row gap-3">
                            <Link href="/contact"><button className={styles.button1}>
                                <i className="bi bi-cart-plus"></i> Contact
                            </button></Link>
                            <button className={styles.button1}>
                                <i className="bi bi-heart"></i> Get Code
                            </button>
                        </div>
                        <div className="mt-4">
                            <h5 className="text-white">Key Features:</h5>
                            <ul className="list-unstyled">
                                {product.features.map((feature, index) => (
                                    <li className="text-white" key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>

    );
};

export default ProductDetail;