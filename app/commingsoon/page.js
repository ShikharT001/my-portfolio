"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import styles from '@/components/style.module.css';
export default function Blog() {
  const router = useRouter();

  useEffect(() => {
    router.push("/commingsoon"); // Redirects after component mounts
  }, []); // Empty dependency array ensures it runs only once

  return (
    <>
      <div>
        <Header />
        <section className="vh-100 p-5">
            <div className={styles.blur}>          <h1 className="text-white">Comming Soon</h1>
          <p className="text-white">Our website is currently under construction. Please check back later.</p>
            <Link className={styles.button1} href="/">Go Back To home</Link></div>

        </section>
        <Footer />
      </div>
    </>
  );
}
