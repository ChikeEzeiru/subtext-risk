"use client";

import Navbar from "@/components/Navbar";
import MerchantHero from "@/components/merchant-hero";
import MerchantProblem from "@/components/merchant-problem";
import MerchantAnalysis from "@/components/merchant-analysis";
import Footer from "@/components/footer";

export default function MerchantScreening() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1">
        <MerchantHero />
        <MerchantProblem />
        <MerchantAnalysis />
        <Footer />
      </main>
    </div>
  );
}
