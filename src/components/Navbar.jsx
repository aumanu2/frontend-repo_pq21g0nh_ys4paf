import { Home, BookOpen, Users, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { label: 'Beranda', href: '#home', icon: Home },
    { label: 'Profil', href: '#about', icon: Users },
    { label: 'Kegiatan', href: '#activities', icon: BookOpen },
    { label: 'Saran', href: '#suggestions', icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-800 text-lg">
          <span className="text-blue-600">SMAN 1</span> PANGKEP
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map(({ label, href, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-700 transition-colors"
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#suggestions"
          className="md:inline-flex hidden px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 shadow-sm"
        >
          Kirim Saran
        </a>
      </nav>
    </header>
  );
}
