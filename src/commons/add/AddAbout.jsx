import ReactQuillEditor from "@/common/ReactQuillEditor";
function AddAbout({formData , handleChange , handleQuillChange}) {
    return ( <>
        <>
                                <div>
                                    <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                        About Title {" "}
                                        <span className="text-sm text-gray-500">
                                            ({formData.about_title?.length}/50)
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="about_title"
                                        value={formData.about_title}
                                        onChange={(e) => {
                                            if (e.target.value.length <= 50) handleChange(e);
                                        }}
                                        placeholder="Enter about title"
                                        className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                        required
                                    />
                                </div>

                                <ReactQuillEditor
                                    label="Description"
                                    desc={formData.about_desc}
                                    handleBioChange={(val) => handleQuillChange("about_desc", val)}
                                />

                            </>
    </> );
}

export default AddAbout;