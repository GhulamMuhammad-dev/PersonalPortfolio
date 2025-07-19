import { Card, CardContent } from "@/components/ui/card";

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
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-0">
      <h2 className="text-2xl font-bold text-center mb-8">
        What Professionals Say About Me
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            className="bg-transparent border-gray-700 text-gray-300"
          >
            <CardContent className="p-4">
              <p className="italic mb-3">“{t.text}”</p>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
