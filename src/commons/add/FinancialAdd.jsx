import ReactQuillEditor from "@/common/ReactQuillEditor";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";

function FinancialAdd({ formData, fees, handleChange, handleQuillChange,setFees }) {

    const handleFeesChange = (index, field, value) => {
        const updatedFees = [...fees];
        updatedFees[index][field] = value;
        setFees(updatedFees);
    };


    const handleFeesSubmit = (index) => {
        const fee = fees[index];

        const description =
            `Total Fees: ${fee.totalFees} | ` +
            `Loan Amount: ${fee.loanAmount} | ` +
            `Tenure: ${fee.tenure} | ` +
            `Interest: ${fee.interest}% | ` +
            `Monthly EMI: ${fee.emi}`;

        const updated = [...fees];
        updated[index].description = description;

        setFees(updated);
    };
    const addFees = () => {
        setFees([
            ...fees,
            {
                courseName: "",
                totalFees: "",
                loanAmount: "",
                tenure: "",
                interest: "",
                emi: "",
                description: "",
            }
        ]);
    };

    const deleteFees = (index) => {
        const updated = [...fees];
        updated.splice(index, 1);
        setFees(updated);
    };

    return (

        <>
            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Financial  Name{" "}
                </label>
                <input
                    type="text"
                    name="financialname"
                    value={formData.financialname}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Enter name"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>
            <ReactQuillEditor
                label="Description"
                desc={formData.financialdescription}
                handleBioChange={(val) => handleQuillChange("financialdescription", val)}
            />
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-[#CC2828]">
                    Multiple Financial
                </h2>

                <button
                    type="button"
                    onClick={addFees}
                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                >
                    + Multiple Financial More
                </button>
            </div>
            {fees?.map((fee, index) => (
                <div key={index} className="grid grid-cols-1 gap-4 items-center">

                    {/* Course Name */}
                    <div>
                        <label className="block text-[#CC2828] font-medium mb-2">Course Name</label>
                        <input
                            type="text"
                            disabled={fee?._id}
                            value={fee.courseName}
                            onChange={(e) => handleFeesChange(index, "courseName", e.target.value)}
                            placeholder="Enter Course Name"
                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                        />
                    </div>

                    {/* 5 Fees Fields */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-[#CC2828] font-medium">Fees Details</label>

                            <div className="flex items-center gap-2">
                                {fee._id ? (
                                    <button
                                        type="button"
                                        onClick={() => openEditModal(fee)}
                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                        title="Edit Fees"
                                    >
                                        <MdEdit />
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => handleFeesSubmit(index)}
                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                        title="Save Fees"
                                    >
                                        <MdAdd />
                                    </button>
                                )}
                                <span className="text-[#b1a9a9]">|</span>
                                <button
                                    type="button"
                                    onClick={() => deleteFees(index)}
                                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                    title="Delete Fees"
                                >
                                    <MdDelete />
                                </button>
                            </div>
                        </div>

                        {/* 5 Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Total Fees"
                                value={fee.totalFees}
                                disabled={fee?._id}
                                onChange={(e) => handleFeesChange(index, "totalFees", e.target.value)}
                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                            />

                            <input
                                type="text"
                                placeholder="Loan Amount"
                                value={fee.loanAmount}
                                disabled={fee?._id}
                                onChange={(e) => handleFeesChange(index, "loanAmount", e.target.value)}
                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                            />

                            <input
                                type="text"
                                placeholder="Tenure"
                                value={fee.tenure}
                                disabled={fee?._id}
                                onChange={(e) => handleFeesChange(index, "tenure", e.target.value)}
                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                            />

                            <input
                                type="text"
                                placeholder="Interest (%)"
                                value={fee.interest}
                                disabled={fee?._id}
                                onChange={(e) => handleFeesChange(index, "interest", e.target.value)}
                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                            />

                            <input
                                type="text"
                                placeholder="Monthly EMI"
                                value={fee.emi}
                                disabled={fee?._id}
                                onChange={(e) => handleFeesChange(index, "emi", e.target.value)}
                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default FinancialAdd;