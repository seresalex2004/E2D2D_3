export interface Cake {
  id: number;
  nev: string;
  kaloria: number;
  ar: number;
}

export interface ApiResponse {
  success: boolean;
  data?: Cake[];
  error?: string;
}