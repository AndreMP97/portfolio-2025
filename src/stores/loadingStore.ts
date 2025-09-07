import { create } from "zustand";

type TLoadingStore = {
  canAnimate: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useLoadingStore = create<TLoadingStore>((set) => ({
  canAnimate: false,
  isLoading: true,
  setIsLoading: (isLoading) =>
    set(() => {
      if (!isLoading) {
        setTimeout(() => {
          set({ canAnimate: true });
        }, 600);

        return { isLoading: false };
      }

      return { canAnimate: false, isLoading: true };
    }),
}));
