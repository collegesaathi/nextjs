import ReactQuillEditor from "@/common/ReactQuillEditor";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

function OnlineSection({ formData, handleChange, onlines, setOnlines, handleQuillChange }) {

    const addOnline = () => {
        // Only add if no empty one exists
        const hasEmpty = onlines.some(f => !f.title && !f.content);
        if (!hasEmpty) {
            setOnlines([...onlines, { title: "", contet: "" }]);
        } else {
            toast.error("Please fill in the existing empty oNLINE before adding another.");
        }
    };

    const handleOnlineChange = (index, field, value) => {
        const updateonline = [...onlines];
        updateonline[index][field] = value;
        setOnlines(updateonline);
    };

    const deleteOnline = (index) => {
        const updateonline = [...onlines];
        updateonline.splice(index, 1);
        setOnlines(updateonline);
    };

    return (
        <>

            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Name{" "}
                    <span className="text-sm text-gray-500">
                        ({formData.onlinetitle?.length}/50)
                    </span>
                </label>
                <input
                    type="text"
                    name="onlinetitle"
                    value={formData.title}
                    onChange={(e) => {
                        if (e.target.value.length <= 50) handleChange(e);
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
                        onClick={addOnline}

                        className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                    >
                        + Add More Online
                    </button>
                </div>
                {onlines.map((faq, index) => (
                    <div key={index} className="grid grid-cols-1 gap-4 items-center">
                        {/* QUESTION */}
                        <div>
                            <label className="block text-[#CC2828] font-medium mb-2">Title</label>
                            <input
                                type="text"
                                disabled={onlines?._id}
                                value={onlines.title}
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
                                        onClick={() => deleteOnline(index)}
                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                        title="Delete FAQ"
                                    >
                                        <MdDelete />
                                    </button>
                                </div>
                            </div>

                            <input
                                rows={5}
                                type="text"
                                value={onlines.content}
                                disabled={onlines?._id}
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

export default OnlineSection;