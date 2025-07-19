"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "AI chatbot that boosted our customer support efficiency.",
    name: "Mr. Thomas Brush",
    role: "Game Developer",
  },
  {
    text: "Professional, fast, and innovative! Delivered an amazing AI solution.",
    name: "Sarah Johnson",
    role: "Startup Founder",
  },
  {
    text: "Helped automate workflows and saved us tons of time.",
    name: "David Lee",
    role: "Product Manager",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto py-16 px-4 md:px-0"
    >
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-2xl font-bold text-center mb-8"
      >
        What Professionals Say About Me
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: -5,
              transition: { type: "spring", stiffness: 200, damping: 10 },
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.2,
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="perspective-1000" // for 3D tilt effect
          >
            <Card className="bg-transparent border-gray-700 text-gray-300 h-full min-h-[180px]">
              <CardContent className="p-4">
                <p className="italic mb-3">“{t.text}”</p>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
