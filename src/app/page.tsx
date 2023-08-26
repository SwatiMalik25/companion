
import Examples from "@/components/Examples";

import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import Contact from "@/components/contact";
import Header from "@/components/header";
import type { User } from "@clerk/nextjs/api";
import { currentUser } from "@clerk/nextjs/app-beta";



export default async function Home() {
    const user: User | null = await currentUser();
  
    return (
      <main >
        {!!user ? (
             <><Header/>
             <p className="mx-auto mt-4 max-w-xl text-center text-xl leading-8 text-slate-400">
             Help you setup an AI companion project with ease. Here are some example characters:
         </p>
         <Examples />
         
         <svg
             viewBox="0 0 1024 1024"
             className="absolute left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
             aria-hidden="true"
         >
                 <circle
                     cx={512}
                     cy={512}
                     r={512}
                     fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                     fillOpacity="0.5" />
                 <defs>
                     <radialGradient
                         id="759c1415-0410-454c-8f7c-9a820de03641"
                         cx={0}
                         cy={0}
                         r={1}
                         gradientUnits="userSpaceOnUse"
                         gradientTransform="translate(512 512) rotate(90) scale(512)"
                     >
                         <stop stopColor="rgb(17 24 39)" />
                         <stop offset={1} stopColor="rgb(125 211 252)" stopOpacity={0} />
                     
                     </radialGradient>
                 </defs>
             </svg></>
          
        ) : (
            <>
            <Header />
         <HeroSection/>
         <Content/>
         <Feature/>
         <Contact/>
         <Footer/>
        </>
       
        )}
     
            
          </main>
      
   
  )};
