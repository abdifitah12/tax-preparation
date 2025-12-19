export default function Navbar() {

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="container flex items-center justify-between py-4">
        <div className="font-bold text-lg">CPA Firm</div>

        <nav className="flex gap-6 font-semibold">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>

        <button className="btn-primary">
          Call us: (254) 751-1133
        </button>
      </div>
    </header>
  );
}
