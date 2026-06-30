export const navItems = [
  { label: "Início", href: "/" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Roadmaps", href: "/roadmaps" },
  { label: "Referências", href: "/referencias" },
  { label: "Sobre", href: "/sobre" },
];

export const areas = [
  { label: "Áreas", href: "/areas" },
  { label: "Front-end", href: "/areas/front-end" },
  { label: "Back-end", href: "/areas/back-end" },
  { label: "Dados", href: "/areas/dados" },
  { label: "Cyber", href: "/areas/cyber" },
  { label: "Design", href: "/areas/design" },
];

type NavbarProps = {
  areasOpen: boolean;
  onToggleAreas: () => void;
};

export function Navbar({ areasOpen, onToggleAreas }: NavbarProps) {
  return (
    <nav className="hidden items-center justify-center gap-8 lg:flex">
      <a
        href="/"
        className="text-[14px] font-[500] uppercase tracking-[0.2em] text-text transition hover:text-purple-link"
      >
        Início
      </a>

      <div className="relative">
        <button
          type="button"
          onClick={onToggleAreas}
          className="flex items-center gap-2 text-[14px] font-[500] uppercase tracking-[0.2em] text-text transition hover:text-purple-link"
          aria-expanded={areasOpen}
          aria-controls="areas-menu"
        >
          Áreas
          <span className="inline-block rotate-0 transition-transform duration-200" aria-hidden="true">
            ▼
          </span>
        </button>

        {areasOpen ? (
          <div
            id="areas-menu"
            className="absolute left-0 top-full mt-3 w-48 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/95 p-3 shadow-[0_16px_60px_rgba(0,0,0,0.35)]"
          >
            {areas.slice(1).map((area) => (
              <a
                key={area.label}
                href={area.href}
                className="block rounded-2xl px-4 py-3 text-sm text-text transition hover:bg-purple/10 hover:text-purple-link"
              >
                {area.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>

      {navItems.slice(1).map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-[14px] font-[500] uppercase tracking-[0.2em] text-text transition hover:text-purple-link"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
