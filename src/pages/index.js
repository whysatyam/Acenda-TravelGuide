import Hero from "@/components/Hero";
import Choose from "@/components/Choose";
import Partners from "@/components/Partners";
import Explore from "@/components/Explore";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Choose />
      <Partners />
      <Explore />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
