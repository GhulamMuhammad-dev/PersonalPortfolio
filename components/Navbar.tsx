"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const section = document.querySelector(targetId);

    if (section) {
      const offsetTop = (section as HTMLElement).offsetTop;

      // Smooth scroll to target
      window.scrollTo({ top: offsetTop, behavior: "smooth" });

      // Bounce animation after scroll ends
      setTimeout(() => {
        section.animate(
          [
            
            { transform: "translateX(-100px)" },
            { transform: "translateX(0)" },
            
           
          ],
          { duration: 1000, easing: "ease-out" }
        );
      }, 100); // slightly longer than smooth scroll
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex items-center justify-between w-full px-6 md:px-14 py-4 bg-background border-b border-border"
    >
      <Link href="/" className="text-xl font-bold text-foreground">
        Ghulam<span className="text-primary">.</span>
      </Link>

      <div className="hidden md:flex items-center gap-6">
        <a
          href="#about"
          onClick={(e) => handleScroll(e, "#about")}
          className="text-muted-foreground hover:text-foreground transition"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={(e) => handleScroll(e, "#skills")}
          className="text-muted-foreground hover:text-foreground transition"
        >
          Skills
        </a>
        <a
          href="#work"
          onClick={(e) => handleScroll(e, "#work")}
          className="text-muted-foreground hover:text-foreground transition"
        >
          Work
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="text-muted-foreground hover:text-foreground transition"
        >
          Contact
        </a>
      </div>

      <Button asChild className="ml-4">
        <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
          Let’s Work
        </a>
      </Button>
    </motion.nav>
  );
}
