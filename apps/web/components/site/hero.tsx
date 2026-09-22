import Image from "next/image";

import { ArrowRight, Droplets, Sun, Heart, Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";

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

export function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        h-dvh
        min-h-[600px]
        w-full
        overflow-hidden
      "
    >
      {/* FUNDO */}
      <Image
        src="/images/hero/parque-bg.webp"
        alt="Crystal Acqua Park"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* EFEITO DE FUMAÇA */}
      <div className="hero-smoke" />

      {/* CONTEÚDO PRINCIPAL */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          items-start
          justify-start
          px-5
          pt-28
          pb-36

          sm:px-8
          sm:pt-28
          sm:pb-32

          md:px-16
          md:pt-28
          md:pb-28

          lg:pt-28

          xl:justify-center
          xl:pt-0
          xl:pb-28
        "
      >
        {/* TÍTULO */}
        <Image
          src="/images/hero/viva_momentos_incriveis_transparente.webp"
          alt="Viva momentos incríveis"
          width={1576}
          height={998}
          priority
          className="
            h-auto
            w-[200px]
            -rotate-6

            sm:w-[300px]

            md:w-[380px]

            lg:w-[410px]

            xl:w-[480px]
          "
        />

        {/* DESCRIÇÃO */}
        <p
          className="
            mt-3
            ml-5
            max-w-[280px]
            text-sm
            font-bold
            leading-snug
            text-crystal-ink

            sm:ml-10
            sm:max-w-[350px]
            sm:text-base

            md:ml-[90px]
            md:mt-4
            md:max-w-none
            md:text-lg

            lg:text-xl
          "
        >
          Diversão, lazer e natureza
          <br />
          para toda a família!
        </p>

        {/* BOTÕES */}
        <div
          className="
            mt-5
            ml-5
            flex
            flex-col
            gap-3

            sm:ml-10
            sm:flex-row

            md:mt-7
            md:ml-[90px]

            lg:mt-6
          "
        >
          <Button
            className="
              h-11
              rounded-full
              bg-crystal-yellow
              px-5
              text-sm
              font-bold
              text-crystal-ink
              shadow-md
              transition-all
              hover:bg-crystal-orange
              hover:text-white
              hover:shadow-lg

              sm:h-12
              sm:px-6
              sm:text-base
            "
          >
            Comprar ingressos
            <ArrowRight className="ml-1 size-4 sm:size-5" />
          </Button>

          <Button
            variant="outline"
            className="
              h-11
              rounded-full
              border-2
              border-crystal-ink/20
              bg-white
              px-5
              text-sm
              font-bold
              text-crystal-ink
              shadow-md
              transition-all
              hover:border-crystal-blue
              hover:bg-crystal-blue
              hover:text-white

              sm:h-12
              sm:px-6
              sm:text-base
            "
          >
            Conheça o parque
          </Button>
        </div>
      </div>

      {/* ONDA + FAIXA DE ÍCONES */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        {/* ONDA */}
        <svg
          viewBox="0 0 1440 100"
          className="
            block
            h-[55px]
            w-full

            sm:h-[70px]

            md:h-[90px]

            lg:h-[90px]

            xl:h-[100px]
          "
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,55L80,58C160,62,320,68,480,66C640,64,800,52,960,48C1120,44,1280,50,1360,53L1440,56L1440,100L0,100Z"
          />
        </svg>

        {/* FAIXA */}
        <div
          className="
            -mt-1
            bg-white
            px-4
            pb-5
            pt-0

            sm:px-6
            sm:pb-6

            md:px-8
            md:pb-7
            md:pt-2

            lg:pb-6
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-6xl
              grid-cols-2
              items-center
              gap-x-4
              gap-y-4

              sm:gap-x-6

              md:grid-cols-4
              md:gap-8
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

                    md:size-8

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

                      md:text-sm
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

                      md:text-xs
                    "
                  >
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