'use client';

import CollapsibleCard from "./CollapsibleCard";
import { useFilterStore } from "@/store/filterStore";

export default function ApprovalCard() {
  const selectedApproval = useFilterStore((s) => s.selectedApproval);
  const setSelectedApproval = useFilterStore((s) => s.setSelectedApproval);

  const openIndex = useFilterStore((s) => s.approvalOpenIndex);
  const toggleApprovalCard = useFilterStore((s) => s.toggleApprovalCard);

  const approvals = ["UGC", "NAAC", "AICTE", "NIRF", "WES", "DEB"];

  return (
    <CollapsibleCard
      title="Approvals"
      isOpen={openIndex.has(0)}
      onToggle={() => toggleApprovalCard(0)}
    >
      {approvals.map((approval) => (
        <div
          key={approval}
          className="flex items-center p-1 cursor-pointer hover:bg-neutral-100"
          onClick={() =>
            setSelectedApproval(
              selectedApproval === approval ? "" : approval
            )
          }
        >
          <span className="w-2.5 h-2.5 rounded-full mr-2 border border-[#EC1E24] flex items-center justify-center">
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
