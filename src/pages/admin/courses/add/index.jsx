import Listing from "@/pages/api/Listing";
import { useEffect, useState } from "react";
import AdminLayout from "../../common/AdminLayout";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import ReactQuillEditor from "@/common/ReactQuillEditor";
import toast from "react-hot-toast";

function Index() {
    const [advantages, setAdvantages] = useState([
        { title: "", description: "" }
    ]);
    const addAdvantage = () => {
        setAdvantages([...advantages, { title: "", description: "" }]);
    };
    const handleAdvantageChange = (index, field, value) => {
        const updated = [...advantages];
        updated[index][field] = value;
        setAdvantages(updated);
    };
    const deleteAdvantage = (index) => {
        setAdvantages(advantages.filter((_, i) => i !== index));
    };
    const saveAdvantage = (index) => {
        console.log("Saving advantage:", advantages[index]);
    };


    const [services, setServices] = useState([
        { title: "", content: "" }
    ]);
    const addService = () => {
        setServices([...services, { title: "", content: "" }]);
    };
    const handleServiceChange = (index, field, value) => {
        const updated = [...services];
        updated[index][field] = value;
        setServices(updated);
    };
    const deleteService = (index) => {
        setServices(services.filter((_, i) => i !== index));
    };
    const saveService = (index) => {
        console.log("Saving service:", services[index]);
    };


    const approvalOptions = [
        {
            id: 1,
            title: "UGC-DEB Approval",
            image: "/uploads/ugc-deb.png",
        },
        {
            id: 2,
            title: "AICTE",
            image: "/uploads/aicte.png",
        },
        {
            id: 3,
            title: "NAAC",
            image: "/uploads/naac.png",
        },
        {
            id: 4,
            title: "MHRD Category 1 University",
            image: "/uploads/mhrd.png",
        }
    ];
    const [selectedApprovals, setSelectedApprovals] = useState([]);

    const toggleApproval = (id) => {
        if (selectedApprovals.includes(id)) {
            setSelectedApprovals(selectedApprovals.filter(a => a !== id));
        } else {
            setSelectedApprovals([...selectedApprovals, id]);
        }
    };


    const PartnersOptions = [
        {
            id: 1,
            title: "UGC-DEB Approval",
            image: "/uploads/ugc-deb.png",
        },
        {
            id: 2,
            title: "AICTE",
            image: "/uploads/aicte.png",
        },
        {
            id: 3,
            title: "NAAC",
            image: "/uploads/naac.png",
        },
        {
            id: 4,
            title: "MHRD Category 1 University",
            image: "/uploads/mhrd.png",
        }
    ];
    const [selectedPartners, setSelectedPartners] = useState([]);

    const togglePartners = (id) => {
        if (selectedPartners.includes(id)) {
            setSelectedPartners(selectedPartners.filter(a => a !== id));
        } else {
            setSelectedPartners([...selectedPartners, id]);
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);
    const [icons, setIcons] = useState(null);

    // FEES STATE
    const [fees, setFees] = useState([
        {
            courseName: "",
            totalFees: "",
            loanAmount: "",
            tenure: "",
            interest: "",
            emi: "",
            description: "",
        }
    ]);
    const [faqs, setFaqs] = useState([
        { question: "", answer: "" }
    ]);
    console.log("faqs", faqs)
    const [onlines, setOnlines] = useState([
        { title: "", content: "" }
    ]);

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

    const addFaq = () => {
        // Only add if no empty one exists
        const hasEmpty = faqs.some(f => !f.question && !f.answer);
        if (!hasEmpty) {
            setFaqs([...faqs, { question: "", answer: "" }]);
        } else {
            toast.error("Please fill in the existing empty FAQ before adding another.");
        }
    };

    const deleteFaq = (index) => {
        const updatedFaqs = [...faqs];
        updatedFaqs.splice(index, 1);
        setFaqs(updatedFaqs);
    };

    const handleFaqChange = (index, field, value) => {
        const updatedFaqs = [...faqs];
        updatedFaqs[index][field] = value;
        setFaqs(updatedFaqs);
    };


    const handleFeesChange = (index, field, value) => {
        const updatedFees = [...fees];
        updatedFees[index][field] = value;
        setFees(updatedFees);
    };


    const handleFeesSubmit = (index) => {
        const fee = fees[index];

        const description =
            `Total Fees: ${fee.totalFees} | ` +
            `Loan Amount: ${fee.loanAmount} | ` +
            `Tenure: ${fee.tenure} | ` +
            `Interest: ${fee.interest}% | ` +
            `Monthly EMI: ${fee.emi}`;

        const updated = [...fees];
        updated[index].description = description;

        setFees(updated);
    };
    const addFees = () => {
        setFees([
            ...fees,
            {
                courseName: "",
                totalFees: "",
                loanAmount: "",
                tenure: "",
                interest: "",
                emi: "",
                description: "",
            }
        ]);
    };

    const deleteFees = (index) => {
        const updated = [...fees];
        updated.splice(index, 1);
        setFees(updated);
    };

    const [patterns, setPatterns] = useState([
        {
            image: "",
            patternName: "",
            percentage: "",
            description: "",
        }
    ]);
    const handlePatternChange = (index, field, value) => {
        const updated = [...patterns];
        updated[index][field] = value;
        setPatterns(updated);
    };
    const addPattern = () => {
        setPatterns([
            ...patterns,
            {
                image: "",
                patternName: "",
                percentage: "",
                description: "",
            }
        ]);
    };
    const handlePatternSubmit = (index) => {
        const updated = [...patterns];
        updated[index]._id = Date.now(); // lock row
        setPatterns(updated);
    };
    const deletePattern = (index) => {
        const updated = [...patterns];
        updated.splice(index, 1);
        setPatterns(updated);
    };


    const [facts, setFacts] = useState([
        {
            factname: "",
            description: "",
        }
    ]);
    const handleFactsChange = (index, field, value) => {
        const updated = [...facts];
        updated[index][field] = value;
        setFacts(updated);
    };
    const addFacts = () => {
        setFacts([
            ...facts,
            {
                factname: "",
                description: "",
            }
        ]);
    };
    const handlefactsSubmit = (index) => {
        const updated = [...facts];
        updated[index]._id = Date.now(); // lock row
        setFacts(updated);
    };
    const deleteFacts = (index) => {
        const updated = [...facts];
        updated.splice(index, 1);
        setFacts(updated);
    };

    const handleChanges = (index, field, value) => {
        const list = [...approvals];
        list[index][field] = value;
        setApprovals(list);
    };

    const [campusList, setCampusList] = useState([
        { name: "", image: "" }
    ]);
    const handleCampusChange = (index, field, value) => {
        const list = [...campusList];
        list[index][field] = value;
        setCampusList(list);
    };

    const handleCampusImage = (index, file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const list = [...campusList];
            list[index].image = reader.result;
            setCampusList(list);
        };
        reader.readAsDataURL(file);
    };

    const addCampus = () => {
        setCampusList([...campusList, { name: "", image: "" }]);
    };

    const deleteCampus = (index) => {
        const list = [...campusList];
        list.splice(index, 1);
        setCampusList(list);
    };

    const [formData, setFormData] = useState({
        slug: "",
        name: "",
        icon: null,
        cover_image: null,
        position: "",
        descriptions: [{ text: "" }],
        about_title: "",
        about_desc: "",
        rankings_point: "",
        rankings_name: "",
        rankings_description: "",
        approvals_name: "",
        approvals_desc: "",
        advantagesdescription: "",
        advantagesname: "",
        certificatemage: "",
        certificatedescription: "",
        certificatename: "",
        partnersname: "",
        partnersdesc: "",
        onlinetitle: "",
        onlinedesc: ""
    });

    console.log("formData", formData)
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    const handleQuillChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };


    const addDescription = () => {
        setFormData(prev => ({
            ...prev,
            descriptions: [...prev.descriptions, { text: "" }]
        }));
    };

    const handleDescriptionChange = (index, value) => {
        const updated = [...formData.descriptions];
        updated[index].text = value;
        setFormData(prev => ({ ...prev, descriptions: updated }));
    };

    const deleteDescription = (index) => {
        const updated = formData.descriptions.filter((_, i) => i !== index);
        setFormData(prev => ({ ...prev, descriptions: updated }));
    };


    // 🔹 Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 🔹 Image Upload (icon or cover)
    const handleImageChange = (e, field) => {
        const file = e.target.files[0];

        if (!file || !file.type.startsWith("image/")) {
            toast.error("Upload a valid image!");
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [field]: file,
        }));

        if (field === "icon") {
            setIcons(URL.createObjectURL(file));
        } else {
            setPreview(URL.createObjectURL(file));

        }
    };

    // ✅ ADD UNIVERSITY
    const handleAdd = async (e) => {
        e.preventDefault();
        if (loading) return;

        // if (!formData.icon) {
        //     toast.error("Icon required!");
        //     return;
        // }

        setLoading(true);

        try {
            const main = new Listing();
            const payload = new FormData();

            payload.append("slug", formData.slug);
            payload.append("name", formData.name);
            payload.append("position", formData.position);
            payload.append("description", formData.description);
            payload.append("icon", formData.icon);
            payload.append("cover_image", formData.cover_image);
            const response = await main.AdminUniversityAdd(payload);

            if (response?.data?.status) {
                toast.success(response.data.message);
                setFormData({
                    slug: "",
                    name: "",
                    icon: null,
                    cover_image: null,
                    position: "",
                    description: "",
                });

                setPreview(null);
                handleClose();
                fetchData();
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            toast.error("Something went wrong");
        }

        setLoading(false);
    };

    // ✅ UPDATE UNIVERSITY
    const handleUpdate = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try {
            const main = new Listing();
            const payload = new FormData();

            payload.append("slug", formData.slug);
            payload.append("name", formData.name);
            payload.append("position", formData.position);
            payload.append("description", formData.description);

            if (formData.icon instanceof File) {
                payload.append("icon", formData.icon);
            }

            if (formData.cover_image instanceof File) {
                payload.append("cover_image", formData.cover_image);
            }

            const response = await main.AdminUniversityUpdate(data?._id, payload);

            if (response?.data?.status) {
                toast.success(response.data.message);
                handleClose();
                fetchData();
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            toast.error("Update failed");
        }

        setLoading(false);
    };

    // ✅ EDIT MODE DATA LOAD
    // useEffect(() => {
    //     if (data) {
    //         setFormData({
    //             slug: data.slug || "",
    //             name: data.name || "",
    //             icon: data.icon || null,
    //             cover_image: data.cover_image || null,
    //             position: data.position || "",
    //             description: data.description || "",
    //         });

    //         if (data.icon) {
    //             setPreview(data.icon);
    //         }
    //     }
    // }, [data]);
    const data = ""

    const [activeTab, setActiveTab] = useState("card");

    const tabsData = [
        { id: "card", label: "Card " },
        { id: "about", label: "About " },
        { id: "approvals", label: "Approvals" },
        { id: "rankings", label: "Rankings" },
        { id: "advantages", label: "Advantages" },
        { id: "facts", label: "Facts" },
        { id: "certificate", label: "Certificate" },
        { id: "pattern", label: "Pattern" },
        { id: "financial", label: "Financial" },
        { id: "campuses", label: "Campuses" },
        { id: "partners", label: "Partners" },
        { id: "services", label: "Services" },
        { id: "online", label: "Online" },
        { id: "faq", label: "FAQ" },
    ];

    const currentIndex = tabsData.findIndex((tab) => tab.id === activeTab);

    const handleNext = () => {
        if (currentIndex < tabsData.length - 1) {
            setActiveTab(tabsData[currentIndex + 1].id);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setActiveTab(tabsData[currentIndex - 1].id);
        }
    };


    return (<>
        <AdminLayout>
            <div className="min-h-screen p-1 ">

                <div className="w-full  border-b border-white/10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4 md:px-6 lg:px-10 py-4">

                        {/* Left: Back Arrow + Label */}
                        <div className="flex items-center gap-3 w-[250px]">
                            <FaArrowLeft
                                onClick={handleBack}
                                className={`text-xl cursor-pointer text-black
                    ${currentIndex === 0 ? "text-gray-500 cursor-not-allowed" : "text-black hover:text-gray-300"}
                `}
                            />

                            <h3 className="text-black text-[18px] lg:text-[20px] font-semibold tracking-tight">
                                {tabsData[currentIndex]?.label}
                            </h3>

                            <FaArrowRight
                                onClick={currentIndex === currentIndex.length - 1 ? null : handleNext}
                                className={`
        text-xl cursor-pointer 
        ${currentIndex === currentIndex.length - 1
                                        ? "text-gray-400 cursor-not-allowed"
                                        : "text-black hover:text-gray-300"
                                    }
    `}
                            />

                        </div>

                        {/* Center: Tabs */}
                        <div className="w-[400px] md:w-[1300px] overflow-x-auto scrollbar-hide bg-[#2C2C2C] rounded-lg">
                            <div className="flex items-center gap-2  px-2 py-2 rounded-xl">
                                {tabsData.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-2 py-2 rounded-lg text-[14px] font-medium transition 
                            ${activeTab === tab.id
                                                ? "bg-white text-black shadow"
                                                : "text-gray-300 hover:bg-gray-200 hover:text-black"
                                            }
                        `}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Save Button */}
                        <button
                            type="submit"
                            form="ownerForm"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                    </div>
                </div>


                <form
                    onSubmit={data ? handleUpdate : handleAdd}
                    className="  mt-10 px-3 sm:px-6 pb-3 sm:pb-6 bg-white space-y-2 sm:space-y-4"
                >
                    {activeTab === "card" && (
                        <>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.name?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Slug{" "}

                                </label>
                                <input
                                    type="text"
                                    name="slug"
                                    value={formData.slug}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter Slug"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            {/* Description Field changed to textarea with 300 character limit */}

                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="text-xl font-semibold text-[#CC2828]">Multiple Description</h2>

                                    <button
                                        onClick={addDescription}
                                        className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                                    >
                                        + Add More
                                    </button>
                                </div>

                                {formData.descriptions.map((desc, index) => (
                                    <div key={index} className="mb-4">
                                        <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                            <span>Description {index + 1}</span>
                                            <span className="text-sm text-gray-500">
                                                ({desc.text.length}/500)
                                            </span>
                                        </label>
                                        <div className="flex items-start gap-3 mb-4">
                                            <input
                                                value={desc.text}
                                                onChange={(e) => {
                                                    if (e.target.value.length <= 500)
                                                        handleDescriptionChange(index, e.target.value);
                                                }}
                                                placeholder="Enter description"
                                                className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                                required
                                            />

                                            <button
                                                onClick={() => deleteDescription(index)}
                                                className="bg-red-500 text-white rounded-md p-3 hover:bg-red-700 flex justify-center items-center"
                                            >
                                                <MdDelete size={20} />
                                            </button>
                                        </div>

                                    </div>
                                ))}
                            </div>

                            <div>
                                <label className="block text-[#FF1B1B] font-medium mb-1">
                                    Position
                                </label>
                                <input
                                    type="number"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    placeholder="Enter Position"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            {/* thumbnail Upload Field */}
                            <div>
                                <label className="block text-[#FF1B1B] font-medium mb-1">
                                    Upload University Image
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, "cover_image")}
                                    className="w-full p-2 bg-gray-100 rounded-md cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                />

                                {/* Image Preview */}
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

                            <div>
                                <label className="block text-[#FF1B1B] font-medium mb-1">
                                    Upload Icon
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, "icon")}

                                    className="w-full p-2 bg-gray-100 rounded-md cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                />

                                {/* Image Preview */}
                                {icons && (
                                    <div className="mt-3">
                                        <img
                                            src={icons}
                                            alt="Preview"
                                            className="w-full h-48 object-cover rounded-md border"
                                        />
                                    </div>
                                )}
                            </div></>
                    )}

                    {activeTab === "about" && (
                        <>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    About Title {" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.about_title?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="about_title"
                                    value={formData.about_title}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter about title"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            {/* Description Field changed to textarea with 300 character limit */}
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    <span>Description</span>
                                    <span className="text-sm text-gray-500">
                                        ({formData.about_desc.length}/500)
                                    </span>
                                </label>
                                <textarea
                                    name="about_desc"
                                    value={formData.about_desc}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 500)
                                            handleChange(e);
                                    }}
                                    placeholder="Enter About Description"
                                    rows={10}
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                        </>

                    )}

                    {activeTab === "approvals" && (
                        <>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.approvals_name?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="approvals_name"
                                    value={formData.approvals_name}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter approvals name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            {/* Description Field changed to textarea with 300 character limit */}
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    <span>Description</span>
                                    <span className="text-sm text-gray-500">
                                        ({formData.approvals_desc?.length}/500)
                                    </span>
                                </label>
                                <textarea
                                    name="approvals_desc"
                                    value={formData.approvals_desc}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 500)
                                            handleChange(e);
                                    }}
                                    placeholder="Enter Approvals Description"
                                    rows={10}
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

                                {approvalOptions.map((item) => (
                                    <label
                                        key={item.id}
                                        className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer shadow-sm bg-white"
                                    >
                                        {/* Checkbox */}
                                        <input
                                            type="checkbox"
                                            checked={selectedApprovals.includes(item.id)}
                                            onChange={() => toggleApproval(item.id)}
                                            className="h-4 w-4"
                                        />

                                        {/* Image + Title */}
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-10 h-10 object-contain"
                                            />
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </div>
                                    </label>
                                ))}

                            </div>
                        </>

                    )}

                    {activeTab === "rankings" && (
                        <>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.rankings_name?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="rankings_name"
                                    value={formData.rankings_name}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            {/* Description Field changed to textarea with 300 character limit */}
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    <span>Description</span>
                                    <span className="text-sm text-gray-500">
                                        ({formData.rankings_description?.length}/500)
                                    </span>
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.rankings_description}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 500)
                                            handleChange(e);
                                    }}
                                    placeholder="Enter description"
                                    rows={10}
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <ReactQuillEditor
                                label="Privacy Policy"
                                desc={formData.rankings_point}
                                handleBioChange={(val) => handleQuillChange("rankings_point", val)}
                            />




                        </>

                    )}

                    {activeTab === "advantages" && (
                        <>

                            {/* MAIN ADVANTAGE NAME */}
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.advantagesname?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="advantagesname"
                                    value={formData.advantagesname}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            {/* MAIN DESCRIPTION */}
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    <span>Description</span>
                                    <span className="text-sm text-gray-500">
                                        ({formData.advantagesdescription?.length}/500)
                                    </span>
                                </label>

                                <textarea
                                    name="advantagesdescription"
                                    value={formData.advantagesdescription}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 500) handleChange(e);
                                    }}
                                    placeholder="Enter description"
                                    rows={10}
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-xl font-semibold text-[#CC2828]">
                                    Multiple Advantages
                                </h2>
                                <button
                                    onClick={addAdvantage}
                                    className="w-full max-w-[170px] border border-[#CC2828] 
                bg-[#CC2828] hover:bg-red-700 text-white py-3 rounded-[10px] 
                text-base xl:text-lg transition"
                                >
                                    + Add More
                                </button>

                            </div>

                            {/* DYNAMIC ADVANTAGE ITEMS */}
                            {advantages.map((adv, index) => (
                                <div key={index} className="grid grid-cols-1 gap-4 items-center">

                                    {/* TITLE */}
                                    <div>
                                        <label className="block text-[#CC2828] font-medium mb-2">
                                            Advantage
                                        </label>
                                        <input
                                            type="text"
                                            disabled={adv?._id}
                                            value={adv.title}
                                            onChange={(e) =>
                                                handleAdvantageChange(index, "title", e.target.value)
                                            }
                                            placeholder="Enter Advantage Title"
                                            className="w-full bg-[#F4F6F8] text-[#727272] 
                        border border-[#F4F6F8] rounded-[10px] px-4 py-2 
                        focus:outline-none"
                                        />
                                    </div>

                                    {/* DESCRIPTION */}
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="block text-[#CC2828] font-medium">
                                                Description
                                            </label>

                                            <div className="flex items-center gap-2">
                                                {adv._id ? (
                                                    <button
                                                        onClick={() => openAdvantageEditModal(adv)}
                                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                        title="Edit Advantage"
                                                    >
                                                        <MdEdit />
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => saveAdvantage(index)}
                                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                        title="Save Advantage"
                                                    >
                                                        <MdAdd />
                                                    </button>
                                                )}

                                                <span className="text-[#b1a9a9]">|</span>

                                                <button
                                                    onClick={() => deleteAdvantage(index)}
                                                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                    title="Delete Advantage"
                                                >
                                                    <MdDelete />
                                                </button>
                                            </div>
                                        </div>

                                        <input
                                            type="text"
                                            value={adv.description}
                                            disabled={adv?._id}
                                            onChange={(e) =>
                                                handleAdvantageChange(index, "description", e.target.value)
                                            }
                                            placeholder="Enter Description"
                                            className="w-full bg-[#F4F6F8] text-[#727272] 
                        border border-[#F4F6F8] rounded-[10px] px-4 py-2 
                        focus:outline-none"
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* ADD MORE BUTTON */}

                        </>
                    )}

                    {activeTab === "facts" && (
                        <>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.factsname?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="factsname"
                                    value={formData.factsname}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-xl font-semibold text-[#CC2828]">
                                    Multiple Facts
                                </h2>

                                <button
                                    onClick={addFacts}
                                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                                >
                                    + Add Facts
                                </button>
                            </div>

                            {facts?.map((item, index) => (
                                <div key={index} className="grid grid-cols-1 gap-4 items-center">
                                    {/* Pattern Name */}
                                    <div>
                                        <label className="block text-[#CC2828] font-medium mb-2">Facts Name</label>
                                        <input
                                            type="text"
                                            disabled={item?._id}
                                            value={item.patternName}
                                            onChange={(e) => handleFactsChange(index, "factnames", e.target.value)}
                                            placeholder="Enter Pattern Name"
                                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                                        />
                                    </div>



                                    {/* Description */}
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="block text-[#CC2828] font-medium">Facts Description</label>

                                            {/* Buttons */}
                                            <div className="flex items-center gap-2">
                                                {item._id ? (
                                                    <button
                                                        onClick={() => openfactEdit(item)}
                                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                    >
                                                        <MdEdit />
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => handlefactsSubmit(index)}
                                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                    >
                                                        <MdAdd />
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => deleteFacts(index)}
                                                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                >
                                                    <MdDelete />
                                                </button>
                                            </div>
                                        </div>

                                        <textarea
                                            rows={4}
                                            disabled={item?._id}
                                            value={item.description}
                                            onChange={(e) => handleFactsChange(index, "description", e.target.value)}
                                            placeholder="Enter Description"
                                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                                        />
                                    </div>
                                </div>
                            ))}
                        </>

                    )}

                    {activeTab === "certificate" && (
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
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    <span>Description</span>
                                    <span className="text-sm text-gray-500">
                                        ({formData.certificatedescription?.length}/500)
                                    </span>
                                </label>
                                <textarea
                                    name="certificatedescription"
                                    value={formData.certificatedescription}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 500)
                                            handleChange(e);
                                    }}
                                    placeholder="Enter description"
                                    rows={10}
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
                        </>

                    )}

                    {activeTab === "pattern" && (
                        <>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.patternname?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="patternname"
                                    value={formData.patternname}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    <span>Description</span>
                                    <span className="text-sm text-gray-500">
                                        ({formData.patterndescription?.length}/500)
                                    </span>
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.patterndescription}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 500)
                                            handleChange(e);
                                    }}
                                    placeholder="Enter description"
                                    rows={10}
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-xl font-semibold text-[#CC2828]">
                                    Multiple Pattern
                                </h2>

                                <button
                                    onClick={addPattern}
                                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                                >
                                    + Add Pattern
                                </button>
                            </div>

                            {patterns.map((item, index) => (
                                <div key={index} className="grid grid-cols-1 gap-4 items-center">

                                    {/* Image URL */}
                                    <div>
                                        <label className="block text-[#CC2828] font-medium mb-2">Image URL</label>
                                        <input
                                            type="file"
                                            disabled={item?._id}
                                            value={item.image}
                                            onChange={(e) => handlePatternChange(index, "image", e.target.value)}
                                            placeholder="Enter Image URL"
                                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                                        />
                                    </div>

                                    {/* Preview */}
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt="preview"
                                            className="w-20 h-20 object-contain"
                                        />
                                    )}

                                    {/* Pattern Name */}
                                    <div>
                                        <label className="block text-[#CC2828] font-medium mb-2">Pattern Name</label>
                                        <input
                                            type="text"
                                            disabled={item?._id}
                                            value={item.patternName}
                                            onChange={(e) => handlePatternChange(index, "patternName", e.target.value)}
                                            placeholder="Enter Pattern Name"
                                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                                        />
                                    </div>

                                    {/* Percentage */}
                                    <div>
                                        <label className="block text-[#CC2828] font-medium mb-2">Percentage</label>
                                        <input
                                            type="text"
                                            disabled={item?._id}
                                            value={item.percentage}
                                            onChange={(e) => handlePatternChange(index, "percentage", e.target.value)}
                                            placeholder="Enter % (example: 30%)"
                                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                                        />
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="block text-[#CC2828] font-medium">Description</label>

                                            {/* Buttons */}
                                            <div className="flex items-center gap-2">
                                                {item._id ? (
                                                    <button
                                                        onClick={() => openPatternEdit(item)}
                                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                    >
                                                        <MdEdit />
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => handlePatternSubmit(index)}
                                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                    >
                                                        <MdAdd />
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => deletePattern(index)}
                                                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                >
                                                    <MdDelete />
                                                </button>
                                            </div>
                                        </div>

                                        <textarea
                                            rows={4}
                                            disabled={item?._id}
                                            value={item.description}
                                            onChange={(e) => handlePatternChange(index, "description", e.target.value)}
                                            placeholder="Enter Description"
                                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                                        />
                                    </div>
                                </div>
                            ))}

                        </>
                    )}
                    {/* Action Buttons */}
                    {activeTab === "financial" && (
                        <>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Financial  Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.financialname?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="financialname"
                                    value={formData.financialname}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            {/* Description Field changed to textarea with 300 character limit */}
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    <span>Financial Description</span>
                                    <span className="text-sm text-gray-500">
                                        ({formData.financialdescription?.length}/500)
                                    </span>
                                </label>
                                <textarea
                                    name="financialdescription"
                                    value={formData.financialdescription}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 500)
                                            handleChange(e);
                                    }}
                                    placeholder="Enter description"
                                    rows={10}
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-xl font-semibold text-[#CC2828]">
                                    Multiple Financial
                                </h2>

                                <button
                                    onClick={addFees}
                                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                                >
                                    + Multiple Financial More
                                </button>
                            </div>
                            {fees?.map((fee, index) => (
                                <div key={index} className="grid grid-cols-1 gap-4 items-center">

                                    {/* Course Name */}
                                    <div>
                                        <label className="block text-[#CC2828] font-medium mb-2">Course Name</label>
                                        <input
                                            type="text"
                                            disabled={fee?._id}
                                            value={fee.courseName}
                                            onChange={(e) => handleFeesChange(index, "courseName", e.target.value)}
                                            placeholder="Enter Course Name"
                                            className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none"
                                        />
                                    </div>

                                    {/* 5 Fees Fields */}
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="block text-[#CC2828] font-medium">Fees Details</label>

                                            <div className="flex items-center gap-2">
                                                {fee._id ? (
                                                    <button
                                                        onClick={() => openEditModal(fee)}
                                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                        title="Edit Fees"
                                                    >
                                                        <MdEdit />
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => handleFeesSubmit(index)}
                                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                        title="Save Fees"
                                                    >
                                                        <MdAdd />
                                                    </button>
                                                )}

                                                <span className="text-[#b1a9a9]">|</span>

                                                <button
                                                    onClick={() => deleteFees(index)}
                                                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                    title="Delete Fees"
                                                >
                                                    <MdDelete />
                                                </button>
                                            </div>
                                        </div>

                                        {/* 5 Inputs */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Total Fees"
                                                value={fee.totalFees}
                                                disabled={fee?._id}
                                                onChange={(e) => handleFeesChange(index, "totalFees", e.target.value)}
                                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Loan Amount"
                                                value={fee.loanAmount}
                                                disabled={fee?._id}
                                                onChange={(e) => handleFeesChange(index, "loanAmount", e.target.value)}
                                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Tenure"
                                                value={fee.tenure}
                                                disabled={fee?._id}
                                                onChange={(e) => handleFeesChange(index, "tenure", e.target.value)}
                                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Interest (%)"
                                                value={fee.interest}
                                                disabled={fee?._id}
                                                onChange={(e) => handleFeesChange(index, "interest", e.target.value)}
                                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Monthly EMI"
                                                value={fee.emi}
                                                disabled={fee?._id}
                                                onChange={(e) => handleFeesChange(index, "emi", e.target.value)}
                                                className="w-full bg-[#F4F6F8] text-[#727272] border rounded-[10px] px-4 py-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Add More Button */}
                            <div className="flex justify-center ">

                            </div>

                        </>
                    )}
                    {activeTab === "campuses" && (
                        <>
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-[#CC2828]">
                                    Campus Section
                                </h2>
                                <button
                                    onClick={addCampus}
                                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                                >
                                    + Add More Campus
                                </button>
                            </div>
                            {/* MULTIPLE CAMPUS BLOCKS */}
                            {campusList.map((campus, index) => (
                                <div key={index} className="border px-2  rounded-xl bg-gray-100 mb-2 ">
                                    {/* Name */}
                                    <label className="flex  justify-between  items-center block text-[#CC2828] font-medium mb-2">
                                        Campus Name
                                        <button
                                            onClick={() => deleteCampus(index)}
                                            className="mt-3 bg-red-500 text-white px-4 py-1 rounded-[10px]"
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
                                        onChange={(e) => handleCampusImage(index, e.target.files[0])}
                                        className="w-full bg-white text-[#727272] border rounded-[10px] px-4 py-2 focus:outline-none mb-3 "
                                    />

                                    {/* Preview */}
                                    {campus.image && (
                                        <img
                                            src={campus.image}
                                            className="mt-3 mb-3 w-40 h-40 object-cover rounded-md border"
                                            alt="campus"
                                        />
                                    )}

                                    {/* Delete Button */}

                                </div>
                            ))}
                        </>
                    )}
                    {activeTab === "partners" && (
                        <>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.partnersname?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="partnersname"
                                    value={formData.partnersname}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter partners name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            {/* Description Field changed to textarea with 300 character limit */}
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    <span>Description</span>
                                    <span className="text-sm text-gray-500">
                                        ({formData.partnersdesc?.length}/500)
                                    </span>
                                </label>
                                <textarea
                                    name="partnersdesc"
                                    value={formData.partnersdesc}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 500)
                                            handleChange(e);
                                    }}
                                    placeholder="Enter Partners Description"
                                    rows={10}
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

                                {PartnersOptions.map((item) => (
                                    <label
                                        key={item.id}
                                        className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer shadow-sm bg-white"
                                    >
                                        {/* Checkbox */}
                                        <input
                                            type="checkbox"
                                            checked={selectedPartners.includes(item.id)}
                                            onChange={() => togglePartners(item.id)}
                                            className="h-4 w-4"
                                        />

                                        {/* Image + Title */}
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-10 h-10 object-contain"
                                            />
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </div>
                                    </label>
                                ))}

                            </div>
                        </>

                    )}
                    {activeTab === "services" && (
                        <>

                            {/* MAIN NAME FIELD */}
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.servicetitle?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="servicetitle"
                                    value={formData.servicetitle}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter service name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            {/* DESCRIPTION FIELD */}
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    <span>Description</span>
                                    <span className="text-sm text-gray-500">
                                        ({formData.servicedesc?.length}/500)
                                    </span>
                                </label>

                                <textarea
                                    name="servicedesc"
                                    value={formData.servicedesc}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 500) handleChange(e);
                                    }}
                                    placeholder="Enter service description"
                                    rows={10}
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            {/* SERVICES REPEATING SECTION */}
                            <>
                                <div className="flex justify-between items-center mb-5">
                                    <h2 className="text-xl font-semibold text-[#CC2828]">
                                        Services Section
                                    </h2>

                                    <button
                                        onClick={addService}
                                        className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 
                    text-white px-6 py-2 rounded-[10px] text-base transition"
                                    >
                                        + Add More Service
                                    </button>
                                </div>

                                {services.map((service, index) => (
                                    <div key={index} className="grid grid-cols-1 gap-4 items-center">

                                        {/* TITLE */}
                                        <div>
                                            <label className="block text-[#CC2828] font-medium mb-2">Title</label>

                                            <input
                                                type="text"
                                                disabled={service?._id}
                                                value={service.title}
                                                onChange={(e) => handleServiceChange(index, "title", e.target.value)}
                                                placeholder="Enter service title"
                                                className="w-full bg-[#F4F6F8] text-[#727272] border border-[#F4F6F8] 
                            rounded-[10px] px-4 py-2 focus:outline-none"
                                            />
                                        </div>

                                        {/* CONTENT */}
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <label className="block text-[#CC2828] font-medium">Content</label>

                                                <div className="flex items-center gap-2">
                                                    {service._id ? (
                                                        <button
                                                            onClick={() => openEditModal(service)}
                                                            className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                            title="Edit Service"
                                                        >
                                                            <MdEdit />
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => saveService(index)}
                                                            className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                            title="Save Service"
                                                        >
                                                            <MdAdd />
                                                        </button>
                                                    )}

                                                    <span className="text-[#b1a9a9]">|</span>

                                                    <button
                                                        onClick={() => deleteService(index)}
                                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                        title="Delete Service"
                                                    >
                                                        <MdDelete />
                                                    </button>
                                                </div>
                                            </div>

                                            <input
                                                type="text"
                                                value={service.content}
                                                disabled={service?._id}
                                                onChange={(e) => handleServiceChange(index, "content", e.target.value)}
                                                placeholder="Enter service content"
                                                className="w-full bg-[#F4F6F8] text-[#727272] border border-[#F4F6F8] 
                            rounded-[10px] px-4 py-2 focus:outline-none"
                                            />
                                        </div>

                                    </div>
                                ))}
                            </>

                        </>
                    )}
                    {activeTab === "online" && (
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
                                    value={formData.onlinetitle}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter partners name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            {/* Description Field changed to textarea with 300 character limit */}
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    <span>Description</span>
                                    <span className="text-sm text-gray-500">
                                        ({formData.onlinedesc?.length}/500)
                                    </span>
                                </label>
                                <textarea
                                    name="onlinedesc"
                                    value={formData.onlinedesc}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 500)
                                            handleChange(e);
                                    }}
                                    placeholder="Enter online Description"
                                    rows={10}
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <>
                                <div className="flex justify-between items-center mb-5">
                                    <h2 className="text-xl font-semibold text-[#CC2828]">
                                        Online Section
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
                                                value={onlines.question}
                                                onChange={(e) => handleOnlineChange(index, 'onlines', e.target.value)}
                                                placeholder="Enter title"
                                                className="w-full bg-[#F4F6F8] text-[#727272] border border-[#F4F6F8] rounded-[10px] px-4 py-2 focus:outline-none"
                                            />
                                        </div>

                                        {/* ANSWER */}
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <label className="block text-[#CC2828] font-medium">Content</label>

                                                <div className="flex items-center gap-2">
                                                    {faq._id ? (
                                                        <button
                                                            onClick={() => openEditModal(faq)}
                                                            className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                            title="Edit FAQ"
                                                        >
                                                            <MdEdit />
                                                        </button>
                                                    ) : (
                                                        <button
                                                            // onClick={() => handleFaqSubmit(index)}
                                                            className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                            title="Save FAQ"
                                                        >
                                                            <MdAdd />
                                                        </button>
                                                    )}

                                                    <span className="text-[#b1a9a9]">|</span>

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

                    )}
                    {activeTab === "faq" && (
                        <>
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-xl font-semibold text-[#CC2828]">
                                    FAQ Section
                                </h2>

                                <button
                                    onClick={addFaq}

                                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                                >
                                    + Add More FAQ
                                </button>
                            </div>
                            {faqs.map((faq, index) => (
                                <div key={index} className="grid grid-cols-1 gap-4 items-center">
                                    {/* QUESTION */}
                                    <div>
                                        <label className="block text-[#CC2828] font-medium mb-2">Question</label>
                                        <input
                                            type="text"
                                            disabled={faq?._id}
                                            value={faq.question}
                                            onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                                            placeholder="Enter Question"
                                            className="w-full bg-[#F4F6F8] text-[#727272] border border-[#F4F6F8] rounded-[10px] px-4 py-2 focus:outline-none"
                                        />
                                    </div>

                                    {/* ANSWER */}
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="block text-[#CC2828] font-medium">Answer</label>

                                            <div className="flex items-center gap-2">
                                                {faq._id ? (
                                                    <button
                                                        onClick={() => openEditModal(faq)}
                                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                        title="Edit FAQ"
                                                    >
                                                        <MdEdit />
                                                    </button>
                                                ) : (
                                                    <button
                                                        // onClick={() => handleFaqSubmit(index)}
                                                        className="bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                                                        title="Save FAQ"
                                                    >
                                                        <MdAdd />
                                                    </button>
                                                )}

                                                <span className="text-[#b1a9a9]">|</span>

                                                <button
                                                    onClick={() => deleteFaq(index)}
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
                                            value={faq.answer}
                                            disabled={faq?._id}
                                            onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                                            placeholder="Enter Answer"
                                            className="w-full bg-[#F4F6F8] text-[#727272] border border-[#F4F6F8] rounded-[10px] px-4 py-2 focus:outline-none"
                                        />
                                    </div>
                                </div>
                            ))}

                        </>
                    )}
                </form>
                <div className="flex justify-between mt-8  p-6">
                    <button
                        type="button"
                        onClick={handleBack}
                        disabled={currentIndex === 0}
                        className={`flex items-center gap-2 px-6 py-2 rounded-lg font-[Poppins] transition 
                       ${currentIndex === 0
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-gray-200 text-[#3E3E3E] cursor-pointer hover:bg-gray-300"
                            }`}
                    >
                        <FaArrowLeft /> Back
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={currentIndex === tabsData.length - 1}
                        className={`flex items-center gap-2 px-6 py-2 rounded-lg font-[Poppins] transition 
                           ${currentIndex === tabsData.length - 1
                                ? "bg-blue-300 cursor-not-allowed"
                                : "bg-blue-600 cursor-pointer text-white hover:bg-blue-700"
                            }`}
                    >
                        Next <FaArrowRight />
                    </button>
                </div>
            </div>
        </AdminLayout>
    </>);
}

export default Index;