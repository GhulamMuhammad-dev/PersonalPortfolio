import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-0 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-8  mb-28 " >
      <Image
        src="/images/profileimg.webp"
        alt="Ghulam Muhammad"
        width={250}
        height={250}
        className="rounded-lg border border-gray-600 md:opacity-50 hover:opacity-100  hover:scale-95 transition-opacity duration-300"
      />
      <div>
        <h2 className="text-center md:text-left text-2xl font-bold text-gradient">About Me</h2>
        <h3 className="text-center md:text-left font-bold text-gray-500">Hi, I’m Ghulam Muhammad</h3>
        <p className="text-center md:text-left text-gray-400 mt-3 max-w-[500px]">
        I design and build modern web applications and AI-powered solutions that help businesses grow and automate efficiently.With expertise in Next.js, Node.js, Tailwind, and TypeScript for web development, and Python, Machine Learning, and AI Agents for intelligent systems, I combine beautiful design with powerful technology to deliver real impact. I love working on micro-SaaS products, custom AI chatbots, and automation tools, and I’m constantly experimenting with cutting-edge AI technologies to stay ahead of the curve.
        </p>
      </div>
    </section>
  );
}
