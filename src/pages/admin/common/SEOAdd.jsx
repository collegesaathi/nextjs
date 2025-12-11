import ReactQuillEditor from "@/common/ReactQuillEditor";
import { MdDelete } from "react-icons/md";

function SEOAdd({ formData, handleChange, }) {

    return (
        <>

            {/* MAIN NAME FIELD */}
            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    META TITLE {" "}
                </label>
                <input
                    type="text"
                    name="meta_title"
                    value={formData.meta_title}
                    onChange={(e) => {
                        if (e.target.value.length <= 50) handleChange(e);
                    }}
                    placeholder="Enter meta Title"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>


            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    META Descritpion {" "}
                </label>
                <textarea
                    type="text"
                    name="meta_description"
                    value={formData.meta_description}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Enter meta Title"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>


            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    META Keywords {" "}

                </label>
                <textarea
                    type="text"
                    name="meta_keywords"
                    value={formData.meta_keywords}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Enter meta keywords"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>

            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1 uppercase">
                    META canonical url {" "}

                </label>
                <textarea
                    type="text"
                    name="canonical_url"
                    value={formData.canonical_url}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Enter meta keywords"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>
        </>

    );
}

export default SEOAdd;