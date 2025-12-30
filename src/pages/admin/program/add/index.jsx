import Listing from "@/pages/api/Listing";
import { useState } from "react";
import AdminLayout from "../../common/AdminLayout";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ReactQuillEditor from "@/common/ReactQuillEditor";
import toast from "react-hot-toast";
import ApprovalAndPartner from "@/common/ApprovalAndPartner";
import { useRouter } from "next/router";
import Campus from "@/commons/add/AddCampus";
import AddAbout from "@/commons/add/AddAbout";
import FinancialAdd from "@/commons/add/FinancialAdd";
import SEOAdd from "@/commons/add/SEOAdd";
import FaqAdd from "@/commons/add/FaqAdd";
import AddOnline from "@/commons/add/AddOnline";
import ServicesAdd from "@/commons/add/ServicesAdd";
import AddPattern from "@/commons/add/AddPattern";
import AddCertificate from "@/commons/add/AddCertificate";
import FactAdd from "@/commons/add/FactAdd";
import AdvantageSectionAdd from "@/commons/add/AdvantageSectionAdd";
import ImagePreview from "@/common/ImagePreview";
import AddInternationalcapmus from "@/commons/add/AddInternationalcapmus";
import ProgramCareer from "@/commons/add/ProgramCareer";
import AllUniversity from "@/common/AllUniversity";
import AddInstute from "@/commons/add/AddInstute";

