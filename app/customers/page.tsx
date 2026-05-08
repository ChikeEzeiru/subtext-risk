"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import CustomerHero from "@/components/customer-hero";
import CustomerNumbers from "@/components/customer-numbers";
import CustomersCaseStudyGrid from "@/components/customers-casestudy";

export default function Customers() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1">
        <CustomerHero />
        <CustomersCaseStudyGrid />
        <CustomerNumbers />
        <Footer />
      </main>
    </div>
  );
}
