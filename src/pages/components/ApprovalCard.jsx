'use client';

// import { useFilterStore } from "@/store/filterStore";
import CollapsibleCard from "./CollapsibleCard";

export default function ApprovalCard() {
//   const filterStore = useFilterStore();
  const filterStore = "";

  const { selectedApproval, openIndex } = filterStore;
  const { setSelectedApproval, toggleCard } = filterStore;

  const approvals = ["UGC", "NAAC", "AICTE", "NIRF", "WES", "DEB"];

  return (
    <CollapsibleCard
      title="Approvals"
      isOpen={openIndex?.has(0)}
      onToggle={() => toggleCard(0)}
    >
      {approvals.map((approval) => (
        <div
          key={approval}
          className="flex items-center p-1 cursor-pointer hover:bg-neutral-100"
          onClick={() =>
            setSelectedApproval(selectedApproval === approval ? null : approval)
          }
        >
          <span
            className={`
              w-2.5 h-2.5 rounded-full mr-2 border border-[#EC1E24] flex items-center justify-center
              ${selectedApproval === approval ? 'bg-white' : ''}
            `}
          >
            {selectedApproval === approval && (
              <span className="w-1.5 h-1.5 bg-[#EC1E24] rounded-full" />
            )}
          </span>
          <span className="text-[#282529] text-[0.875rem]">{approval}</span>
        </div>
      ))}
    </CollapsibleCard>
  );
}