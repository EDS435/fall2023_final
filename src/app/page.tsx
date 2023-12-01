import { Brew } from "../../Components/Brew";
import Features from "../../Components/Features";
import { Guide } from "../../Components/Guide";
import Hero from "../../Components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Brew />
      <Guide />
      <Features />
    </>
  )
}
