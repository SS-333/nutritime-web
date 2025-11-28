import React, { useState, useEffect } from 'react';

// --- 1. DEFINICIONES INTERNAS (Para evitar errores de import) ---
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Panel', href: '#dashboard' },
  { label: 'Planificador IA', href: '#ai-assistant' },
  { label: 'Características', href: '#features' },
  { label: 'Precios', href: '#pricing' },
];

// --- 2. ICONOS INTERNOS (Para que no fallen si falta Icons.tsx) ---
const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);
const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// --- 3. COMPONENTE PRINCIPAL ---
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO CON TU ENLACE QUE FUNCIONA */}
        <a
          href="#"
          className="block w-48 min-w-[150px] overflow-visible shrink-0 group"
        >
          <img
            src="https://i.postimg.cc/pXfRmPjY/logo.png"
            alt="Nutri Time Logo"
            className="w-full h-auto max-h-20 object-contain object-left block transition-transform group-hover:scale-105"
          />
        </a>

        {/* MENÚ ESCRITORIO */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-teal transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="bg-brand-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-orange hover:text-white transition-all shadow-md">
            Obtener App
          </button>
        </nav>

        {/* BOTÓN MÓVIL */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-6 lg:hidden flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-medium text-slate-600 py-2 border-b border-slate-50 hover:text-brand-teal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="bg-brand-dark text-white w-full py-3 rounded-xl text-sm font-semibold mt-2 hover:bg-brand-orange transition-colors">
            Obtener App
          </button>
        </div>
      )}
    </header>
  );
};
