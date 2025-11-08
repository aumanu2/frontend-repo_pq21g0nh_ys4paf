export default function Stats() {
  const stats = [
    { label: 'Siswa Aktif', value: '1.200+' },
    { label: 'Guru & Staff', value: '80+' },
    { label: 'Ekstrakurikuler', value: '25+' },
    { label: 'Prestasi/Th', value: '50+' },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-200 p-6 text-center bg-gradient-to-br from-slate-50 to-white">
              <p className="text-2xl font-extrabold text-blue-700">{s.value}</p>
              <p className="text-sm text-slate-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
