import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "FoundLabs – AI Agency Website",
    desc: "A sleek and responsive agency website built with React and Next.js, featuring smooth animations and a functional contact form integration. Designed to showcase creative services with a modern and professional UI.",
    img: "/images/fivverProjectShowCase.png",
    link: "https://foundlabs.online",
  },
  {
    title: "FoundLabs – AI Agency Website",
    desc: "A sleek and responsive agency website built with React and Next.js, featuring smooth animations and a functional contact form integration. Designed to showcase creative services with a modern and professional UI.",
    img: "/images/fivverProjectShowCase.png",
    link: "https://foundlabs.online",
  },
  {
    title: "Palette Generator AI – Color Palette Web App",
    desc: "An AI-powered web app built with React and Next.js that generates beautiful, harmonious color palettes. Ideal for designers and developers seeking quick, smart color inspiration.",
    img: "/images/fivverProjectShowCase2.png",
    link: "https://palettegeneratorai.netlify.app",
  },
];

export default function Work() {
  return (
    <section id="work" className="max-w-7xl mx-auto py-16 px-4 md:px-0">
      <h2 className="text-3xl font-bold text-center mb-8 text-gradient">My Work</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p,index) => (
          <Link href={p.link} key={index} target="_blank" rel="noopener noreferrer">
            <Card className="overflow-hidden bg-transparent relative cursor-pointer transition hover:shadow-lg hover:scale-[1.01] duration-200 h-[450px] flex flex-col">
              {/* Image Section */}
              <div className="relative w-full h-60">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <CardContent className="p-4 border-t border-gray-600 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-5">{p.desc}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
