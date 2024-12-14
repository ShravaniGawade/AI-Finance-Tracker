import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
require('dotenv').config()



export default function Home() {
  process.env.CI = false
  return (
   <div>
      <Header/>
      <Hero/>
   </div>
  );
}
