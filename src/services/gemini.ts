import type { MealPlanResponse } from '../types';

// Esta función SIMULA ser la IA. Es perfecta para demos porque nunca falla.
export const generateMealPlan = async (
  userGoal: string
): Promise<MealPlanResponse> => {
  console.log('Generando plan para:', userGoal);

  // 1. Simulamos un tiempo de espera de 2 segundos (para que parezca que piensa)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // 2. Devolvemos un plan perfecto pre-diseñado
  return {
    planTitle: 'Plan Personalizado: ' + userGoal,
    summary:
      'Basado en tu objetivo, he diseñado un plan nutricional equilibrado que prioriza alimentos integrales y reducción de azúcares refinados, optimizando tu energía diaria.',
    meals: [
      {
        name: 'Desayuno Energético',
        calories: '450 kcal',
        protein: '25g',
        carbs: '50g',
        fat: '15g',
      },
      {
        name: 'Almuerzo: Pollo al Limón',
        calories: '600 kcal',
        protein: '45g',
        carbs: '40g',
        fat: '20g',
      },
      {
        name: 'Cena Ligera: Salmón',
        calories: '350 kcal',
        protein: '30g',
        carbs: '10g',
        fat: '18g',
      },
      {
        name: 'Snack: Yogur Griego',
        calories: '150 kcal',
        protein: '12g',
        carbs: '8g',
        fat: '5g',
      },
    ],
  };
};
