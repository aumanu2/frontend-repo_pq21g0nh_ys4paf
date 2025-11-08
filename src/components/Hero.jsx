export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-blue-600 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            SMAN 1 PANGKEP
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Sekolah unggulan dengan budaya kolaboratif, karakter kuat, dan prestasi akademik serta non-akademik. Kami membangun generasi berintegritas dan siap bersaing di masa depan.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#activities" className="px-5 py-3 rounded-md bg-white text-blue-700 font-medium shadow hover:bg-blue-50">
              Lihat Dokumentasi Kegiatan
            </a>
            <a href="#suggestions" className="px-5 py-3 rounded-md bg-blue-500/20 border border-white/20 hover:bg-blue-500/30 font-medium">
              Sampaikan Saran
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
    </section>
  );
}
