import { create } from "zustand";
interface FilterStore {
  isSortByNewer: boolean;
  isSortByOlder: boolean;
  searchValue: string;
  setSearchValue: (value: string) => void;
  setSortByNewer: (value: boolean) => void;
  setSortByOlder: (value: boolean) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  isSortByNewer: false,
  isSortByOlder: false,
  searchValue: "",
  setSearchValue: (value: string) => set(() => ({ searchValue: value })),
  setSortByNewer: (value: boolean) =>
    set((state) => ({
      isSortByNewer: value,
      isSortByOlder: value && state.isSortByOlder && false,
    })),
  setSortByOlder: (value: boolean) =>
    set((state) => ({
      isSortByOlder: value,
      isSortByNewer: value && state.isSortByNewer && false,
    })),
}));
