import { useState } from 'react';
import { Send } from 'lucide-react';

export default function SuggestionForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // For now, simulate submission. Backend can be connected later.
      await new Promise((res) => setTimeout(res, 800));
      setStatus('success');
      setName('');
      setContact('');
      setMessage('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="suggestions" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-800">Saran & Masukan</h2>
          <p className="text-slate-600 mt-2">Suara Anda penting bagi kami. Silakan tinggalkan saran untuk meningkatkan kualitas layanan pendidikan di SMAN 1 Pangkep.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 max-w-2xl bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Nama Anda"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Kontak (Email/WA)</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="contoh: 0812xxxx / email"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700">Pesan</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Tulis saran, masukan, atau pertanyaan Anda di sini..."
              required
            />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === 'loading' ? 'Mengirim...' : 'Kirim Saran'}
            </button>
            {status === 'success' && (
              <span className="text-green-600 text-sm">Terima kasih! Saran Anda telah diterima.</span>
            )}
            {status === 'error' && (
              <span className="text-red-600 text-sm">Terjadi kesalahan. Coba lagi.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
