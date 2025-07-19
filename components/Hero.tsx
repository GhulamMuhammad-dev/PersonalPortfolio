"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
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
        <Button variant="default" size={'lg'}>Resume</Button>
        <Button variant="outline" size={'lg'}>Let’s Work</Button>
      </div>
    </section>
  );
}
