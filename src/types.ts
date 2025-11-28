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

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface NavItem {
  label: string;
  href: string;
}
