export default function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-100">
      <div className="container py-8">
        <div className="grid gap-6 md:grid-cols-3 text-sm">

          {/* Stay Connected */}
          <div>
            <h3 className="font-semibold mb-2">Stay Connected</h3>
            <div className="h-px bg-slate-500 mb-2" />
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">RSS Feed</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <div className="h-px bg-slate-500 mb-2" />
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Portal Login</a></li>
              <li><a href="#" className="hover:text-white">Site Map</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Disclaimer</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
  <h3 className="font-semibold mb-2">Contact</h3>
  <div className="h-px bg-slate-500 mb-2" />

  <p className="font-medium">
    AAWPLUS Financial Services LLC
  </p>

  <p>
    Madina Mall (Opposite Tukwila Library)
  </p>

  <p>
    1420 International Blvd, Tukwila, WA
  </p>

  <p className="mt-1">
    Phone:{" "}
    <a href="tel:12067718688" className="hover:text-white">
      (206) 771-8688
    </a>
  </p>

  <p>
    {/* <a
      href="mailto:info@aawplus.com"
      className="hover:text-white"
    >
      info@aawplus.com
    </a> */}
  </p>
</div>


        </div>

        {/* Bottom line */}
        <div className="mt-6 border-t border-slate-600 pt-3 text-center text-xs text-slate-300">
          © {new Date().getFullYear()}  
        </div>
      </div>
    </footer>
  );
}
