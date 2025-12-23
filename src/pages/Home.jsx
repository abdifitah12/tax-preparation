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



      {/* ===================== SERVICES ===================== */}
 <section id="services" className="py-20 bg-white">
  <div className="container">

    {/* ================= HEADER ================= */}
    <div className="max-w-3xl mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        Get Your Maximum Refund!
      </h2>
      <p className="mt-3 text-slate-600">
        We provide professional tax services for individuals, families, and small businesses.
      </p>
    </div>

    {/* ================= CONTENT GRID ================= */}
    <div className="grid gap-10 md:grid-cols-3">

      {/* ===== Our Services Include ===== */}
      <div className="rounded-2xl border p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Our Services Include
        </h3>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li>✔ Personal Tax Filing</li>
          <li>✔ Business Tax Filing</li>
          <li>✔ Schedule C</li>
          <li>✔ 1099 & Self-Employed Taxes</li>
          <li>✔ ITIN Assistance</li>
          <li>✔ Amended Returns</li>
          <li>✔ IRS Letter Review & Support</li>
        </ul>
      </div>

      {/* ===== Why Choose Us ===== */}
      <div className="rounded-2xl border p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Why Choose Us?
        </h3>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li>✔ Experienced & Professional</li>
          <li>✔ Secure and Confidential</li>
          <li>✔ Same-Day Filing (with all documents)</li>
          <li>✔ Transparent Pricing</li>
          <li>✔ Friendly Customer Service</li>
        </ul>
      </div>

      {/* ===== Required Documents ===== */}
      <div className="rounded-2xl border p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Required Documents
        </h3>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li>• W-2 / 1099 forms</li>
          <li>• ID for you and dependents</li>
          <li>• Social Security or ITIN numbers</li>
          <li>• Income & expense records (if self-employed)</li>
        </ul>
      </div>

    </div>

    {/* ================= BOTTOM CTA ================= */}
    <div className="mt-14 rounded-xl bg-slate-900 text-white px-6 py-5 text-center">
      <p className="text-lg font-semibold">
        Walk-ins & Appointments Welcome
      </p>
    </div>

  </div>
</section>


       
      {/* ===================== ABOUT ===================== */}
   <section id="about" className="py-20 bg-white">
  <div className="container max-w-5xl">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        About Our Firm
      </h2>
      <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
        Trusted guidance, responsive service, and a commitment to quality—so you
        can make confident financial decisions.
      </p>
    </div>

    {/* Content */}
    <div className="grid gap-6 md:grid-cols-3">
      {/* Professionalism */}
      <div className="rounded-2xl border bg-slate-50 p-6 shadow-sm hover:shadow-md transition">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-white border flex items-center justify-center text-lg">
            ⭐
          </div>
          <h3 className="text-lg font-semibold text-slate-900">
            Professionalism
          </h3>
        </div>

        <p className="mt-4 text-slate-600 text-sm leading-relaxed">
          Our firm is one of the leading firms in the area. By combining our
          expertise, experience and the energy of our staff, each client receives
          close personal and professional attention.
        </p>

        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
          Our high standards, service and specialized staff spell the difference
          between our outstanding performance and other firms. We make sure that
          every client is served by the expertise of our whole firm.
        </p>
      </div>

      {/* Responsiveness */}
      <div className="rounded-2xl border bg-slate-50 p-6 shadow-sm hover:shadow-md transition">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-white border flex items-center justify-center text-lg">
            ⚡
          </div>
          <h3 className="text-lg font-semibold text-slate-900">
            Responsiveness
          </h3>
        </div>

        <p className="mt-4 text-slate-600 text-sm leading-relaxed">
          Our firm is responsive. Companies who choose our firm rely on competent
          advice and fast, accurate personnel. We provide total financial services
          to individuals, large and small businesses and other agencies.
        </p>

        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
          To see a listing of our services, please take a moment and look at our
          services page. Because we get new business from the people who know us
          best, client referrals have fueled our growth in the recent years.
        </p>

        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
          Through hard work, we have earned the respect of the business and
          financial communities. This respect illustrates our diverse talents,
          dedication and ability to respond quickly.
        </p>
      </div>

      {/* Quality */}
      <div className="rounded-2xl border bg-slate-50 p-6 shadow-sm hover:shadow-md transition">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-white border flex items-center justify-center text-lg">
            ✅
          </div>
          <h3 className="text-lg font-semibold text-slate-900">
            Quality
          </h3>
        </div>

        <p className="mt-4 text-slate-600 text-sm leading-relaxed">
          An accounting firm is known for the quality of its service. Our firm’s
          reputation reflects the high standards we demand of ourselves.
        </p>

        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
          Our primary goal as a trusted advisor is to be available and to provide
          insightful advice to enable our clients to make informed financial
          decisions. We do not accept anything less from ourselves and this is
          what we deliver to you.
        </p>

        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
          We feel it is extremely important to continually professionally educate
          ourselves to improve our technical expertise, financial knowledge and
          service to our clients.
        </p>

        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
          Our high service quality and “raving fan” clients are the result of our
          commitment to excellence.
        </p>

        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
          We will answer all of your questions, as they impact both your tax and
          financial situations. We welcome you to contact us anytime.
        </p>
      </div>
    </div>
  </div>
</section>



       
  



      {/* ===================== CONTACT ===================== */}
  <section id="contact" className="py-20 bg-slate-50">
  <div className="container max-w-2xl">

    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-extrabold text-slate-900">
        Contact Us
      </h2>
      <p className="mt-2 text-slate-600">
        Call, visit, or schedule an appointment today.
      </p>
    </div>

    {/* Contact Card */}
    <div className="rounded-2xl bg-white border shadow-sm p-6 text-center">

      {/* Phone */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="text-xl">📞</span>
        <a
          href="tel:12067718688"
          className="text-lg font-semibold text-slate-900 hover:underline"
        >
          (206) 771-8688
        </a>
      </div>

      {/* Divider */}
      <div className="mx-auto my-4 h-px w-24 bg-slate-200" />

      {/* Address */}
      <div className="flex flex-col items-center gap-1 text-slate-700">
        <span className="text-xl">📍</span>
        <p className="font-semibold">Madina Mall</p>
        <p className="text-sm">(Opposite Tukwila Library)</p>
        <p className="text-sm">
          1420 International Blvd, Tukwila, WA
        </p>
      </div>

      {/* Map */}
      <div className="mt-6 overflow-hidden rounded-xl border">
        <iframe
          title="Office Location Map"
          src="https://www.google.com/maps?q=1420%20International%20Blvd%2C%20Tukwila%2C%20WA&output=embed"
          className="w-full h-64 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Directions */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=1420+International+Blvd,+Tukwila,+WA"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm font-semibold text-slate-900 hover:underline"
      >
        Get Directions →
      </a>
    </div>

    {/* Footer text */}
    <div className="mt-6 text-center">
      
    </div>

  </div>
</section>



    </main>
  );
}
