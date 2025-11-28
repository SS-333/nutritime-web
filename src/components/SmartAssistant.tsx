import React, { useState } from 'react';
// Importamos la función simulada que creamos
import { generateMealPlan } from '../services/gemini';
import type { MealPlanResponse } from '../types';

// Iconos internos para seguridad
const SparklesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);
const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export const SmartAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<MealPlanResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      // Llamamos a nuestra IA simulada
      const result = await generateMealPlan(input);
      setPlan(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <SparklesIcon />
            <span>Inteligencia Artificial Nutri Time</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tu Planificador Personal
          </h2>
          <p className="text-slate-600 text-lg">
            Cuéntanos tu objetivo (ej: "Quiero ganar músculo y soy vegano") y
            crearemos un plan para ti.
          </p>
        </div>

        {/* Input Area */}
        <div className="max-w-2xl mx-auto bg-white p-2 rounded-2xl shadow-lg border border-slate-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu objetivo aquí..."
            className="flex-1 px-6 py-4 bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-brand-dark text-white px-8 rounded-xl font-semibold hover:bg-brand-orange transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              'Pensando...'
            ) : (
              <>
                <span className="hidden sm:inline">Generar</span>
                <SendIcon />
              </>
            )}
          </button>
        </div>

        {/* Results Area */}
        {plan && (
          <div className="max-w-3xl mx-auto mt-12 animate-fade-in-up">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {plan.planTitle}
              </h3>
              <p className="text-slate-500 mb-8">{plan.summary}</p>

              <div className="space-y-4">
                {plan.meals.map((meal, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <div>
                      <h4 className="font-bold text-slate-800">{meal.name}</h4>
                      <div className="text-sm text-slate-500 mt-1 flex gap-3">
                        <span className="text-brand-orange font-medium">
                          {meal.calories}
                        </span>
                        <span>Prot: {meal.protein}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
