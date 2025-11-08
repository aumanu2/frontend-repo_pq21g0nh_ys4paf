import { useState } from 'react';

const sampleActivities = [
  {
    id: 1,
    title: 'Upacara Bendera',
    date: '12 Jan 2025',
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Lomba Sains',
    date: '23 Feb 2025',
    img: 'https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Pelatihan Kepemimpinan',
    date: '05 Mar 2025',
    img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Pentas Seni',
    date: '20 Apr 2025',
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ActivitiesGallery() {
  const [selected, setSelected] = useState(sampleActivities[0]);

  return (
    <section id="activities" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Dokumentasi Kegiatan</h2>
            <p className="text-slate-600 mt-2">Rangkaian kegiatan akademik dan non-akademik di SMAN 1 Pangkep.</p>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="aspect-video overflow-hidden rounded-xl border border-slate-200">
              <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-slate-800">{selected.title}</h3>
              <p className="text-slate-500 text-sm">{selected.date}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {sampleActivities.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`text-left rounded-lg border hover:border-blue-300 transition-colors overflow-hidden group ${
                  selected.id === item.id ? 'border-blue-400 shadow' : 'border-slate-200'
                }`}
              >
                <div className="aspect-video overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
                </div>
                <div className="p-3">
                  <p className="font-medium text-slate-800">{item.title}</p>
                  <p className="text-slate-500 text-sm">{item.date}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
