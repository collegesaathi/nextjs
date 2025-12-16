import Listing from "@/pages/api/Listing";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import ReactQuillEditor from "@/common/ReactQuillEditor";
import toast from "react-hot-toast";
import AdvantagesSection from "../../../../commons/add/AdvantageSectionAdd";
import PatternSection from "../../../../commons/add/AddPattern";
import ApprovalAndPartner from "@/common/ApprovalAndPartner";
import AdminLayout from "../../common/AdminLayout";
import Criteria from "../../../../commons/add/AddCriteria";
import SemesterForm from "../../../../commons/add/SemesterFormAdd";
import Certificate from "../../../../commons/add/AddCertificate";
import CarrerSection from "../../common/CarrerSection";
import FaqSection from "../../../../commons/add/FaqAdd";
import OnlineSection from "../../../../commons/add/AddOnline";
import ServicesSection from "../../../../commons/add/ServicesAdd";
import Ranking from "../../../../commons/add/RankingAdd";
function Index() {
    const [activeTabs, setActiveTabs] = useState("indian");

    const [advantages, setAdvantages] = useState([
        { title: "", description: "" }
    ]);

    const [Careers, setCareers] = useState([
        { title: "", description: "", salary: '' }
    ]);


    const [semesters, setSemesters] = useState([
        {
            title: "Semester I",
            subjects: [
                { description: "" }
            ]
        }
    ]);


    const [services, setServices] = useState([{ title: "", content: "", image: null, icon: null }]);


    const [selectedApprovals, setSelectedApprovals] = useState([]);

    const toggleApproval = (id) => {
        if (selectedApprovals.includes(id)) {
            setSelectedApprovals(selectedApprovals.filter(a => a !== id));
        } else {
            setSelectedApprovals([...selectedApprovals, id]);
        }
    };

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


    const [faqs, setFaqs] = useState([
        { question: "", answer: "", position: "" }
    ]);
    console.log("faqs", faqs)
    const [onlines, setOnlines] = useState([
        { title: "", content: "" }
    ]);

    const [patterns, setPatterns] = useState([
        {
            image: "",
            patternName: "",
            percentage: "",
            description: "",
        }
    ]);

    const [facts, setFacts] = useState([
        {
            patternName: "",
            description: "",
        }
    ]);

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
        title_fees: "",
        tuition_fees: "",
        anuual_fees: "",
        semester_fees: "",
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
        onlinedesc: "",
        category: "indian",
        indian: [],
        nri: [],
        creteria: "",
        semesters_title: "",
        patterndescription: "",
        patternname: ""
    });

    console.log("formData", formData)
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

    const handleTab = (tab) => {
        setActiveTabs(tab);
        setFormData(prev => ({
            ...prev,
            category: tab
        }));
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
                fetchData();
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            toast.error("Something went wrong");
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
        { id: "fees", label: "Fees " },
        { id: "approvals", label: "Approvals" },
        { id: "rankings", label: "Rankings" },
        { id: "criteria", label: "Criteria" },
        { id: "sem", label: "Semseter" },
        { id: "certificate", label: "Certificate" },
        { id: "advantages", label: "Skills" },
        { id: "pattern", label: "Pattern" },
        { id: "career", label: "Career" },
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
                            <div className="flex items-center gap-2 bg-[#2C2C2C] px-2 py-2 rounded-xl">
                                {tabsData.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-4 py-2 rounded-lg text-[14px] font-medium transition 
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
                            </div>

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
                        </>
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

                            <ReactQuillEditor
                                label="Description"
                                desc={formData.about_desc}
                                handleBioChange={(val) => handleQuillChange("about_desc", val)}
                            />

                        </>

                    )}

                    {activeTab === "fees" && (
                        <>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Fees Title {" "}
                                </label>
                                <input
                                    type="text"
                                    name="title_fees"
                                    value={formData.title_fees}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter fees title"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Total Tuition Fee:
                                </label>
                                <input
                                    type="text"
                                    name="tuition_fees"
                                    value={formData.tuition_fees}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter tuition fees "
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Total Anuual Fee:

                                </label>
                                <input
                                    type="text"
                                    name="anuual_fees"
                                    value={formData.anuual_fees}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter anuual fees"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Semester Fees

                                </label>
                                <input
                                    type="text"
                                    name="semester_fees"
                                    value={formData.semester_fees}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter Semester Fees"
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
                            <div>

                                <ReactQuillEditor
                                    label="Description"
                                    desc={formData.approvals_desc}
                                    handleBioChange={(val) => handleQuillChange("approvals_desc", val)}
                                />
                            </div>

                            <ApprovalAndPartner step={1} toggleApproval={toggleApproval} selectedApprovals={selectedApprovals} />

                        </>

                    )}

                    {activeTab === "rankings" && (
                        <Ranking formData={formData} handleChange={handleChange} handleQuillChange={handleQuillChange} />
                    )}

                    {activeTab === "criteria" && (
                        <>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.creteria?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="creteria"
                                    value={formData.creteria}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div className="flex mb-5 bg-gray-100 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => handleTab("indian")}
                                    className={`w-1/2 py-2 font-semibold ${activeTabs === "indian" ? "bg-red-500 text-white" : ""}`}
                                >
                                    Indian Students
                                </button>

                                <button
                                    onClick={() => handleTab("nri")}
                                    className={`w-1/2 py-2 font-semibold ${activeTabs === "nri" ? "bg-red-500 text-white" : ""}`}
                                >
                                    NRI / Foreign Students
                                </button>
                            </div>

                            {/* Criteria Component */}
                            <Criteria
                                criteria={formData[activeTabs]}
                                setCriteria={(dataOrUpdater) => {
                                    // support both array or updater function
                                    setFormData(prev => {
                                        const updatedTabValue = typeof dataOrUpdater === "function"
                                            ? dataOrUpdater(prev[activeTabs])
                                            : dataOrUpdater;
                                        return { ...prev, [activeTabs]: updatedTabValue };
                                    });
                                }}
                            />
                        </>
                    )}

                    {activeTab === "sem" && (
                        <>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.semesters_title?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="semesters_title"
                                    value={formData.semesters_title}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <SemesterForm semesters={semesters} setSemesters={setSemesters} /></>

                    )}

                    {activeTab === "advantages" && (
                        <>
                            <AdvantagesSection advantages={advantages} setAdvantages={setAdvantages}
                                htitle={"Skills"} handleChange={handleChange} handleQuillChange={handleQuillChange} formData={formData} />
                        </>
                    )}

                    {activeTab === "certificate" && (
                        <Certificate
                            formData={formData}
                            handleChange={handleChange}
                            handleImageChange={handleImageChange}
                            preview={preview}
                            handleQuillChange={handleQuillChange}
                        />

                    )}

                    {activeTab === "pattern" && (
                        <PatternSection setPatterns={setPatterns} patterns={patterns} formData={formData} handleChange={handleChange} handleQuillChange={handleQuillChange} />
                    )}

                    {activeTab === "career" && (
                        <>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Financial    Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.fincalname?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="fincalname"
                                    value={formData.fincalname}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            <ReactQuillEditor
                                label="Financial Description"
                                desc={formData.fincal_des}
                                handleBioChange={(val) => handleQuillChange("fincal_des", val)}
                            />


                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Careers   Name{" "}
                                    <span className="text-sm text-gray-500">
                                        ({formData.carrer_name?.length}/50)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="carrer_name"
                                    value={formData.carrer_name}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 50) handleChange(e);
                                    }}
                                    placeholder="Enter name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            <ReactQuillEditor
                                label="Careers  Description"
                                desc={formData.careerdes}
                                handleBioChange={(val) => handleQuillChange("careerdes", val)}
                            />
                            <CarrerSection Carrers={Careers} setCarrer={setCareers} htitle={"Careers"} />
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
                            <ReactQuillEditor
                                label="Description"
                                desc={formData.partnersdesc}
                                handleBioChange={(val) => handleQuillChange("partnersdesc", val)}
                            />

                            <ApprovalAndPartner
                                selectedPartners={selectedPartners}
                                togglePartners={togglePartners}
                                step={2}
                            />

                        </>

                    )}
                    {activeTab === "services" && (
                        <ServicesSection services={services} setServices={setServices} handleChange={handleChange} handleQuillChange={handleQuillChange} formData={formData} />
                    )}
                    {activeTab === "online" && (
                        <OnlineSection formData={formData} handleChange={handleChange} onlines={onlines} setOnlines={setOnlines} handleQuillChange={handleQuillChange} />
                    )}
                    {activeTab === "faq" && (
                        <FaqSection faqs={faqs} setFaqs={setFaqs} />
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