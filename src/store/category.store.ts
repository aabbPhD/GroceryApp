import { create } from "zustand";

type CategoryState = {
    categoryOn: boolean,
    toggleCategory: () => void,
    chosenCategory: number,
    setChosenCategory: (id: number) => void,
    resetChosenCategory: () => void,
}

const useCategoryStore = create<CategoryState>((set) => ({
    categoryOn: false,
    toggleCategory: () => set(state => ({ categoryOn: !state.categoryOn })),
    chosenCategory: -1,
    setChosenCategory: (id) => set({ chosenCategory: id }),
    resetChosenCategory: () => set({ categoryOn: false, chosenCategory: -1 }),
}))

export default useCategoryStore;