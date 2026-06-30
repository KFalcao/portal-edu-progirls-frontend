import { useState } from "react";
import { Navbar, areas, navItems } from "./Navbar";
import { SearchBar } from "./SearchBar";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/70 bg-base/95 backdrop-blur-lg">
      <div className="mx-auto w-full max-w-[1176px] px-5 py-4 md:px-8 lg:px-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <a
              href="/"
              className="flex items-center gap-4 text-text"
              aria-label="Ir para a página inicial"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple text-base font-semibold text-neutral-900 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                P
              </div>

              <div className="hidden md:flex flex-col leading-none">
                <span className="font-space-mono text-[10px] uppercase tracking-[0.3em] text-purple-light">
                  Portal de conteúdos
                </span>
                <span className="font-ibm-plex-sans text-[18px] font-semibold uppercase tracking-[0.2em] text-text">
                  PROGIRLS
                </span>
              </div>
            </a>

            <div className="hidden items-center gap-4 lg:flex">
              <SearchBar placeholder="Buscar..." />

              <a
                href="/login"
                className="rounded-full bg-lime px-6 py-3 text-[12px] font-[700] uppercase tracking-[0.25em] text-neutral-900 transition hover:bg-lime/90"
              >
                Login
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 text-text transition hover:border-purple hover:text-purple-link lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <span className="text-[22px]">≡</span>
            </button>
          </div>

          <div className="mx-auto w-full max-w-[900px]">
            <Navbar areasOpen={areasOpen} onToggleAreas={() => setAreasOpen((current) => !current)} />
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-base px-5 py-6 text-text lg:hidden">
          <div className="flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-3 text-text">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple text-base font-semibold text-neutral-900">
                P
              </div>
              <span className="font-ibm-plex-sans text-[18px] font-semibold uppercase tracking-[0.2em] text-text">
                PROGIRLS
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 text-text transition hover:border-purple hover:text-purple-link"
              aria-label="Fechar menu"
            >
              ×
            </button>
          </div>

          <div className="mt-8">
            <SearchBar placeholder="Buscar..." />
          </div>

          <div className="mt-8 space-y-4">
            <a
              href="/"
              className="block rounded-3xl border border-neutral-700/80 bg-neutral-900/80 px-5 py-4 text-[14px] font-[600] uppercase tracking-[0.2em] text-text transition hover:border-purple hover:bg-neutral-900"
            >
              Início
            </a>

            <div className="space-y-2 rounded-3xl border border-neutral-700/80 bg-neutral-900/80 p-4">
              <button
                type="button"
                onClick={() => setAreasOpen((current) => !current)}
                className="flex w-full items-center justify-between text-[14px] font-[600] uppercase tracking-[0.2em] text-text transition hover:text-purple-link"
                aria-expanded={areasOpen}
                aria-controls="mobile-areas-menu"
              >
                Áreas
                <span className="text-base">{areasOpen ? "−" : "+"}</span>
              </button>

              {areasOpen ? (
                <div id="mobile-areas-menu" className="space-y-2 pt-4">
                  {areas.slice(1).map((area) => (
                    <a
                      key={area.label}
                      href={area.href}
                      className="block rounded-2xl px-4 py-3 text-[14px] text-text transition hover:bg-purple/10 hover:text-purple-link"
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
                className="block rounded-3xl border border-neutral-700/80 bg-neutral-900/80 px-5 py-4 text-[14px] font-[600] uppercase tracking-[0.2em] text-text transition hover:border-purple hover:bg-neutral-900"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/login"
              className="flex min-w-full items-center justify-center rounded-full bg-lime px-6 py-4 text-[14px] font-[700] uppercase tracking-[0.25em] text-neutral-900 transition hover:bg-lime/90"
            >
              Login
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
