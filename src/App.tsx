// 1. IMPORTAMOS LOS COMPONENTES
// Usamos llaves { } porque los definimos como "export const" en cada archivo
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Dashboard } from './components/Dashboard';
import { SmartAssistant } from './components/SmartAssistant';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative w-full max-w-[100vw] overflow-x-hidden min-h-screen bg-slate-50 selection:bg-brand-teal selection:text-white font-sans">
      {/* 2. ENCABEZADO (Navegación) */}
      <Header />

      <main>
        {/* 3. HERO (Portada Principal) */}
        <Hero />

        {/* 4. DASHBOARD (Gráficos y Métricas) */}
        {/* Agregamos el ID para que el enlace "Panel" del menú baje hasta aquí */}
        <section id="dashboard" className="scroll-mt-24">
          <Dashboard />
        </section>

        {/* 5. ASISTENTE IA (Planificador) */}
        {/* Agregamos el ID para que el enlace "Planificador IA" funcione */}
        <section id="ai-assistant" className="scroll-mt-24">
          <SmartAssistant />
        </section>

        {/* 6. SECCIÓN DE CARACTERÍSTICAS (Estática) */}
        <section id="features" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                ¿Por qué Nutri Time?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Combinamos tecnología avanzada con nutrición experta para
                simplificar tu vida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {/* Feature 1 */}
              <div className="space-y-4 px-4 p-6 hover:bg-slate-50 rounded-2xl transition-colors">
                <div className="w-16 h-16 bg-brand-green/20 rounded-2xl mx-auto flex items-center justify-center text-3xl shadow-sm">
                  🥦
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Ingredientes Frescos
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Nos asociamos con granjas locales premium para asegurar que
                  cada ingrediente en tu plan sea fresco, orgánico y de
                  temporada.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-4 px-4 p-6 hover:bg-slate-50 rounded-2xl transition-colors">
                <div className="w-16 h-16 bg-brand-orange/20 rounded-2xl mx-auto flex items-center justify-center text-3xl shadow-sm">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Tiempo Optimizado
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Recetas diseñadas para prepararse en 20 minutos o menos.
                  Porque tu tiempo es tu activo más valioso.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-4 px-4 p-6 hover:bg-slate-50 rounded-2xl transition-colors">
                <div className="w-16 h-16 bg-brand-teal/20 rounded-2xl mx-auto flex items-center justify-center text-3xl shadow-sm">
                  📱
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Sincronización Total
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Se conecta con Apple Health y Google Fit automáticamente. Tus
                  datos de salud, dondequiera que vayas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. PIE DE PÁGINA */}
      <Footer />
    </div>
  );
}

export default App;
