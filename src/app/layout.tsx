import "./styles/globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import Contact from "@/components/contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Getting Started",
  description: "Help you setup an AI project with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        
         
        <Header/>
         {children}
        <HeroSection/>

      <Content/>

      <Feature/>
      <Contact/>
        
        <Footer/>
      
          </body>
      </html>
   </ClerkProvider>
  );
}
