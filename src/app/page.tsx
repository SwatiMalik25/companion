import Navbar from "@/components/Navbar";

import Examples from "@/components/Examples";

import { Main } from "next/document";

import Image from "next/image";

import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import Contact from "@/components/contact";

export default function Home() {
  return (
    
      <main>
      <HeroSection/>

      <Content/>

      <Feature/>
      <Contact/>
      </main>

   
  );
}
