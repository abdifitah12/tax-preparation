export default function TopBar() {
  return (
    <div className="bg-brand-500 text-white">
      <div className="container flex items-center justify-end gap-6 py-2 text-sm">
        <div className="flex items-center gap-2 opacity-95">
          <span className="inline-block">📞</span>
          <span>(206) 849-1390</span>
        </div>
        <a className="opacity-95 hover:opacity-100" href="#">
          🔒 Client Login
        </a>
      </div>
    </div>
  );
}
