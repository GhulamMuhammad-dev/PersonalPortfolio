"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(targetId);

    if (section) {
      const offsetTop = (section as HTMLElement).offsetTop;

      // Smooth scroll to target
      window.scrollTo({ top: offsetTop, behavior: "smooth" });

      // Bounce animation after scroll ends
      setTimeout(() => {
        section.animate(
          [{ transform: "translateX(-100px)" }, { transform: "translateX(0)" }],
          { duration: 1000, easing: "ease-out" }
        );
      }, 100); // slightly longer than smooth scroll
    }
  };
  return (
    <section className="text-center px-4 md:px-0 py-20 max-w-7xl  h-screen mx-auto  flex flex-col justify-center items-center gap-2 md:gap-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-gradient"
      >
        Building Scalable Web Apps & <br /> Intelligent AI Solutions
      </motion.h1>
      <p className="text-gray-400 mt-4 max-w-2xl">
        I’m Ghulam Muhammad, a Full-Stack Web Developer & AI Engineer passionate
        about crafting modern web experiences and building smart AI-driven
        applications.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <Button variant="default" size="lg">
          <a
            href="/GhulamMuhammad_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Resume{" "}
          </a>
        </Button>

        <Button variant="outline" size={"lg"}>
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
            Let’s Work
          </a>
        </Button>
      </div>
    </section>
  );
}
