import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import ReactQuillEditor from "@/common/ReactQuillEditor";


// Dynamic import for Quill editor (SSR safe)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

function AddInstute({ formData, handleChange, setinstitutes, institutes, handleQuillChange }) {
    const addOnline = () => {
        setinstitutes([...institutes, { title: "", content: "", }]);
    };

    const handleOnlineChange = (index, field, value) => {
        const updated = [...institutes];
        updated[index][field] = value;
        setinstitutes(updated);
    };

    const deleteOnline = (index) => {
        setinstitutes(institutes.filter((_, i) => i !== index));
    };

    // Quill modules & formats
  const quillModules = {
    toolbar: [
      [{ font: [] }],
      [{ size: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header", "font", "size", "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent", "align", "color", "background", "link", "image", "video"
  ];
    return (
        <>

            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Name{" "}
                </label>
                <input
                    type="text"
                    name="instututitle"
                    value={formData.instututitle}
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
                desc={formData.instutudesc}
                handleBioChange={(val) => handleQuillChange("instutudesc", val)}
            />

            <>
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl font-semibold text-[#CC2828]">
                       Institutes Section
                    </h2>
                </div>
                {institutes && institutes?.map((faq, index) => (
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

                               <ReactQuill
                value={faq.content}
                onChange={(value) => handleOnlineChange(index, "content", value)}
                modules={quillModules}
                formats={quillFormats}
                theme="snow"
                className="editor-wrapper"
              />
                        </div>
                    </div>
                ))}
                <div className="flex justify-end items-center mb-5">


                    <button

                        type="button"
                        onClick={addOnline}

                        className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                    >
                        + Add More Online
                    </button>
                </div>
            </>
        </>
    );
}

export default AddInstute;