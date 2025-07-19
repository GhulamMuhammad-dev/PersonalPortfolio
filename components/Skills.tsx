import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge, badgeVariants } from "@/components/ui/badge"

const skills = {
  "Full-Stack Development": ["Next.js", "React", "Node.js", "Tailwind", "TypeScript", "Supabase", "Firebase", "PostgreSQL", "MongoDB"],
  "AI & Machine Learning": ["Python", "RAG", "Fine-tuning LLMs", "AI Agents"],
  "Product Building": ["MVPs", "SaaS", "APIs"],
};

export default function Skills() {
  return (
    <section className=" max-w-7xl mx-auto py-16 flex flex-col justify-center items-center  px-4 md:px-0 border-t border-gray-500">
      <h2 className="text-3xl font-bold text-center mb-10 text-gradient">
        Skills That I Have
      </h2>
      <div className="grid md:grid-cols-3 gap-6 w-full">
        {Object.entries(skills).map(([category, items]) => (
          <Card
            key={category}
            className=" bg-background border border-border rounded-lg shadow-md"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Badge
                 
                  key={item}
                  className="px-3 py-1 text-sm rounded-md bg-transparent border border-gray-600 text-accent-foreground"
                >
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
