import ImagePreview from "@/common/ImagePreview";
import ReactQuillEditor from "@/common/ReactQuillEditor";
import { MdDelete } from "react-icons/md";

function ServicesAdd({ formData, handleQuillChange, handleChange, setServices, services }) {


    const addService = () => {
        setServices([...services, { title: "", content: "", image: "", icon: "" }]);
    };

    const handleServiceChange = (index, field, value) => {
        const updated = [...services];
        updated[index][field] = value;
        setServices(updated);
    };

    const deleteService = (index) => {
        setServices(services.filter((_, i) => i !== index));
    };

    return (
        <>

            {/* MAIN NAME FIELD */}
            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Name{" "}
                </label>
                <input
                    type="text"
                    name="servicetitle"
                    value={formData.servicetitle}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Enter service name"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>
            {/* <ReactQuillEditor
                label="Description"
                desc={formData.servicedesc}
                handleBioChange={(val) => handleQuillChange("servicedesc", val)}
            /> */}

            {/* SERVICES REPEATING SECTION */}
            <>
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl font-semibold text-[#CC2828]">Services Section</h2>
                </div>

                {services?.map((service, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4 items-center border-b border-gray-200 pb-4 mb-4">

                        {/* Title */}
                        <div>
                            <div className="flex justify-between items-center gap-2">
                                <label className="block text-[#CC2828] font-medium mb-2">Title</label>

                                <button
                                    type="button"
                                    onClick={() => deleteService(index)}
                                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700 mb-2"
                                    title="Delete Service"
                                >
                                    <MdDelete />
                                </button>
                            </div>
                            <input
                                type="text"
                                value={service.title}
                                onChange={(e) => handleServiceChange(index, "title", e.target.value)}
                                placeholder="Enter service title"
                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                            />
                        </div>

                        
                        {/* Content */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-[#CC2828] font-medium">Content</label>

                            </div>

                            <textarea
                                rows={2}
                                type="text"
                                value={service.content}
                                onChange={(e) => handleServiceChange(index, "content", e.target.value)}
                                placeholder="Enter service content"
                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                            />
                        </div>

                        {/* Image */}
                        <div>
                            <label className="block text-[#CC2828] font-medium mb-2">Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleServiceChange(index, "image", e.target.files[0])}
                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                            />
                            {service.image && (
                                <div className="mt-2">
                                    <ImagePreview image={typeof service.image === "string" ? service.image : URL.createObjectURL(service.image)} />
                                </div>
                            )}

                        </div>

                        {/* Icon */}
                        <div>
                            <label className="block text-[#CC2828] font-medium mb-2">Icon</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleServiceChange(index, "icon", e.target.files[0])}
                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                            />
                            {service.icon && (
                                <div className="mt-2">
                                    <ImagePreview image={typeof service.icon === "string"
                                        ? service.icon
                                        : URL.createObjectURL(service.icon)} />
                                </div>
                            )}
                        </div>

                       


                         <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-[#CC2828] font-medium">Icons Alts </label>
                            </div>

                            <input
                                type="text"
                                value={service.icons_alt}
                                onChange={(e) => handleServiceChange(index, "icons_alt", e.target.value)}
                                placeholder="Enter service Icons alt"
                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                            />
                        </div>

                        
                        {/* Content */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-[#CC2828] font-medium">Images Alts </label>

                            </div>

                            <input
                                type="text"
                                value={service.images_alt}
                                onChange={(e) => handleServiceChange(index, "images_alt", e.target.value)}
                                placeholder="Enter service Images alt"
                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                            />
                        </div>
                    </div>
                ))}

                   <div className="flex justify-between items-center mb-5">
                    <button
                        type="button"
                        onClick={addService}
                        className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                    >
                        + Add More Service
                    </button>
                </div>
            </>

        </>

    );
}

export default ServicesAdd;