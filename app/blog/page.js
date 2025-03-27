"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Blog() {

  const router = useRouter();

  useEffect(()=>{
    router.push("/commingsoon"); 
  },[]);

  return (
    <>
      <div>

        <Header />
        <section className="vh-100">
          <h1>Blog Page</h1>
          <p>This is the Blog page.</p>
        </section>
        <Footer />
      </div>
    </>

  );
}