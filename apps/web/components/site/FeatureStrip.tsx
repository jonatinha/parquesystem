import { Droplets, Sun, Heart, Leaf } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Águas cristalinas",
    subtitle: "e diversão garantida",
    color: "text-crystal-blue",
  },
  {
    icon: Sun,
    title: "Estrutura completa",
    subtitle: "para toda a família",
    color: "text-crystal-yellow",
  },
  {
    icon: Heart,
    title: "Momentos que",
    subtitle: "ficam para sempre",
    color: "text-crystal-orange",
  },
  {
    icon: Leaf,
    title: "Contato com",
    subtitle: "a natureza",
    color: "text-green-500",
  },
];

export function FeatureStrip() {
  return (
    <div className="relative z-10 w-full bg-white py-8 md:py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4 md:gap-8 md:px-8">
        {features.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <item.icon className={`size-8 shrink-0 md:size-9 ${item.color}`} />
            <div className="leading-tight">
              <p className="text-sm font-bold text-crystal-ink md:text-base">
                {item.title}
              </p>
              <p className="text-xs text-crystal-ink/70 md:text-sm">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}