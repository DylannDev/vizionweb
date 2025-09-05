import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-medium text-foreground">Vizion Web</p>
            <p className="text-xs">
              Sites et applications web qui convertissent.
            </p>
          </div>
          <nav aria-label="Liens de bas de page" className="flex gap-4">
            <Link href="/services">Services</Link>
            <Link href="/realisations">Réalisations</Link>
            <Link href="/process">Process</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="mt-6 text-xs">
          © {new Date().getFullYear()} Vizion Web — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
