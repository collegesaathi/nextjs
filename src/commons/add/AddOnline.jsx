import ReactQuillEditor from "@/common/ReactQuillEditor";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

function AddOnline({ formData, handleChange, onlines, setOnlines, handleQuillChange }) {
    const addOnline = () => {
        setOnlines([...onlines, { title: "", content: "", }]);
    };

    const handleOnlineChange = (index, field, value) => {
        const updated = [...onlines];
        updated[index][field] = value;
        setOnlines(updated);
    };

    const deleteOnline = (index) => {
        setOnlines(onlines.filter((_, i) => i !== index));
    };
    return (
        <>

            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Name{" "}
                </label>
                <input
                    type="text"
                    name="onlinetitle"
                    value={formData.onlinetitle}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Enter partners name"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>
            <ReactQuillEditor
                label="Description"
                desc={formData.onlinedesc}
                handleBioChange={(val) => handleQuillChange("onlinedesc", val)}
            />

            <>
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl font-semibold text-[#CC2828]">
                        Adminssion Process Section
                    </h2>

                    <button

                        type="button"
                        onClick={addOnline}

                        className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                    >
                        + Add More Online
                    </button>
                </div>
                {onlines && onlines?.map((faq, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4 items-center">
                        {/* QUESTION */}
                        <div>
                            <label className="block text-[#CC2828] font-medium mb-2">Title</label>
                            <input
                                type="text"
                                value={faq.title}
                                onChange={(e) => handleOnlineChange(index, 'title', e.target.value)}
                                placeholder="Enter title"
                                className="w-full bg-[#F4F6F8] text-[#727272] border border-[#F4F6F8] rounded-[10px] px-4 py-2 focus:outline-none"
                            />
                        </div>

                        {/* ANSWER */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-[#CC2828] font-medium">Content</label>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => deleteOnline(index)}
                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                        title="Delete FAQ"
                                    >
                                        <MdDelete />
                                    </button>
                                </div>
                            </div>

                            <textarea
                                rows={2}
                                type="text"
                                value={faq.content}
                                onChange={(e) => handleOnlineChange(index, 'content', e.target.value)}
                                placeholder="Enter content"
                                className="w-full bg-[#F4F6F8] text-[#727272] border border-[#F4F6F8] rounded-[10px] px-4 py-2 focus:outline-none"
                            />
                        </div>
                    </div>
                ))}

            </>
        </>
    );
}

export default AddOnline;