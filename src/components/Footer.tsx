import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              {/* Updated to verified external link */}
              <img
                src="https://i.postimg.cc/pXfRmPjY/logo.png"
                alt="Nutri Time Logo"
                className="h-24 w-auto object-contain -ml-2"
              />
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Empoderando a profesionales ocupados para tomar el control de su
              salud a través de un seguimiento inteligente y orientación
              personalizada de IA.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-slate-400 hover:text-brand-teal transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Producto</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-brand-teal transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-teal transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-teal transition-colors">
                  Asistente IA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-teal transition-colors">
                  Casos de Éxito
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Compañía</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-brand-teal transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-teal transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-teal transition-colors">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-teal transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Nutri Time Inc. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-slate-600">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
