"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function Customers() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Footer />
      </main>
    </div>
  );
}
