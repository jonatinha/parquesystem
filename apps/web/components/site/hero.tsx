import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-dvh min-h-[200px] w-full overflow-hidden">
      <Image
        src="/images/hero/parque-bg.webp"
        alt="Crystal Acqua Park"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="hero-smoke" />

      <div className="relative z-10 flex h-full flex-col items-start justify-center px-8 md:px-16">
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
          <Button
            className="
              h-12
              rounded-full
              bg-crystal-yellow
              px-6
              text-base
              font-bold
              text-crystal-ink
              shadow-md
              transition-all
              hover:bg-crystal-orange
              hover:text-white
              hover:shadow-lg
            "
        >
               Comprar ingressos
              <ArrowRight className="ml-1 size-5" />
           </Button>

            <Button
               variant="outline"
                 className="
                    h-12
                    rounded-full
                    border-2
                    border-crystal-ink/20
                    bg-white
                    px-6
                    text-base
                    font-bold
                    text-crystal-ink
                    shadow-md
                    transition-all
                    hover:bg-crystal-blue
                    hover:text-white
                    hover:border-crystal-blue
                  "
                >
                Conheça o parque
           </Button>
        </div>
      </div>
    </section>
  );
}