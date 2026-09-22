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
    <div className="relative z-10 w-full bg-white py-5 sm:py-7 md:py-10">
      <div
        className="
          mx-auto
          grid
          max-w-6xl
          grid-cols-2
          gap-x-4
          gap-y-5
          px-4

          sm:gap-x-6
          sm:px-6

          md:grid-cols-4
          md:gap-8
          md:px-8
        "
      >
        {features.map((item) => (
          <div
            key={item.title}
            className="
              flex
              min-w-0
              items-center
              gap-2

              sm:gap-3
            "
          >
            <item.icon
              className={`
                size-6
                shrink-0

                sm:size-7

                md:size-9

                ${item.color}
              `}
            />

            <div className="min-w-0 leading-tight">
              <p
                className="
                  truncate
                  text-[10px]
                  font-bold
                  text-crystal-ink

                  sm:text-xs

                  md:text-base
                "
              >
                {item.title}
              </p>

              <p
                className="
                  truncate
                  text-[9px]
                  text-crystal-ink/70

                  sm:text-[11px]

                  md:text-sm
                "
              >
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}