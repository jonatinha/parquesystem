"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, CalendarCheck2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
{
    label: "Início",
    href: "#parque",
},
  {
    label: "O Parque",
    href: "#parque",
  },
  {
    label: "Atrações",
    href: "#atracoes",
  },
  {
    label: "Ingressos",
    href: "#ingressos",
  },
  {
    label: "Informações",
    href: "#informacoes",
  },
  {
    label: "Contato",
    href: "#contato",
  },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto w-full px-4 py-6 sm:px-6 lg:px-8">

        <nav style={{
            background:
            "linear-gradient(to right, rgba(255,255,255,0.0) 5%, rgba(255,255,255,0.90) 15%, rgba(255,255,255,0.90) 85%, rgba(0,0,0,0.0) 98%)",
        }}
        className="relative flex h-16 items-center px-4   md:h-[58px] md:px-10 ">

          {/* =====================================================
              LOGO
          ====================================================== */}

          <Link
            href="/"
            aria-label="Crystal Acqua Park - início"
            className="
              absolute
              left-4
              top-1/2
              z-20
              flex
              h-24
              w-28
              -translate-y-1/2
              items-center
              justify-center
              md:left-6
              md:h-28
              md:w-36
            "
          >
            <Image
              src="/images/logo/crystal-acqua-park-logo-transparent.webp"
              alt="Crystal Acqua Park"
              width={1536}
              height={1024}
              priority
              className="h-full w-full object-contain"
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <div className="ml-28 hidden flex-1 items-center justify-center gap-6 lg:ml-40 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  whitespace-nowrap
                  text-sm
                  font-semibold
                  text-crystal-ink
                  transition-colors
                  hover:text-crystal-blue
                "
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* =====================================================
              DESKTOP CTA
          ====================================================== */}

          <div className="ml-auto hidden lg:flex">
            <Button
              className="
                rounded-full
                bg-crystal-yellow
                px-6
                font-bold
                text-crystal-ink
                shadow-md
                transition-all
                hover:bg-crystal-orange
                hover:text-white
                hover:shadow-lg
              "
            >
              Reserve agora
              <CalendarCheck2 className="ml-1 size-4"/>
            </Button>
          </div>

          {/* =====================================================
              MOBILE ACTIONS
          ====================================================== */}

          <div className="ml-auto flex items-center gap-2 lg:hidden">

            {/* BOTÃO AMARELO MOBILE */}

            <Button
              className="
                h-10
                rounded-full
                bg-crystal-yellow
                px-4
                text-xs
                font-bold
                text-crystal-ink
                shadow-md
                hover:bg-crystal-orange
                hover:text-white
              "
            >
              Reservar
            </Button>

            {/* MENU */}

            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Abrir menu"
                    className="
                      size-10
                      rounded-full
                      border-crystal-blue/20
                      bg-white
                      shadow-sm
                    "
                  >
                    <Menu className="size-5 text-crystal-blue-dark" />
                  </Button>
                }
              />

              <SheetContent
                side="right"
                className="w-[85%] border-l-0 sm:max-w-sm"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center">
                    <Image
                      src="/images/logo/crystal-acqua-park-logo-transparent.webp"
                      alt="Crystal Acqua Park"
                      width={1536}
                      height={1024}
                      className="h-20 w-28 object-contain"
                    />
                  </SheetTitle>

                  <SheetDescription className="text-left">
                    Viva momentos incríveis no Crystal Acqua Park.
                  </SheetDescription>
                </SheetHeader>

                {/* LINKS */}

                <div className="mt-8 flex flex-col gap-2">
                  {navigation.map((item) => (
                    <SheetClose
                      key={item.href}
                      render={
                        <Link
                          href={item.href}
                          className="
                            rounded-xl
                            px-4
                            py-3
                            text-base
                            font-semibold
                            text-crystal-ink
                            transition-colors
                            hover:bg-crystal-aqua/10
                            hover:text-crystal-blue
                          "
                        >
                          {item.label}
                        </Link>
                      }
                    />
                  ))}
                </div>

                {/* CTA DO MENU */}

                <div className="mt-6">
                  <SheetClose
                    render={
                      <Button
                        className="
                          w-full
                          rounded-full
                          bg-crystal-yellow
                          py-6
                          font-bold
                          text-crystal-ink
                          shadow-md
                          hover:bg-crystal-orange
                          hover:text-white
                        "
                      >
                        Reserve agora
                        <CalendarCheck2 className="ml-1 size-4" />
                      </Button>
                    }
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </nav>
      </div>
    </header>
  );
}