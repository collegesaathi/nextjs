import ReactQuillEditor from "@/common/ReactQuillEditor";

function AddFees({ formData, handleChange ,handleQuillChange }) {
    return (
        <>
            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Course Title:
                </label>
                <input
                    type="text"
                    name="fees_title"
                    value={formData.fees_title}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Enter fees title "
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>

              <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Course Desc.
                </label>
                <input
                    type="text"
                    name="fees_desc"
                    value={formData?.fees_desc}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Enter fees Desc "
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>

             <ReactQuillEditor
                                               label="Fees Notes"
                                               desc={formData.fees_notes}
                                               handleBioChange={(val) => handleQuillChange("fees_notes", val)}
                                           />
            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Total Tuition Fee:
                </label>
                <input
                    type="text"
                    name="tuition_fees"
                    value={formData.tuition_fees}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Enter tuition fees "
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>
            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Total Anuual Fee:

                </label>
                <input
                    type="text"
                    name="anuual_fees"
                    value={formData.anuual_fees}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Enter anuual fees"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>
            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Semester Fees

                </label>
                <input
                    type="text"
                    name="semester_fees"
                    value={formData.semester_fees}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Enter Semester Fees"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>


        </>
    );
}

export default AddFees;