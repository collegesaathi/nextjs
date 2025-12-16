import ReactQuillEditor from "@/common/ReactQuillEditor";

function RankingAdd({ formData, handleChange, handleQuillChange }) {
    return (
        <>

            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Name{" "}
                    <span className="text-sm text-gray-500">
                        ({formData.rankings_name?.length}/50)
                    </span>
                </label>
                <input
                    type="text"
                    name="rankings_name"
                    value={formData.rankings_name}
                    onChange={(e) => {
                        if (e.target.value.length <= 50) handleChange(e);
                    }}
                    placeholder="Enter name"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>

            {/* Description Field changed to textarea with 300 character limit */}
            <ReactQuillEditor
                label="Description"
                desc={formData.rankings_description}
                handleBioChange={(val) => handleQuillChange("rankings_description", val)}
            />




        </>

    );
}

export default RankingAdd;