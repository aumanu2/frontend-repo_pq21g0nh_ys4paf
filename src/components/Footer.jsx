export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-white"><span className="text-blue-400">SMAN 1</span> PANGKEP</p>
            <p className="text-sm text-slate-400 mt-1">Jalan Pendidikan No. 1, Pangkajene dan Kepulauan</p>
          </div>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} SMAN 1 Pangkep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
