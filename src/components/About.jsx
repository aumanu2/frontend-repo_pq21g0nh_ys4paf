export default function About() {
  return (
    <section id="about" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Profil Sekolah</h2>
            <p className="mt-4 text-slate-600">
              SMAN 1 PANGKEP berkomitmen untuk mencetak lulusan yang berakhlak mulia, kreatif, serta berdaya saing global. Melalui proses pembelajaran yang aktif, kolaboratif, dan berbasis proyek, siswa didorong untuk mengeksplorasi potensi dirinya.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Fasilitas lengkap: laboratorium, perpustakaan modern, dan ruang multimedia.</li>
              <li>• Ekstrakurikuler beragam: sains, seni, olahraga, dan kepemimpinan.</li>
              <li>• Guru profesional dan lingkungan belajar yang nyaman.</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-semibold text-slate-800">Visi & Misi</h3>
            <p className="mt-3 text-slate-600">
              Visi: Terwujudnya peserta didik yang berkarakter, berprestasi, dan berwawasan global.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                <p className="text-sm text-slate-700">Menciptakan budaya belajar yang menyenangkan dan bermakna.</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                <p className="text-sm text-slate-700">Mengembangkan potensi siswa melalui kegiatan intra dan ekstrakurikuler.</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                <p className="text-sm text-slate-700">Menanamkan karakter dan kepedulian sosial.</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                <p className="text-sm text-slate-700">Meningkatkan literasi digital dan sains.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
