import Image from "next/image";

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
    </section>
  );
}