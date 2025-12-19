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
            <p className="font-medium">Traplena, Sullivan & Reinke, PC</p>
            <p>Waco, TX</p>
            <p>
              Phone:{" "}
              <a href="tel:12547511133" className="hover:text-white">
                (254) 751-1133
              </a>
            </p>
            <p>
              <a href="mailto:jason@tsr-cpa.com" className="hover:text-white">
                jason@tsr-cpa.com
              </a>
            </p>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-6 border-t border-slate-600 pt-3 text-center text-xs text-slate-300">
          © {new Date().getFullYear()} Your CPA Firm
        </div>
      </div>
    </footer>
  );
}
