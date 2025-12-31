
import ImagePreview from "@/common/ImagePreview";
import ReactQuillEditor from "@/common/ReactQuillEditor";

function ProgramFincalceAdd({ setfincalceAdd, fincalceAdd, handleQuillChange ,formData ,handleChange }) {
    const handleCampusChange = (index, field, value) => {
        const list = [...fincalceAdd];
        list[index][field] = value;
        setfincalceAdd(list);
    };

    const addCampus = () => {
        setfincalceAdd([...fincalceAdd, { name: "", image: "", desc: "" }]);
    };

    const deleteCampus = (index) => {
        const list = [...fincalceAdd];
        list.splice(index, 1);
        setfincalceAdd(list);
    };

    return (<>


       <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Name{" "}
                </label>
                <input
                    type="text"
                    name="financialname"
                    value={formData?.financialname}
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
                desc={formData?.financialdescription}
                handleBioChange={(val) => handleQuillChange("financialdescription", val)}
            />
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-[#CC2828]">
                Add financial  Section
            </h2>
        </div>

        
        {/* MULTIPLE CAMPUS BLOCKS */}
        {fincalceAdd?.map((campus, index) => (
            <div
                key={index}
                className="border px-4 py-3 rounded-xl bg-gray-100 mb-4 grid grid-cols-3 gap-4"
            >
                {/* Name */}
                <div className="col-span-3">
                    <label className="flex justify-between items-center text-[#CC2828] font-medium mb-2">
                        Name
                        <button
                            type="button"
                            onClick={() => deleteCampus(index)}
                            className="bg-red-500 text-white px-4 py-1 rounded-[10px]"
                        >
                            Delete
                        </button>
                    </label>
                    <input
                        type="text"
                        value={campus.name}
                        onChange={(e) =>
                            handleCampusChange(index, "name", e.target.value)
                        }
                        placeholder="Enter Name"
                        className="w-full bg-white text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                    />
                </div>

                {/* Image */}
                <div>
                    <label className="block text-[#CC2828] font-medium mb-2">
                        Image
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                            handleCampusChange(index, "image", e.target.files[0])
                        }
                        className="w-full bg-white text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                    />
                    {campus.image && (
                        <div className="mt-2">
                            <ImagePreview
                                image={
                                    typeof campus.image === "string"
                                        ? campus.image
                                        : URL.createObjectURL(campus.image)
                                }
                            />
                        </div>
                    )}
                </div>

                {/* Description */}
                <div className="col-span-2">
                    <label className="block text-[#CC2828] font-medium mb-2">
                        Desc.
                    </label>
                    <textarea
                        rows={5}
                        value={campus.desc}
                        onChange={(e) =>
                            handleCampusChange(index, "desc", e.target.value)
                        }
                        placeholder="Enter Desc"
                        className="w-full bg-white text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                    />
                </div>
            </div>
        ))}


        <button
            type="button"
            onClick={addCampus}
            className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
        >
            + Add More financial 
        </button>
    </>);
}

export default ProgramFincalceAdd;