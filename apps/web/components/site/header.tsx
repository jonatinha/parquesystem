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
    href: "#inicio",
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
      <div className="mx-auto w-full px-3 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
        <nav
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.0) 5%, rgba(255,255,255,0.90) 15%, rgba(255,255,255,0.90) 85%, rgba(0,0,0,0.0) 98%)",
          }}
          className="
            relative
            flex
            h-16
            items-center
            px-3
            sm:h-20
            sm:px-6
            md:h-[75px]
            md:px-8
            lg:px-10
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Crystal Acqua Park - início"
            className="
              absolute
              left-2
              top-1/2
              z-20
              flex
              h-20
              w-24
              -translate-y-1/2
              items-center
              justify-center
              sm:left-4
              sm:h-24
              sm:w-28
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

          {/* DESKTOP NAVIGATION */}
          <div
            className="
              ml-24
              hidden
              flex-1
              items-center
              justify-center
              gap-5
              lg:ml-36
              lg:flex
              xl:gap-8
            "
          >
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
                  xl:text-base
                "
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="ml-auto hidden lg:flex">
            <Button
              className="
                h-11
                rounded-full
                bg-crystal-yellow
                px-6
                text-sm
                font-bold
                text-crystal-ink
                shadow-md
                transition-all
                hover:bg-crystal-orange
                hover:text-white
                hover:shadow-lg
                xl:h-12
                xl:px-8
                xl:text-base
              "
            >
              Reserve agora
              <CalendarCheck2 className="ml-1 size-5" />
            </Button>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="ml-auto flex items-center gap-2 lg:hidden">
            {/* BOTÃO RESERVAR */}
            <Button
              className="
                h-9
                rounded-full
                bg-crystal-yellow
                px-3
                text-[11px]
                font-bold
                text-crystal-ink
                shadow-md
                hover:bg-crystal-orange
                hover:text-white
                sm:h-10
                sm:px-4
                sm:text-xs
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
                      size-9
                      rounded-full
                      border-crystal-blue/20
                      bg-white
                      shadow-sm
                      sm:size-10
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