import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/features/home/Hero/Hero";
import GetInTouch from "@/features/home/GetInTouch/GetInTouch";
import Services from "@/features/home/Services/Services";

export default function Home() {
  return (
   <main>
    <Hero />
    <GetInTouch />
    <Services />
   </main>
  );
}
