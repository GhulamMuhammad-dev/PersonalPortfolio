"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="border-t border-border mt-12"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ghulam Muhammad. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link href="https://github.com/" className="hover:text-foreground transition">
            GitHub
          </Link>
          <Link href="https://linkedin.com/" className="hover:text-foreground transition">
            LinkedIn
          </Link>
          <Link href="mailto:youremail@gmail.com" className="hover:text-foreground transition">
            Email
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
