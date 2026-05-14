"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import BlogHero from "@/components/blog-hero";
import BlogMainContent from "@/components/blog-main-content";

export default function Blog() {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1">
        <BlogHero />
        <BlogMainContent />
        <Footer />
      </main>
    </section>
  );
}
