import { Navbar } from "@/components/Navbar";
import Examples from "@/components/Examples";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
     <Examples />
   
    </main>
  );
}