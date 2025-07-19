"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = {
  "Full-Stack Development": [
    "Next.js",
    "React",
    "Node.js",
    "Tailwind",
    "TypeScript",
    "Supabase",
    "Firebase",
    "PostgreSQL",
    "MongoDB",
  ],
  "AI & Machine Learning": [
    "Python",
    "RAG",
    "Fine-tuning LLMs",
    "AI Agents",
  ],
  "Product Building": ["MVPs", "SaaS", "APIs"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto py-16 flex flex-col justify-center items-center px-4 md:px-0 border-t border-gray-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // triggers when 30% visible
        className="text-3xl font-bold text-center mb-10 text-gradient"
      >
        Skills That I Have
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 w-full">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.2,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card className="bg-background border border-border rounded-lg shadow-md h-full min-h-[230px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 mt-auto">
                {items.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.2 + index * 0.05,
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <Badge className="px-3 py-1 text-sm rounded-md bg-transparent border border-gray-600 text-accent-foreground">
                      {item}
                    </Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
