export interface Meal {
  name: string;
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
}

export interface MealPlanResponse {
  planTitle: string;
  summary: string;
  meals: Meal[];
}

export type LoadingState = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';

export interface NavItem {
  label: string;
  href: string;
}
