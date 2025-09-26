import Link from "next/link";
import { Logo } from "@/components/logo";
import { RiLinkedinFill } from "react-icons/ri";
import { COUNTRIES, navLinks } from "@/data";
import { CITIES } from "@/data";

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
    // {
    //   href: "https://www.instagram.com/",
    //   label: "Instagram",
    //   Icon: RiInstagramFill,
    // },
    // { href: "https://x.com/", label: "X (Twitter)", Icon: RiTwitterXFill },
  ];

  const allLocations = [...CITIES, ...COUNTRIES];
  return (
    <footer className="bg-primary-dark text-white pt-24 pb-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8 text-sm text-gray-light">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Logo variant="white" className="w-[200px] h-[44px]" />
              <p className="text-base">
                Des solutions web qui font grandir votre business.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map(({ href, label, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  className="bg-secondary-dark p-2 rounded-md border border-gray-dark text-primary-green hover:text-white"
                >
                  <Icon className="size-5 " />
                </Link>
              ))}
            </div>
            <div className="pt-2 text-base">
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
              <div className="text-white font-semibold mb-2">Navigation</div>
              {navLinks.map((l) => (
                <Link className="hover:text-white" key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Légal" className="">
            <div className="flex flex-col gap-2 text-base transition-all duration-150 ease-in-out">
              <div className="text-white font-semibold mb-2">Légal</div>
              {legalLinks.map((l) => (
                <Link className="hover:text-white" key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <hr className="my-8 border-gray-dark" />
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
          © {new Date().getFullYear()} Vizion Web — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
