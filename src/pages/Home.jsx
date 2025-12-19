export default function Home() {
  return (
    <main>

      {/* ===================== HERO (VIDEO BACKGROUND) ===================== */}
       <section
  id="home"
  className="relative min-h-[650px] overflow-hidden"
>
  {/* ================= VIDEO BACKGROUND ================= */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    poster="/hero.jpg"   // optional fallback image
  >
    <source src="/vedio.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* ================= DARK OVERLAY ================= */}
  <div className="absolute inset-0 bg-black/60" />

  {/* ================= HERO CONTENT (CENTERED) ================= */}
  <div className="relative container flex flex-col items-center justify-center text-center text-white min-h-[650px]">

    <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
      ⏱ Done in 15 minutes
    </span>

    <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
      Trusted CPA & Tax <br /> Preparation Services
    </h1>

    <p className="mt-4 max-w-2xl text-white/80 text-lg">
      Professional tax preparation, accounting, and business advisory
      services designed to help individuals and businesses grow with
      confidence.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <button className="btn-primary">
        Book an Appointment
      </button>
      <button className="btn-soft">
        Client Portal
      </button>
    </div>

  </div>
</section>


       
      {/* ===================== ABOUT ===================== */}
<section id="about" className="py-20 bg-white">
  <div className="container max-w-4xl">
    <h2 className="text-3xl font-bold text-slate-900 mb-10">
      About Our Firm
    </h2>

    {/* Professionalism */}
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-slate-800 mb-3">
        Professionalism
      </h3>
      <p className="text-slate-600 mb-4 leading-relaxed">
        Our firm is one of the leading firms in the area. By combining our
        expertise, experience and the energy of our staff, each client receives
        close personal and professional attention.
      </p>
      <p className="text-slate-600 leading-relaxed">
        Our high standards, service and specialized staff spell the difference
        between our outstanding performance and other firms. We make sure that
        every client is served by the expertise of our whole firm.
      </p>
    </div>

    {/* Responsiveness */}
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-slate-800 mb-3">
        Responsiveness
      </h3>
      <p className="text-slate-600 mb-4 leading-relaxed">
        Our firm is responsive. Companies who choose our firm rely on competent
        advice and fast, accurate personnel. We provide total financial services
        to individuals, large and small businesses and other agencies.
      </p>
      <p className="text-slate-600 mb-4 leading-relaxed">
        To see a listing of our services, please take a moment and look at our
        services page. Because we get new business from the people who know us
        best, client referrals have fueled our growth in the recent years.
      </p>
      <p className="text-slate-600 leading-relaxed">
        Through hard work, we have earned the respect of the business and
        financial communities. This respect illustrates our diverse talents,
        dedication and ability to respond quickly.
      </p>
    </div>

    {/* Quality */}
    <div>
      <h3 className="text-xl font-semibold text-slate-800 mb-3">
        Quality
      </h3>
      <p className="text-slate-600 mb-4 leading-relaxed">
        An accounting firm is known for the quality of its service. Our firm’s
        reputation reflects the high standards we demand of ourselves.
      </p>
      <p className="text-slate-600 mb-4 leading-relaxed">
        Our primary goal as a trusted advisor is to be available and to provide
        insightful advice to enable our clients to make informed financial
        decisions. We do not accept anything less from ourselves and this is
        what we deliver to you.
      </p>
      <p className="text-slate-600 mb-4 leading-relaxed">
        We feel it is extremely important to continually professionally educate
        ourselves to improve our technical expertise, financial knowledge and
        service to our clients.
      </p>
      <p className="text-slate-600 mb-4 leading-relaxed">
        Our high service quality and “raving fan” clients are the result of our
        commitment to excellence.
      </p>
      <p className="text-slate-600 leading-relaxed">
        We will answer all of your questions, as they impact both your tax and
        financial situations. We welcome you to contact us anytime.
      </p>
    </div>
  </div>
</section>


      {/* ===================== SERVICES ===================== */}
       {/* ===================== SERVICES ===================== */}
<section id="services" className="py-20 bg-slate-50">
  <div className="container">
    <h2 className="text-3xl font-bold text-slate-900 mb-12">
      Our Services
    </h2>

    <div className="grid gap-10 md:grid-cols-3">

      {/* ================= Individuals ================= */}
      <div className="card p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          Services for Individuals
        </h3>
        <ul className="space-y-2 text-slate-600">
          <li>• Personal Financial Planning</li>
          <li>• Retirement Planning</li>
          <li>• Estate Planning</li>
        </ul>
      </div>

      {/* ================= Business Services ================= */}
      <div className="card p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          Business Services
        </h3>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li>• Small Business Accounting</li>
          <li>• Payroll</li>
          <li>• Part-Time CFO Services</li>
          <li>• Audits – Reviews – Compilations</li>
          <li>• Cash Flow Management</li>
          <li>• Bank Financing</li>
          <li>• Strategic Business Planning</li>
          <li>• Succession Planning</li>
          <li>• New Business Formation</li>
          <li>• Non-Profit Organizations</li>
          <li>• Internal Controls</li>
        </ul>
      </div>

      {/* ================= Tax Services ================= */}
      <div className="card p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          Tax Services
        </h3>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li>• Tax Preparation</li>
          <li>• Tax Planning</li>
          <li>• Tax Problems</li>
          <li>• IRS Audit Representation</li>
          <li>• Non-Filed Tax Returns</li>
          <li>• Back Taxes Owed</li>
          <li>• Payroll Tax Problems</li>
          <li>• IRS Liens</li>
          <li>• IRS Levies</li>
          <li>• IRS Wage Garnishment</li>
          <li>• IRS Seizures</li>
          <li>• IRS Payment Plan</li>
          <li>• Offer In Compromise</li>
          <li>• Bankruptcy</li>
          <li>• Innocent Spouse Relief</li>
          <li>• Get Your IRS File</li>
        </ul>
      </div>

    </div>
  </div>
</section>


      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold">Contact Us</h2>

          <p className="mt-4 text-slate-600">
            Call us today or book an appointment online.
          </p>

          <p className="mt-2 text-xl font-semibold text-slate-800">
            📞 (254) 751-1133
          </p>
        </div>
      </section>

    </main>
  );
}
