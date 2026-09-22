import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Droplets, Sun, Heart, Leaf } from "lucide-react";

const features = [
  { icon: Droplets, title: "Águas cristalinas", subtitle: "e diversão garantida", color: "text-crystal-blue" },
  { icon: Sun, title: "Estrutura completa", subtitle: "para toda a família", color: "text-crystal-yellow" },
  { icon: Heart, title: "Momentos que", subtitle: "ficam para sempre", color: "text-crystal-orange" },
  { icon: Leaf, title: "Contato com", subtitle: "a natureza", color: "text-green-500" },
];

export function Hero() {
  return (
    <section className="relative h-dvh min-h-[600px] w-full overflow-hidden">
      <Image
        src="/images/hero/parque-bg.webp"
        alt="Crystal Acqua Park"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="hero-smoke" />

      <div className="relative z-10 flex h-full flex-col items-start justify-center px-8 md:px-16 pb-32 md:pb-24">
        <Image
          src="/images/hero/viva_momentos_incriveis_transparente.webp"
          alt="Viva momentos incríveis"
          width={1576}
          height={998}
          priority
          className="w-[220px] sm:w-[320px] md:w-[420px] lg:w-[480px] h-auto -mt-16 md:-mt-24 -rotate-6"
        />

        <p className="mt-3 md:mt-4 text-base md:text-xl font-bold text-crystal-ink leading-snug ml-[60px] md:ml-[90px]">
          Diversão, lazer e natureza<br />
          para toda a família!
        </p>

        <div className="mt-6 md:mt-8 flex gap-3 ml-[60px] md:ml-[90px]">
          <Button className="h-12 rounded-full bg-crystal-yellow px-6 text-base font-bold text-crystal-ink shadow-md transition-all hover:bg-crystal-orange hover:text-white hover:shadow-lg">
            Comprar ingressos
            <ArrowRight className="ml-1 size-5" />
          </Button>

          <Button variant="outline" className="h-12 rounded-full border-2 border-crystal-ink/20 bg-white px-6 text-base font-bold text-crystal-ink shadow-md transition-all hover:bg-crystal-blue hover:text-white hover:border-crystal-blue">
            Conheça o parque
          </Button>
        </div>
      </div>

      {/* ONDA + FAIXA DE ÍCONES - fixados na base do Hero página */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <svg
            viewBox="0 0 1440 100"
            className="w-full h-[50px] md:h-[70px] block"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="M0,40L80,45C160,50,320,60,480,58C640,56,800,4cd 2,960,38C1120,34,1280,40,1360,43L1440,46L1440,100L0,100Z"
            />
        </svg>

        <div className="bg-white pt-0 pb-8 md:pt-3 md:pb-8 -mt-1">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4 md:gap-8 md:px-8 items-center">
                {features.map((item) => (
                  <div key={item.title} className="flex items-center gap-3">
                      <item.icon className={`size-7 shrink-0 md:size-8 ${item.color}`} />
                      <div className="leading-tight">
                        <p className="text-xs font-bold text-crystal-ink md:text-sm">
                            {item.title}
                        </p>
                        <p className="text-[11px] text-crystal-ink/70 md:text-xs">
                            {item.subtitle}
                        </p>
                      </div>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}