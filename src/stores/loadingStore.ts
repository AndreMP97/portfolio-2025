import { create } from "zustand";

type TLoadingStore = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useLoadingStore = create<TLoadingStore>((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
