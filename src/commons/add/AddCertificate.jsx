import ImagePreview from "@/common/ImagePreview";
import ReactQuillEditor from "@/common/ReactQuillEditor";

function AddCertificate({ formData, handleChange, handleImageChange, preview, handleQuillChange }) {
    return (
        <>
            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Name{" "}
                </label>
                <input
                    type="text"
                    name="certificatename"
                    value={formData.certificatename}
                    onChange={(e) => {
                        handleChange(e);
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

                {formData?.certificatemage && (
                    <div className="mt-3">
                        <img
                            src={
                                typeof formData.certificatemage === "string"
                                    ? formData.certificatemage // saved image URL
                                    : URL.createObjectURL(formData.certificatemage) // uploaded image file
                            }
                            alt="Preview"
                            className="w-48 h-48 object-cover rounded border"
                        />
                    </div>
                )}

                {/* <ImagePreview image={ typeof formData.certificatemage === "string"
                                    ? formData.certificatemage // saved image URL
                                    : URL.createObjectURL(formData.certificatemage)}   /> */}
            </div>

            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Certificate Image Alt {" "}
                    <span className="text-sm text-gray-500">
                        ({formData.image_alt?.length}/50)
                    </span>
                </label>
                <input
                    type="text"
                    name="image_alt"
                    value={formData.image_alt}
                    onChange={(e) => {
                   handleChange(e);
                    }}
                    placeholder="Enter Alt Images Name"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
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

export default AddCertificate;