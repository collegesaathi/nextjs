'use client';

import CollapsibleCard from "./CollapsibleCard";
import { useFilterStore } from "@/store/filterStore";

export default function BudgetFilter() {
  const selectedBudget = useFilterStore((s) => s.selectedBudget);
  const setSelectedBudget = useFilterStore((s) => s.setSelectedBudget);

  const openIndex = useFilterStore((s) => s.budgetOpenIndex);
  const toggleBudgetCard = useFilterStore((s) => s.toggleBudgetCard);

  const budgets = [
    "Upto 1 Lakh",
    "1 Lakh - 2 Lakhs",
    "2 Lakhs - 3 Lakhs",
    "3 Lakhs+",
  ];

  return (
    <CollapsibleCard
      title="Budget"
      isOpen={openIndex.has(1)}
      onToggle={() => toggleBudgetCard(1)}
    >
      {budgets.map((budget) => (
        <div
          key={budget}
          className="flex items-center p-1 cursor-pointer hover:bg-neutral-100"
          onClick={() =>
            setSelectedBudget(selectedBudget === budget ? "" : budget)
          }
        >
          <span className="w-2.5 h-2.5 rounded-full mr-2 border border-[#EC1E24] flex items-center justify-center">
            {selectedBudget === budget && (
              <span className="w-1.5 h-1.5 bg-[#EC1E24] rounded-full"></span>
            )}
          </span>

          <span className="text-[#282529] text-[0.875rem]">{budget}</span>
        </div>
      ))}
    </CollapsibleCard>
  );
}
