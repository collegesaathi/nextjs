import ImagePreview from "@/common/ImagePreview";

function AddInternationalcapmus({ setCampusInterList, campusInterList, }) {

       const handleinterCampusChange = (index, field, value) => {
        const list = [...campusInterList];
        list[index][field] = value;
        setCampusInterList(list);
    };

    const addinterCampus = () => {
        setCampusInterList([...campusInterList, { name: "", image: "", campus_images_alt: "" }]);
    };

    const deleteinterCampus = (index) => {
        const list = [...campusInterList];
        list.splice(index, 1);
        setCampusInterList(list);
    };

    return (<>
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-[#CC2828]">
                Campus International  Section
            </h2>
        </div>
        {/* MULTIPLE CAMPUS BLOCKS */}
        {campusInterList?.map((campus, index) => (
            <div key={index} className="border px-2  rounded-xl bg-gray-100 mb-2 ">
                {/* Name */}
                <label className="flex  justify-between  items-center block text-[#CC2828] font-medium mb-2">
                    Campus Name
                    <button
                        type="button"
                        onClick={() => deleteinterCampus(index)}
                        className="mt-3 bg-red-500 text-white px-4 py-1 rounded-[10px]"
                    >
                        Delete
                    </button>
                </label>
                <input
                    type="text"
                    value={campus.name}
                    onChange={(e) =>
                        handleinterCampusChange(index, "name", e.target.value)
                    }
                    placeholder="Enter Campus Name"
                    className="w-full bg-white text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none mb-4"
                />

                {/* Image */}
                <label className="block text-[#CC2828] font-medium mb-2">
                    Campus Image
                </label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleinterCampusChange(index, "image", e.target.files[0])}
                    className="w-full bg-white text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none mb-3 "
                />
                {campus.image && (
                    <div className="mt-2">
                        <ImagePreview image={typeof campus.image === "string" ? campus.image : URL.createObjectURL(campus.image)} />
                    </div>
                )}



                {/* Delete Button */}
                <input
                    type="text"
                    value={campus.campus_images_alt}
                    onChange={(e) =>
                        handleinterCampusChange(index, "campus_images_alt", e.target.value)
                    }
                    placeholder="Enter Campus Alt Images"
                    className="w-full bg-white text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none mb-4"
                />
            </div>
        ))}

        <button
            type="button"
            onClick={addinterCampus}
            className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
        >
            + Add More Campus
        </button>
    </>);
}

export default AddInternationalcapmus;