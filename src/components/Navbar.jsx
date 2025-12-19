import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  // Close menu on Escape
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 font-extrabold text-slate-900"
        >
          <span className="inline-grid h-9 w-9 place-items-center rounded-xl bg-slate-100">
            CPA
          </span>
          <span className="hidden sm:block">Firm</span>
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="hover:text-slate-900"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Call button (desktop) */}
          <a
            href="tel:12547511133"
            className="hidden sm:inline-flex btn-primary"
          >
            Call us: (254) 751-1133
          </a>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm font-semibold"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 space-y-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="w-full text-left rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                {l.label}
              </button>
            ))}

            {/* Call button (mobile full width) */}
            <a
              href="tel:12547511133"
              className="btn-primary w-full"
              style={{ display: "inline-flex" }}
              onClick={() => setOpen(false)}
            >
              Call us: (254) 751-1133
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
