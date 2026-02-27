import Link from "next/link";
import Image from "next/image";
import {
  RiLinkedinFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { COUNTRIES, navLinks } from "@/data";
import { CITIES } from "@/data";
import { DottedGlowBackground } from "./ui/dotted-glow-background";
import Typography from "./typography";
import CallButton from "./call-button";
import { ProjectMarquee } from "./ui/project-marquee";
import { LogoCloud } from "./ui/logo-cloud";
import { portfolioProjects } from "@/data/projets";
import { cn } from "@/lib/utils";
import { FooterTopFade } from "./footer-top-fade";

const logos = [
  { src: "/logos/academy.svg", alt: "Amazonia Academy" },
  { src: "/logos/geteasy.svg", alt: "Get Easy Location" },
  { src: "/logos/hippokom.svg", alt: "Hippo'kom Agency" },
  { src: "/logos/chefkit.svg", alt: "ChefKit SaaS" },
  { src: "/logos/mrkicks.svg", alt: "Mr. Kicks" },
  { src: "/logos/investing.svg", alt: "Amazonian Investing" },
  { src: "/logos/pygmalion.svg", alt: "Pygmalion Conseil" },
  { src: "/logos/zenlounge.svg", alt: "Zen Lounge" },
];

export default function Footer() {
  const legalLinks = [
    { href: "/mentions-legales", label: "Mentions légales" },
    {
      href: "/politique-confidentialite",
      label: "Politique de confidentialité",
    },
  ];
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/dylann-xavero-349765a4/",
      label: "LinkedIn",
      Icon: RiLinkedinFill,
    },
    {
      href: "https://www.instagram.com/vizionweb.fr",
      label: "Instagram",
      Icon: RiInstagramFill,
    },
    {
      href: "https://wa.me/33612345678",
      label: "WhatsApp",
      Icon: RiWhatsappFill,
    },
  ];

  const allLocations = [...CITIES, ...COUNTRIES];
  return (
    <>
      <FooterTopFade />
      <footer className="bg-background pt-8 pb-4 px-4">
        <div className="max-w-[1536px] mx-auto">
          <div className="px-4 pb-4 bg-white rounded-[40px]">
            {/* Pre footer CTA */}
            <section id="calendar" className="relative w-full overflow-hidden">
              <div className="">
                <div className="relative w-full py-12 sm:py-16 px-5 overflow-hidden">
                  <DottedGlowBackground
                    className={cn(
                      "pointer-events-none opacity-20 z-0",
                      "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                      "inset-x-0 inset-y-[0%] h-[100%] will-change-transform transform-gpu"
                    )}
                    opacity={0.3}
                    gap={12}
                    radius={4}
                    colorLightVar="--color-primary-blue"
                    glowColorLightVar="--color-primary-blue-border"
                    backgroundOpacity={0}
                    speedMin={0.3}
                    speedMax={0.6}
                    speedScale={1}
                  />
                  <div className="relative z-10">
                    <Typography
                      align="center"
                      title="Vous avez un projet en tête ?"
                      subtitle="30 minutes, gratuit, sans engagement. On écoute votre besoin, on vous dit si on peut vous aider, et vous repartez avec un plan d'action clair."
                    />

                    <div className="flex justify-center">
                      <CallButton />
                    </div>
                  </div>
                  <ProjectMarquee
                    projects={portfolioProjects.map((p) => ({
                      title: p.title,
                      src: p.src,
                    }))}
                    className="relative z-10 mt-10"
                  />
                  <div className="relative z-10 mt-8">
                    <LogoCloud logos={logos} />
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <section className="w-full">
              <div className="relative bg-primary-dark rounded-4xl text-white pt-12 pb-8 px-6 md:px-10 overflow-hidden">
                {/* Watermark */}
                <Image
                  src="/icons/logo-watermark.svg"
                  alt=""
                  width={800}
                  height={800}
                  className="pointer-events-none absolute -right-20 -bottom-32 w-[500px] md:w-[700px] opacity-[0.04] rotate-[-15deg] select-none"
                  aria-hidden
                />

                <div className="relative z-10">
                  {/* Logo */}
                  <div className="mb-12">
                    <Link href="/">
                      <Image
                        src="/logo-blue-white.svg"
                        alt="Vizion Web"
                        width={300}
                        height={40}
                        className="h-10 md:h-24 w-auto"
                      />
                    </Link>
                    <p className="text-base text-gray-light mt-3">
                      Applications web et sites sur-mesure pour startups et
                      entreprises.
                    </p>
                  </div>

                  <div className="text-sm text-gray-light">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-10 items-start">
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                          {socialLinks.map(({ href, label, Icon }) => (
                            <Link
                              key={href}
                              href={href}
                              aria-label={label}
                              className="bg-white p-2 rounded-md text-primary-blue hover:text-white hover:bg-primary-blue transition-all duration-300 ease-in-out"
                            >
                              <Icon className="size-5 " />
                            </Link>
                          ))}
                        </div>
                        <div className="text-base">
                          <Link
                            href="mailto:contact@vizionweb.fr"
                            className="hover:text-white"
                          >
                            contact@vizionweb.fr
                          </Link>
                        </div>
                      </div>

                      <nav aria-label="Navigation" className="">
                        <div className="flex flex-col gap-2 text-base transition-all duration-150 ease-in-out">
                          <div className="text-white font-semibold mb-2">
                            Navigation
                          </div>
                          {navLinks.map((l) => (
                            <Link
                              className="hover:text-white"
                              key={l.href}
                              href={l.href}
                            >
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      </nav>

                      <nav aria-label="Ressources" className="">
                        <div className="flex flex-col gap-2 text-base transition-all duration-150 ease-in-out">
                          <div className="text-white font-semibold mb-2">
                            Ressources
                          </div>
                          <Link className="hover:text-white" href="/blog">
                            Blog
                          </Link>
                        </div>
                      </nav>

                      <nav aria-label="Légal" className="">
                        <div className="flex flex-col gap-2 text-base transition-all duration-150 ease-in-out">
                          <div className="text-white font-semibold mb-2">
                            Légal
                          </div>
                          {legalLinks.map((l) => (
                            <Link
                              className="hover:text-white"
                              key={l.href}
                              href={l.href}
                            >
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      </nav>
                    </div>
                    <hr className="my-8 border-secondary-dark" />
                    <div className="">
                      <div className="flex flex-wrap gap-4 justify-start">
                        <div className="flex flex-wrap gap-4 justify-between sm:justify-start w-full sm:w-fit">
                          {allLocations.map((c) => (
                            <Link
                              key={c.slug}
                              href={`/${c.slug}`}
                              className="text-gray-light hover:text-white hover:border-white transition"
                            >
                              {c.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 text-sm text-gray-light text-center">
                      © {new Date().getFullYear()} Vizion Web — Tous droits
                      réservés.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
}
