"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("An error occurred.");
  }
};

  return (
    <section id="contact" className="max-w-lg  mx-auto py-16   px-4 md:px-0 ">
      <h2 className="text-2xl font-bold text-center">
        Let’s Build Something Great Together
      </h2>
      <p className="text-center text-gray-400 mt-2 mb-6 ">
        Have an idea, project, or collaboration in mind? I’m always open to exciting
        opportunities in web development and AI engineering.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <Input
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Textarea
          placeholder="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full">
          Send Me
        </Button>
      </form>
    </section>
  );
}
