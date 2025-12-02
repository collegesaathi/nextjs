import ReactQuillEditor from "@/common/ReactQuillEditor";

function Certificate({formData ,  handleChange ,handleImageChange ,preview  ,handleQuillChange}) {
    return (

        <>

            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Name{" "}
                    <span className="text-sm text-gray-500">
                        ({formData.certificatename?.length}/50)
                    </span>
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.certificatename}
                    onChange={(e) => {
                        if (e.target.value.length <= 50) handleChange(e);
                    }}
                    placeholder="Enter name"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>


            <div>
                <label className="block text-[#FF1B1B] font-medium mb-1">
                    Upload Certificate Image
                </label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, "certificatemage")}
                    className="w-full p-2 bg-gray-100 rounded-md cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                />

                {preview && (
                    <div className="mt-3">
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-48 object-cover rounded-md border"
                        />
                    </div>
                )}
            </div>
            <div className="mt-5 mb-5">
                <ReactQuillEditor
                    label="Description"
                    desc={formData.certificatedescription}
                    handleBioChange={(val) => handleQuillChange("certificatedescription", val)}
                />

            </div>

        </>
    );
}

export default Certificate;