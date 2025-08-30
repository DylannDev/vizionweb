import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Layout, Code2, Megaphone, Search, Type } from "lucide-react";

export function SkillsSection() {
  const skills = [
    {
      icon: Layout,
      title: "UI/UX Design",
      desc: "Parcours simples qui mènent à l’action. Maquettes claires, responsive soigné.",
    },
    {
      icon: Code2,
      title: "Développement Web",
      desc: "Code sur-mesure, rapide, fiable. Intégrations propres et base solide pour évoluer.",
    },
    {
      icon: Megaphone,
      title: "Marketing",
      desc: "Pages orientées conversion, analytics posés, suivi des objectifs.",
    },
    {
      icon: Search,
      title: "SEO on-site",
      desc: "Structure propre, balises et maillage, performances et données structurées.",
    },
    {
      icon: Type,
      title: "Copywriting",
      desc: "Promesse claire, bénéfices visibles, CTA précis, micro-textes qui lèvent les frictions.",
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Compétences</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-blue-500" aria-hidden /> {title}
                </CardTitle>
              </CardHeader>
              <CardContent>{desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
