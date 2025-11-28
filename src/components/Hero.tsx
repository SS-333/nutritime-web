import React from 'react';
import { ClockIcon, DumbbellIcon, GlobeIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-coral-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-mint-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-lime-200 bg-lime-50 text-lime-700 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-lime-500 mr-2"></span>
              Nuevo: Planificación Inteligente de Comidas
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Controla tu Salud. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-coral-500">
                Libera tu Tiempo.
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Nutri Time combina un seguimiento avanzado con entrega de
              comestibles premium. Deja que nuestra IA maneje la logística
              mientras tú te enfocas en vivir tu mejor vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#ai-assistant"
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl"
              >
                Prueba Gratis
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-all"
              >
                Ver Características
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {/* Tablet Mockup */}
            <div className="relative z-10 bg-white rounded-[2rem] shadow-2xl border-8 border-slate-900 p-2 transform rotate-y-12 rotate-z-2 transition-transform duration-700 hover:scale-[1.02]">
              <div className="rounded-[1.5rem] overflow-hidden bg-slate-50 h-[400px] w-full relative">
                {/* Mock App Header */}
                <div className="bg-white p-4 flex justify-between items-center shadow-sm">
                  <div className="font-bold text-lg text-slate-800">
                    Nutri Time
                  </div>
                  <div className="h-8 w-8 bg-coral-100 rounded-full"></div>
                </div>
                {/* Mock App Content */}
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-slate-500">
                      <span>Meta Diaria</span>
                      <span>1,840 / 2,200 kcal</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[75%] bg-gradient-to-r from-lime-400 to-lime-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <div className="text-sm text-slate-500 mb-1">
                        Proteína
                      </div>
                      <div className="text-xl font-bold text-slate-800">
                        124g
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <div className="text-sm text-slate-500 mb-1">Carbos</div>
                      <div className="text-xl font-bold text-slate-800">
                        180g
                      </div>
                    </div>
                  </div>

                  <div className="bg-mint-100 p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-mint-900">
                        Próxima Comida
                      </div>
                      <div className="text-sm text-mint-700">
                        Salmón & Quinoa
                      </div>
                    </div>
                    <button className="bg-white px-3 py-1 rounded-lg text-sm font-semibold text-mint-600 shadow-sm">
                      Preparar
                    </button>
                  </div>
                </div>

                {/* Floating Action Button Mock */}
                <div className="absolute bottom-6 right-6 h-12 w-12 bg-slate-900 rounded-full shadow-lg flex items-center justify-center text-white">
                  +
                </div>
              </div>
            </div>

            {/* Floating 3D Elements */}
            <div className="absolute -top-12 -right-12 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
              <ClockIcon className="w-8 h-8 text-coral-500" />
            </div>
            <div className="absolute top-1/2 -left-16 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[4000ms]">
              <DumbbellIcon className="w-8 h-8 text-lime-600" />
            </div>
            <div className="absolute -bottom-8 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[5000ms]">
              <GlobeIcon className="w-8 h-8 text-slate-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
