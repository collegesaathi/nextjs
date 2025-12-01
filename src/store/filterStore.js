import { create } from "zustand";

export const useFilterStore = create((set) => ({
    // GENERAL FILTERS
    activeFilter: "",
    activeSubFilter: "",
    selectedBudget: "",
    selectedApproval: "",
    searchQuery: "",
    cardsToShow: 9,

    // COURSE FILTERS
    activeCourseFilter: "",
    activeCourseSubFilter: "",
    activeSpecialization: "",
    courseSearchQuery: "",
    expandedCourse: "",
    selectedCourseParent: "",
    selectedCourseItem: "",
    currentCourseView: "main",
    isOpen: false,

    // COLLAPSIBLES
    budgetOpenIndex: new Set(),
    approvalOpenIndex: new Set(),

    // SETTERS
    setActiveFilter: (v) => set({ activeFilter: v }),
    setActiveSubFilter: (v) => set({ activeSubFilter: v }),
    setSelectedBudget: (v) => set({ selectedBudget: v }),
    setSelectedApproval: (v) => set({ selectedApproval: v }),
    setSearchQuery: (v) => set({ searchQuery: v }),
    setCardsToShow: (v) => set({ cardsToShow: v }),

    // COURSE SETTERS
    setCourseFilter: (v) => set({ activeCourseFilter: v }),
    setCourseSubFilter: (v) => set({ activeCourseSubFilter: v }),
    setSpecialization: (v) => set({ activeSpecialization: v }),
    setCourseSearchQuery: (v) => set({ courseSearchQuery: v }),
    setExpandedCourse: (v) => set({ expandedCourse: v }),
    setSelectedCourseParent: (v) => set({ selectedCourseParent: v }),
    setSelectedCourseItem: (v) => set({ selectedCourseItem: v }),
    setCurrentCourseView: (v) => set({ currentCourseView: v }),
    setIsOpen: (v) => set({ isOpen: v }),
toggleIsOpen: () => set((s) => ({ isOpen: !s.isOpen })),

    // COLLAPSIBLE TOGGLES
    toggleBudgetCard: (index) =>
        set((state) => {
            const newSet = new Set(state.budgetOpenIndex);
            newSet.has(index) ? newSet.delete(index) : newSet.add(index);
            return { budgetOpenIndex: newSet };
        }),

    toggleApprovalCard: (index) =>
        set((state) => {
            const newSet = new Set(state.approvalOpenIndex);
            newSet.has(index) ? newSet.delete(index) : newSet.add(index);
            return { approvalOpenIndex: newSet };
        }),

    // CLEAR ALL
    // CLEAR ALL
    handleClearAll: () => set({
        activeFilter: "",
        activeSubFilter: "",
        selectedBudget: "",
        selectedApproval: "",
        searchQuery: "",
        cardsToShow: 9,

        activeCourseFilter: "",
        activeCourseSubFilter: "",
        activeSpecialization: "",
        courseSearchQuery: "",
        expandedCourse: "",
        selectedCourseParent: "",
        selectedCourseItem: "",
        currentCourseView: "main",  // 🔥 reset here also

        budgetOpenIndex: new Set(),
        approvalOpenIndex: new Set(),
    }),

}));
