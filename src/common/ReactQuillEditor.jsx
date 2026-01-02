import dynamic from "next/dynamic";
import React from "react";
import 'react-quill-new/dist/quill.snow.css';
// Dynamically import with SSR disabled
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });


const ReactQuillEditor = ({ label, desc, handleBioChange }) => {
    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ size: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            // ⭐ EXTRA TEXT OPTIONS
            ["bold", "italic", "underline", "strike"],
            [{ script: "sub" }, { script: "super" }],
            ["blockquote", "code-block"],

            [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],

            [{ indent: "-1" }, { indent: "+1" }],
            [{ align: [] }],
            [{ color: [] }, { background: [] }],
            ["link", "image", "video"],
            ["clean"],

        ],
    };

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "align",
        "color",
        "background",
        "link",
        "image",
        "video",
    ];

    return (
        <div className="mb-3  mt-3">
            <label className="block text-[#FF1B1B] font-semibold mb-2">{label}</label>

            <div className="border border-gray-300 bg-white rounded-md">
                <ReactQuill
                    value={desc}
                    onChange={handleBioChange}
                    modules={modules}
                    formats={formats}
                    theme="snow"
                    className="editor-wrapper"
                />
            </div>
        </div>
    );
};

export default ReactQuillEditor;