import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "ProposalPro",
    desc: "AI-powered tool that analyzes and improves freelancing proposals.",
    img: "/images/workbg.jpeg",
  },
  {
    title: "spyReaper",
    desc: "AI micro-SaaS tool for automated competitor insights.",
    img: "/images/workbg.jpeg",
  },
];

export default function Work() {
  return (
    <section id="work" className="max-w-7xl mx-auto py-16 px-4 md:px-0 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-gradient">My Work</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="overflow-hidden bg-transparant">
            <Image src={p.img} alt={p.title} width={500} height={300} />
            <CardContent className="p-4 border-t border-gray-600">
              <h3 className="font-bold ">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
