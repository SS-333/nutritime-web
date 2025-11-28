import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// --- DATOS DE EJEMPLO PARA LA GRÁFICA ---
const data = [
  { name: 'Lun', calorias: 2100, pasos: 8000 },
  { name: 'Mar', calorias: 1950, pasos: 10200 },
  { name: 'Mié', calorias: 2200, pasos: 7500 },
  { name: 'Jue', calorias: 2000, pasos: 9100 },
  { name: 'Vie', calorias: 1800, pasos: 11000 },
  { name: 'Sáb', calorias: 2400, pasos: 6000 },
  { name: 'Dom', calorias: 2100, pasos: 8500 },
];

// --- ICONOS INTERNOS (Para que no falle nunca) ---
const FireIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#eb8a65"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);
const ActivityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#7bc9c6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

export const Dashboard: React.FC = () => {
  return (
    <div className="bg-white py-12 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Tu Progreso Semanal
          </h2>
          <p className="text-slate-500">
            Un vistazo rápido a tus métricas de salud.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tarjetas de Métricas */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <FireIcon />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Calorías Promedio
                </p>
                <p className="text-2xl font-bold text-slate-800">
                  2,078{' '}
                  <span className="text-xs text-slate-400 font-normal">
                    kcal
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <ActivityIcon />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Actividad Diaria
                </p>
                <p className="text-2xl font-bold text-slate-800">
                  45{' '}
                  <span className="text-xs text-slate-400 font-normal">
                    mins
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Gráfico */}
          <div className="lg:col-span-2 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Balance Energético
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient
                      id="colorCalorias"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#eb8a65" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#eb8a65" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e2e8f0"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b' }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b' }}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '12px',
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="calorias"
                    stroke="#eb8a65"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorCalorias)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
