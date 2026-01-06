import Listing from "@/pages/api/Listing";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import ReactQuillEditor from "@/common/ReactQuillEditor";
import toast from "react-hot-toast";
import PatternSection from "@/commons/add/AddPattern";
import ApprovalAndPartner from "@/common/ApprovalAndPartner";
import AdminLayout from "../../common/AdminLayout";
import AddAbout from "@/commons/add/AddAbout";
import FinancialAdd from "@/commons/add/FinancialAdd";
import AdvantageSectionAdd from "@/commons/add/AdvantageSectionAdd";
import Addcareer from "@/commons/add/Addcareer";
import SEOAdd from "@/commons/add/SEOAdd";
import AddCriteria from "@/commons/add/AddCriteria";
import RankingAdd from "@/commons/add/RankingAdd";
import SemesterFormAdd from "@/commons/add/SemesterFormAdd";
import AddCertificate from "@/commons/add/AddCertificate";
import ServicesAdd from "@/commons/add/ServicesAdd";
import AddOnline from "@/commons/add/AddOnline";
import FaqAdd from "@/commons/add/FaqAdd";
import { useRouter } from "next/router";
import AddSkills from "@/commons/add/AddSkills";
import AddFees from "@/commons/add/AddFees";
import Link from "next/link";
import ImagePreview from "@/common/ImagePreview";
function Index() {
    const router = useRouter();
    const university_id = router?.query?.university_id
    const [categroy, setCategroy] = useState([])
    const fetchData = async () => {
        try {
            const main = new Listing();
            const response = await main.CategroyAll();
            console.log("response", response)
            setCategroy(response?.data?.data)
            setFormData({
                university_id: university_id
            })
        } catch (error) {
            console.log("error", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [activeTabs, setActiveTabs] = useState("indian");

    const [advantages, setAdvantages] = useState([
        { title: "", description: "" }
    ]);


    const [skills, setSkills] = useState([
        { title: "" }
    ]);

    const [Careers, setCareers] = useState([
        { title: "", description: "", salary: "" }
    ]);


    const [semesters, setSemesters] = useState([
        {
            title: "Semester I",
            subjects: [
                { description: "" ,credit :"" }
            ]
        }
    ]);

    const [services, setServices] = useState([{ title: "", content: "", image: null, icon: null }]);
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

    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);
    const [icons, setIcons] = useState(null);


    const [faqs, setFaqs] = useState([
        { question: "", answer: "", position: "" }
    ]);
    const [onlines, setOnlines] = useState([
        { title: "", content: "" }
    ]);

    const [patterns, setPatterns] = useState([
        {
            image: "",
            pattern_images_alt: "",
            patternName: "",
            percentage: "",
            description: "",
        },
    ]);


    const [campusList, setCampusList] = useState([
        { name: "", image: "" }
    ]);


    const [formData, setFormData] = useState({
        slug: "",
        name: "",
        icon: null,
        cover_image: null,
        position: "",
        fees_title: "",
        tuition_fees: "",
        fees_desc: "",
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
        video: "",
        partnersdesc: "",
        onlinetitle: "",
        onlinedesc: "",
        category: "indian",
        indian: [],
        nri: [],
        creteria: "",
        semesters_title: "",
        patterndescription: "",
        patternname: "",
        university_id: university_id || "",
        categroy_id: "",
        cover_image_alt: "",
        careername: "",
        careerdesc: "",
        meta_title: "",
        meta_description: "",
        meta_keywords: "",
        canonical_url: "",
        desccreteria: ""
    });

    const handleQuillChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const addDescription = () => {
        setFormData(prev => ({
            ...prev,
            descriptions: [...(Array.isArray(prev.descriptions) ? prev.descriptions : []), { text: "" }]
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

    const handleAdd = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            const main = new Listing();
            const payload = new FormData();
            payload.append("slug", formData.slug || "");
            payload.append("name", formData.name || "");
            payload.append("video", formData.video || "");
            payload.append("university_id", university_id || "")
            payload.append("position", formData.position || "");
            payload.append("icon", formData.icon || "");
            payload.append("fees_desc", formData.fees_desc || "");
            payload.append("desccreteria", formData.desccreteria || "");
            payload.append("cover_image", formData.cover_image || "");
            payload.append("fees_title", formData.fees_title || "");
            payload.append("category_id", formData?.categroy_id || "");
            payload.append("descriptions", JSON.stringify(formData.descriptions || []));
            payload.append("cover_image_alt", formData.cover_image_alt || "")
            payload.append("icon_alt", formData.icon_alt || "")
            payload.append("about_title", formData.about_title || "");
            payload.append("about_desc", formData.about_desc || "");
            payload.append("tuition_fees", formData.tuition_fees || "")
            payload.append("anuual_fees", formData.anuual_fees || "")
            payload.append("semester_fees", formData.semester_fees || "")
            payload.append("approvals_name", formData.approvals_name || "");
            payload.append("approvals_desc", formData.approvals_desc || "");
            payload.append("approvals", JSON.stringify(selectedApprovals));
            payload.append("rankings_description", formData.rankings_description || "");
            payload.append("rankings_name", formData.rankings_name || "");
            payload.append("creteria", formData.creteria || "")
            payload.append("category", formData.category || "")
            const NRIDATA = formData?.nri?.map(item => ({
                title: item.title,
                description: item.description,
                images_alt: item?.images_alt
            }));
            payload.append("nri", JSON.stringify(NRIDATA || []));
            formData?.nri?.forEach((item, index) => {
                if (item.images) {
                    payload.append(`nriimages[${index}]`, item.images);
                }
            });

            const IndiaDATA = formData?.indian?.map(item => ({
                title: item.title,
                description: item.description,
                images_alt: item?.images_alt
            }));
            payload.append("indian", JSON.stringify(IndiaDATA || []));
            formData?.indian?.forEach((item, index) => {
                if (item.images) {
                    payload.append(`Indianimages[${index}]`, item.images);
                }
            });
            payload.append("semesters", JSON.stringify(semesters || []))
            payload.append("semesters_title", formData.semesters_title || "")
            payload.append("certificatename", formData.certificatename || "");
            payload.append("certificatedescription", formData.certificatedescription || "");
            payload.append("certificatemage", formData.certificatemage || "");
            payload.append("image_alt", formData.image_alt || "")
            payload.append("advantages", JSON.stringify(advantages));
            payload.append("advantagesname", formData.advantagesname || "");
            payload.append("advantagesdescription", formData.advantagesdescription || "");
            payload.append("skills", JSON.stringify(skills));
            payload.append("skillsname", formData.skillname || "");
            payload.append("skilldesc", formData.skilldesc || "");
            payload.append("patternname", formData.patternname || "");
            payload.append("patterndescription", formData.patterndescription || "");
            payload.append("bottompatterndesc", formData.bottompatterndesc || "");
            const cleanPatterns = patterns.map(item => ({
                patternName: item.patternName,
                percentage: item.percentage,
                description: item.description,
                pattern_images_alt: item?.pattern_images_alt
            }));
            payload.append("patterns", JSON.stringify(cleanPatterns || []));
            patterns.forEach((item, index) => {
                if (item.image) {
                    payload.append(`patternsimages[${index}]`, item.image);
                }
            });
            payload.append("fees", JSON.stringify(fees));
            payload.append("careerdesc", formData.careerdesc || "")
            payload.append("careername", formData.careername || "")
            payload.append("careermanages", JSON.stringify(Careers));
            payload.append("partnersname", formData.partnersname || "");
            payload.append("partnersdesc", formData.partnersdesc || "");
            payload.append("partners", JSON.stringify(selectedPartners));
            payload.append("faqs", JSON.stringify(faqs));
            payload.append("meta_title", formData.meta_title || "");
            payload.append("meta_description", formData.meta_description || "");
            payload.append("meta_keywords", formData.meta_keywords || "");
            payload.append("canonical_url", formData.canonical_url || "");
            payload.append("financialname", formData.financialname || "");
            payload.append("financialdescription", formData.financialdescription || "");
            payload.append("servicetitle", formData.servicetitle || "");
            payload.append("servicedesc", formData.servicedesc || "");
            payload.append("onlinedesc", formData.onlinedesc || "");
            payload.append("onlinetitle", formData.onlinetitle || "");
            const cleanonlines = onlines.map(item => ({
                title: item.title,
                content: item.content
            }));
            payload.append("onlines", JSON.stringify(cleanonlines));
            const cleanServices = services.map(item => ({
                title: item.title,
                content: item.content,
                icons_alt: item?.icons_alt,
                images_alt: item?.images_alt
            }));
            payload.append("servcies", JSON.stringify(cleanServices));

            services.forEach((item, index) => {
                if (item.image) {
                    payload.append(`servicesimages[${index}]`, item.image);
                }
            });
            services.forEach((item, index) => {
                if (item.image) {
                    payload.append(`servicesicon[${index}]`, item.icon);
                }
            });
            for (let pair of payload.entries()) {
                console.log(pair[0], pair[1]);
            }
            // ✅ IMPORTANT FIX
            const response = await main.AdminCourseAdd(payload);
            if (response?.data?.status) {
                router.push(`/admin/courses?university_id=${university_id}`)
                toast.success(response.data.message);
                setPreview(null);
            } else {
                toast.error(response.data.message);
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message);
            setLoading(false);
        }

        setLoading(false);
    };
    const [activeTab, setActiveTab] = useState("card");

    const tabsData = [
        { id: "card", label: "Card " },
        { id: "about", label: "About " },
        { id: "fees", label: "Fees " },
        { id: "approvals", label: "Approvals" },
        { id: "rankings", label: "Rankings" },
        { id: "criteria", label: "Criteria" },
        { id: "sem", label: "Syllabus" },
        { id: "certificate", label: "Certificate" },
        { id: "skills", label: "Skills" },
        { id: "pattern", label: "Pattern" },
        { id: "financial", label: "Financial" },
        { id: "career", label: "Career" },
        { id: "partners", label: "Partners" },
        { id: "services", label: "Services" },
        { id: "online", label: "Admission Process" },
        { id: "faq", label: "FAQ" },
        { id: "seo", label: "SEO" },
        { id: "advantages", label: "Advantages" },
    ];

    const currentIndex = tabsData.findIndex((tab) => tab.id === activeTab);


    const handleNext = (e) => {
        e.preventDefault();
        if (currentIndex < tabsData.length - 1) {
            setActiveTab(tabsData[currentIndex + 1].id);
        }
        handleAdd(e);
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
                    <div className="p-2  flex flex-col lg:flex-row gap-4 justify-between  items-center ">
                        <Link
                            href={`/admin/courses?university_id=${university_id}`}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF1B1B] hover:bg-[#ad0e0e] text-white font-semibold transition-all"
                        >
                            <FaArrowLeft size={20} />
                            Back To Course Page
                        </Link>

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
                        <button
                            type="submit"
                            form="ownerForm"
                            onClick={handleAdd}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                    </div>
                    <div className="w-[400px] md:w-full overflow-x-auto scrollbar-hide bg-[#2C2C2C] mt-2 rounded-lg">
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
                </div>
                <form
                    className="  mt-10 px-3 sm:px-6 pb-3 sm:pb-6 bg-white space-y-2 sm:space-y-4"
                >
                    {activeTab === "card" && (
                        <>

                            {/* <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    University  {" "}
                                </label>

                                <div className="relative">
                                    <select
                                        name="university_id"
                                        value={formData?.university_id}
                                        onChange={handleChange}
                                        disabled
                                        className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    >
                                        {universities && universities.length > 0 ? (
                                            universities.map((u, index) => (
                                                <option key={index} value={u.id}>
                                                    {u.name}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>No data</option>
                                        )}

                                    </select>
                                </div>
                            </div> */}


                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Categroy Id {" "}
                                </label>

                                <div className="relative">
                                    <select
                                        name="categroy_id"
                                        value={formData?.categroy_id}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    >
                                        <option value="" disabled>Select a categroy</option>
                                        {categroy && categroy.length > 0 ? (
                                            categroy.map((u, index) => (
                                                <option key={index} value={u.id}>
                                                    {u.name}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>No data</option>
                                        )}

                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => {
                                        handleChange(e);
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

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Video {" "}
                                </label>
                                <input
                                    type="text"
                                    name="video"
                                    value={formData.video}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter video"
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
                                    Upload Course Image
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, "cover_image")}
                                    className="w-full p-2 bg-gray-100 rounded-md cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                />


                                <ImagePreview image={preview} />
                            </div>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Course Image Alt{" "}
                                </label>
                                <input
                                    type="text"
                                    name="cover_image_alt"
                                    value={formData.cover_image_alt}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter cover image alt"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    University Icon Alt{" "}
                                </label>
                                <input
                                    type="text"
                                    name="icon_alt"
                                    value={formData.icon_alt}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter cover Icon alt"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
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
                                <ImagePreview image={icons} />
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="text-xl font-semibold text-[#CC2828]">Multiple Description</h2>
                                    <button
                                        type="button"
                                        onClick={addDescription}
                                        className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                                    >
                                        + Add More
                                    </button>
                                </div>

                                {formData?.descriptions?.map((desc, index) => (
                                    <div key={index} className="mb-4">
                                        <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                        </label>
                                        <ReactQuillEditor
                                            label={`Description ${index + 1}`}
                                            desc={desc.text}
                                            handleBioChange={(value) => {
                                                const plainText = value.replace(/<[^>]*>/g, "").trim();
                                                if (plainText.length <= 500) {
                                                    handleDescriptionChange(index, value);
                                                }
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => deleteDescription(index)}
                                            className="bg-red-500 text-white rounded-md p-3 hover:bg-red-700 flex justify-center items-center"
                                        >
                                            <MdDelete size={20} />
                                        </button>

                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {activeTab === "about" && (
                        <AddAbout handleChange={handleChange} handleQuillChange={handleQuillChange} formData={formData} />
                    )}

                    {activeTab === "fees" && (
                        <AddFees handleChange={handleChange} formData={formData} />
                    )}

                    {activeTab === "approvals" && (
                        <>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}

                                </label>
                                <input
                                    type="text"
                                    name="approvals_name"
                                    value={formData.approvals_name}
                                    onChange={(e) => {
                                        handleChange(e);
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
                        <RankingAdd formData={formData} handleChange={handleChange} handleQuillChange={handleQuillChange} />
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
                            {/* <ReactQuillEditor
                                label="Description"
                                desc={formData.desccreteria}
                                handleBioChange={(val) => handleQuillChange("desccreteria", val)}
                            /> */}
                            <div className="flex mb-5 bg-gray-100 rounded-lg overflow-hidden">
                                <button
                                    type="button"
                                    onClick={() => handleTab("indian")}
                                    className={`w-1/2 py-2 font-semibold ${activeTabs === "indian" ? "bg-red-500 text-white" : ""}`}
                                >
                                    Indian Students
                                </button>

                                <button
                                    type="button"

                                    onClick={() => handleTab("nri")}
                                    className={`w-1/2 py-2 font-semibold ${activeTabs === "nri" ? "bg-red-500 text-white" : ""}`}
                                >
                                    NRI / Foreign Students
                                </button>
                            </div>

                            {/* Criteria Component */}
                            <AddCriteria
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
                                </label>
                                <input
                                    type="text"
                                    name="semesters_title"
                                    value={formData.semesters_title}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter name"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <SemesterFormAdd semesters={semesters} setSemesters={setSemesters} /></>

                    )}

                    {activeTab === "advantages" && (
                        <>
                            <AdvantageSectionAdd advantages={advantages} setAdvantages={setAdvantages}
                                htitle={"Advantages"} handleChange={handleChange} handleQuillChange={handleQuillChange} formData={formData} />
                        </>
                    )}

                    {activeTab === "skills" && (
                        <>
                            <AddSkills skills={skills} setSkills={setSkills}
                                htitle={"Skills"} handleChange={handleChange} handleQuillChange={handleQuillChange} formData={formData} />
                        </>
                    )}

                    {activeTab === "certificate" && (
                        <AddCertificate
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

                    {activeTab === "financial" && (
                        <FinancialAdd handleQuillChange={handleQuillChange} handleChange={handleChange} fees={fees} setFees={setFees} formData={formData} />
                    )}

                    {activeTab === "career" && (
                        <Addcareer handleQuillChange={handleQuillChange} handleChange={handleChange} Careers={Careers} setCareers={setCareers} formData={formData} />
                    )}

                    {activeTab === "partners" && (
                        <>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}

                                </label>
                                <input
                                    type="text"
                                    name="partnersname"
                                    value={formData.partnersname}
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
                        <ServicesAdd services={services} setServices={setServices} handleChange={handleChange} handleQuillChange={handleQuillChange} formData={formData} />
                    )}
                    {activeTab === "online" && (
                        <AddOnline formData={formData} handleChange={handleChange} onlines={onlines} setOnlines={setOnlines} handleQuillChange={handleQuillChange} />
                    )}
                    {activeTab === "faq" && (
                        <FaqAdd faqs={faqs} setFaqs={setFaqs} />
                    )}
                    {activeTab === "seo" && (
                        <SEOAdd formData={formData} handleChange={handleChange} />
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