"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import DocsHero from "@/components/docs-hero";
import DocsHowTo from "@/components/docs-how-to";
import ApiSdkSection from "@/components/docs-sdk-section";
import ApiCapabilities from "@/components/docs-capabilities";
import DocsResponse from "@/components/docs-response";

export default function Customers() {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1">
        <DocsHero />
        <DocsHowTo />
        <DocsResponse />
        <ApiCapabilities />
        <ApiSdkSection />
        <Footer />
      </main>
    </section>
  );
}