function Index() {
    const router = useRouter();
    const [advantages, setAdvantages] = useState([
        { title: "", description: "" }
    ]);

    const [services, setServices] = useState([{ title: "", content: "", image: null, icon: null, icons_alt: "", images_alt: "" }]);

    const [Careers, setCareers] = useState([
        { title: "", description: "", salary: "" }
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

    const [facts, setFacts] = useState([
        {
            patternName: "",
            description: "",
        }
    ]);

    const [campusList, setCampusList] = useState([
        { name: "", image: "", campus_images_alt: "" }
    ]);

    const [campusInterList, setCampusInterList] = useState([
        { name: "", image: "", campus_images_alt: "" }
    ]);
    const [formData, setFormData] = useState({
        slug: "",
        name: "",
        icon: null,
        descriptions: "",
        pdf_download: "",
        cover_image: null,
        audio: "",
        video: "",
        career_growth: "",
        duration: "",
        specialization: "",
        shortDescription: "",
        subtitle: "",
        universitytitle: "",
        universitydesc: "",
        universitybtmdesc: "",
        university_id: "",
        conclusion: "",
        specialisationtitle: "",
        specialisationdesc: "",
        academictitle: "",
        academicdesc: "",
        academic_cover_image: "",
        entracetitle: "",
        entracedesc: "",
        entrace_cover_image: "",
        partnersname: "",
        partnersdesc: "",
        onlinetitle: "",
        onlinedesc: "",
        patterndescription: "",
        patternname: "",
        bottompatterndesc: "",
        factsname: "",
        financialdescription: "",
        financialname: "",
        meta_title: "",
        meta_description: "",
        meta_keywords: "",
        canonical_url: "",
        icon_alt: "",
        cover_image_alt: "",
        image_alt: "",
        rank: ""
    });


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
        setLoading(true);
        try {
            const main = new Listing();
            const payload = new FormData();
            payload.append("slug", formData.slug);
            payload.append("rank", formData.rank);
            payload.append("name", formData.name);
            payload.append("position", formData.position);
            payload.append("about_title", formData.about_title);
            payload.append("about_desc", formData.about_desc);
            payload.append("icon", formData.icon);
            payload.append("cover_image", formData.cover_image);
            payload.append("descriptions", JSON.stringify(formData.descriptions));
            payload.append("advantages", JSON.stringify(advantages));
            payload.append("services", JSON.stringify(services));
            payload.append("fees", JSON.stringify(fees));
            payload.append("faqs", JSON.stringify(faqs));
            payload.append("facts", JSON.stringify(facts));
            payload.append("approvals", JSON.stringify(selectedApprovals));
            payload.append("partners", JSON.stringify(selectedPartners));
            payload.append("patternname", formData.patternname);
            payload.append("patterndescription", formData.patterndescription);
            payload.append("bottompatterndesc", formData.bottompatterndesc);
            payload.append("approvals_name", formData.approvals_name);
            payload.append("approvals_desc", formData.approvals_desc);
            payload.append("rankings_description", formData.rankings_description);
            payload.append("rankings_name", formData.rankings_name);
            payload.append("advantagesname", formData.advantagesname);
            payload.append("advantagesdescription", formData.advantagesdescription);
            payload.append("factsname", formData.factsname);
            payload.append("certificatename", formData.certificatename);
            payload.append("certificatedescription", formData.certificatedescription);
            payload.append("meta_title", formData.meta_title);
            payload.append("meta_description", formData.meta_description);
            payload.append("meta_keywords", formData.meta_keywords);
            payload.append("canonical_url", formData.canonical_url);
            payload.append("certificatemage", formData.certificatemage);
            payload.append("cover_image_alt", formData.cover_image_alt)
            payload.append("icon_alt", formData.icon_alt)
            payload.append("image_alt", formData.image_alt)
            const cleanPatterns = patterns.map(item => ({
                patternName: item.patternName,
                percentage: item.percentage,
                description: item.description,
                pattern_images_alt: item?.pattern_images_alt
            }));
            payload.append("patterns", JSON.stringify(cleanPatterns));
            patterns.forEach((item, index) => {
                if (item.image) {
                    payload.append(`patternsimages[${index}]`, item.image);
                }
            });
            payload.append("financialname", formData.financialname);
            payload.append("financialdescription", formData.financialdescription);
            const campusInterLists = campusInterList.map(item => ({
                name: item.name,
                campus_images_alt: item?.campus_images_alt
            }));
            payload.append("internationalcampus", JSON.stringify(campusInterLists));
            campusInterList.forEach((item, index) => {
                if (item.image) {
                    payload.append(`campusinterimages[${index}]`, item.image);
                }
            });
            const campusListmanage = campusList.map(item => ({
                name: item.name,
                campus_images_alt: item?.campus_images_alt
            }));
            payload.append("campusList", JSON.stringify(campusListmanage));
            campusList.forEach((item, index) => {
                if (item.image) {
                    payload.append(`campusimages[${index}]`, item.image);
                }
            });
            payload.append("partnersname", formData.partnersname);
            payload.append("partnersdesc", formData.partnersdesc);
            payload.append("servicetitle", formData.servicetitle);
            payload.append("servicedesc", formData.servicedesc);
            payload.append("onlinedesc", formData.onlinedesc);
            payload.append("onlinetitle", formData.onlinetitle);
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
            const response = await main.AdminUniversityAdd(payload);

            if (response?.data?.status) {
                toast.success(response.data.message);
                router.push("/admin/university")
                setPreview(null);
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message);
        }

        setLoading(false);
    };

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
        { id: "partners", label: "Placement" },
        { id: "carrer", label: "Carrer" },
        { id: "institutes", label: "Institutes" },
        { id: "university", label: "University" },
        { id: "faq", label: "FAQ" },
        { id: "seo", label: "SEO" },

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
                    <div className="flex justify-between items-center  text-center p-4 "
                    >
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

                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4 md:px-6 lg:px-10 py-4">



                        {/* Center: Tabs */}
                        <div className="w-[400px] md:w-[1500px] overflow-x-auto scrollbar-hide bg-[#2C2C2C] rounded-lg">
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
                </div>


                <form
                    className="  mt-10 px-3 sm:px-6 pb-3 sm:pb-6 bg-white space-y-2 sm:space-y-4"
                >
                    {activeTab === "card" && (
                        <>
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

                            <ReactQuillEditor
                                label="Description"
                                desc={formData.descriptions}
                                handleBioChange={(val) => handleQuillChange("descriptions", val)}
                            />

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Download  Pdf {" "}
                                </label>
                                <input
                                    type="file"
                                    name="pdf_download"
                                    value={formData.pdf_download}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter rank"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    audio {" "}
                                </label>
                                <input
                                    type="file"
                                    name="audio"
                                    value={formData.audio}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter rank"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Video {" "}
                                </label>
                                <input
                                    type="file"
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
                            {/* thumbnail Upload Field */}
                            <div>
                                <label className="block text-[#FF1B1B] font-medium mb-1">
                                    Upload  Image
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
                                    University Image Alt{" "}

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
                                    career growth{" "}
                                </label>
                                <input
                                    type="text"
                                    name="career_growth"
                                    value={formData.career_growth}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter career_growth"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    specialization{" "}
                                </label>
                                <input
                                    type="text"
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter specialization"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>


                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    subtitle{" "}
                                </label>
                                <input
                                    type="text"
                                    name="subtitle"
                                    value={formData.subtitle}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter subtitle"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    shortDescription{" "}
                                </label>
                                <textarea
                                    rows={5}
                                    name="shortDescription"
                                    value={formData.shortDescription}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter short Description"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    university title{" "}
                                </label>
                                <input
                                    type="text"
                                    name="universitytitle"
                                    value={formData.universitytitle}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter short title"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    university desc{" "}
                                </label>
                                <textarea
                                    rows={5}
                                    type="text"
                                    name="universitydesc"
                                    value={formData.universitydesc}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter short Description"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    conclusion
                                </label>
                                <textarea
                                    rows={5}
                                    type="text"
                                    name="conclusion"
                                    value={formData.conclusion}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter short Description"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>




                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    specialisation title{" "}
                                </label>
                                <textarea
                                    rows={5}
                                    type="text"
                                    name="specialisationtitle"
                                    value={formData.specialisationtitle}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter short title"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>


                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    specialisationdesc
                                </label>
                                <input
                                    type="text"
                                    name="specialisationdesc"
                                    value={formData.specialisationdesc}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter short specialisationdesc"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>


                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    academic title{" "}
                                </label>
                                <input
                                    type="text"
                                    name="academictitle"
                                    value={formData.academictitle}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter subtitle"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Academic Description{" "}
                                </label>
                                <textarea
                                    rows={5}
                                    name="academicdesc"
                                    value={formData.academicdesc}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter short Description"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-[#FF1B1B] font-medium mb-1">
                                    Upload Academic Image
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, "academic_cover_image")}
                                    className="w-full p-2 bg-gray-100 rounded-md cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                />
                                <ImagePreview image={preview} />
                            </div>


                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Entrace title{" "}
                                </label>
                                <input
                                    type="text"
                                    name="entracetitle"
                                    value={formData.entracetitle}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter subtitle"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Academic Description{" "}
                                </label>
                                <textarea
                                    rows={5}
                                    name="entracedesc"
                                    value={formData.entracedesc}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    placeholder="Enter short Description"
                                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-[#FF1B1B] font-medium mb-1">
                                    Upload Entrace Image
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, "entrace_cover_image")}
                                    className="w-full p-2 bg-gray-100 rounded-md cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                />
                                <ImagePreview image={preview} />
                            </div>
                        </>
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

                    {activeTab === "carrer" && (
                        <>
                            <ProgramCareer handleQuillChange={handleQuillChange} handleChange={handleChange} Careers={Careers} setCareers={setCareers} formData={formData} />
                        </>
                    )}

                       {activeTab === "institutes" && (
                        <>
                            <AddInstute formData={formData} handleChange={handleChange} onlines={onlines} setOnlines={setOnlines} handleQuillChange={handleQuillChange} />
                        </>
                    )}

                    
                    {activeTab === "university" && (
                        <>
                          <AllUniversity />  
                        </>
                    )}
                    {activeTab === "faq" && (
                        <FaqAdd faqs={faqs} setFaqs={setFaqs} />
                    )}
                    {activeTab === "seo" && (
                        <SEOAdd formData={formData} handleChange={handleChange} />
                    )}
                </form>
                <div className="flex justify-between mt-4  p-6">
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
                        onClick={handleAdd}
                        className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
                    >
                        {loading ? "Saving..." : "Save"}
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