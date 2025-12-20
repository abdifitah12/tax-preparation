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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  // Close menu on Escape key
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container flex items-center justify-between py-3">

        {/* ================= LOGO ================= */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt="AAWPLUS Financial Services LLC"
            className="h-10 sm:h-12 w-auto"
          />
        </button>

        {/* ================= DESKTOP MENU ================= */}
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

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-3">

          {/* Profile Image (desktop only) */}
          <img
            src="/pic1.jpeg"
            alt="Managing Partner"
            className="hidden sm:block h-10 w-10 rounded-full object-cover border border-slate-300 shadow-sm cursor-pointer"
            title="Founder & Managing Partner"
            onClick={() => scrollTo("about")}
          />

          {/* Call button (desktop) */}
          <a
            href="tel:12067718688"
            className="hidden sm:inline-flex btn-primary"
          >
            Call us: (206) 771-8688
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

      {/* ================= MOBILE MENU ================= */}
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

            {/* Mobile call button */}
            <a
              href="tel:12067718688"
              className="btn-primary w-full"
              style={{ display: "inline-flex" }}
              onClick={() => setOpen(false)}
            >
              Call us: (206) 771-8688
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
