import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: { username: string } | null;
  setUser: (user: { username: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
