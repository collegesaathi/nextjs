import Listing from "@/pages/api/Listing";
import { useEffect, useState } from "react";
import AdminLayout from "../../common/AdminLayout";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactQuillEditor from "@/common/ReactQuillEditor";
import toast from "react-hot-toast";
import ApprovalAndPartner from "@/common/ApprovalAndPartner";
import { useRouter } from "next/router";
import SEOAdd from "@/commons/add/SEOAdd";
import FaqAdd from "@/commons/add/FaqAdd";
import AllUniversity from "@/common/AllUniversity";
import AddInstute from "@/commons/add/AddInstute";
import AddKeyHighlights from "@/commons/add/AddKeyHighlights";
import AddPlacements from "@/commons/add/AddPlacements";
import ImagePreview from "@/common/ImagePreview";
import ProgramCareer from "@/commons/add/ProgramCareer";
import Addcurriculum from "@/commons/add/Addcurriculum";
import ProgramFincalceAdd from "@/commons/add/ProgramFincalceAdd";
import AddDuration from "@/commons/add/AddDuration";
import AddExperince from "@/commons/add/AddExperince";
import AddOnline from "@/commons/add/AddOnline";
import AdminOnlineMBA from "@/commons/add/AdminOnlineMBA";
import AddPurpuse from "@/commons/add/AddPurpuse";

function Index() {
    const router = useRouter();


    const [categroy, setCategroy] = useState([])
    const fetchData = async () => {
        try {
            const main = new Listing();
            const response = await main.CategroyAll();
            console.log("response", response)
            setCategroy(response?.data?.data)
        } catch (error) {
            console.log("error", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    const [advantages, setAdvantages] = useState([
        { title: "", description: "" }
    ]);

    const [services, setServices] = useState([{ title: "", content: "", image: null, icon: null, icons_alt: "", images_alt: "" }]);

    const [Careers, setCareers] = useState([
        { title: "", description: "", salary: "" }
    ]);

    const [PlacementAdd, setPlacementAdd] = useState([
        { name: "", description: "", image: "" }
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
        { question: "", answer: "" }
    ]);
    const [onlines, setOnlines] = useState([
        { title: "", content: "" }
    ]);



console.log("selectedApprovals" ,selectedApprovals)
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

    const [curriculum, setCurriculum] = useState([
        { title: "", description: "", }
    ]);

    const [Duration, setDuration] = useState([
        { title: "", description: "", }
    ]);

    const [Experinces, setExperinces] = useState([
        { title: "" }
    ]);
    const [fincalceAdd, setfincalceAdd] = useState([
        { name: "", image: "", desc: "" }
    ]);


    const [institutes, setinstitutes] = useState([
        { name: "", desc: "" }
    ]);

    const [purpuse, setpurpuse] = useState([
        { name: "", image: "", desc: "" }
    ]);

    const [choose, setchoose] = useState([
        { name: "", image: "", }
    ]);

    const [formData, setFormData] = useState({
        slug: "",
        name: "",
        title: "",
        icon: null,
        descriptions: "",
        pdf_download: "",
        cover_image: null,
        categroy_id: "",
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
        rank: "",
        curriculum_title: "",       // curriculumname ki jagah ye use karein
        curriculum_description: "", // curriculum_desc ki jagah ye use karein
        curriculum_subtitle: "",    // subtitle ke liye naya field,
        durationname:"",
        durationdesc:'',
        experincedesc:"",
        experincename:""
    });

    const [monthlyData, setMonthlyData] = useState({
        Jan: "", Feb: "", Mar: "", Apr: "", May: "", Jun: "",
        Jul: "", Aug: "", Sep: "", Oct: "", Nov: "", Dec: "",
    });

    console.log("monthlyData", monthlyData)
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
            payload.append("name", formData.name);
            payload.append("descriptions", formData.descriptions);
            payload.append("categroy_id", formData.categroy_id);
            payload.append("pdf_download", formData.pdf_download);
            payload.append("cover_image", formData.cover_image);
            payload.append("audio", formData.audio);
            payload.append("video", formData.video);
            payload.append("specialization", formData.specialization);
            payload.append("career_growth", formData.career_growth);
            payload.append("duration", formData.duration);
            payload.append("subtitle", formData.subtitle);
            payload.append("shortDescription", formData.shortDescription);
            payload.append("specialisationdesc", formData.specialisationdesc);
            payload.append("specialisationtitle", formData.specialisationtitle);
            payload.append("academictitle", formData.academictitle);
            payload.append("academicdesc", formData.academicdesc);
            payload.append("cover_image", formData.academic_cover_image);
            payload.append("entrace_cover_image", formData.entrace_cover_image);
            payload.append("entracedesc", formData.entracedesc);
            payload.append("entracetitle", formData.entracetitle);
            payload.append("futuretitle", formData.futuretitle)
            payload.append("futuredesc", formData.futuredesc);
            payload.append("monthlyData", JSON.stringify(monthlyData));
            payload.append("universitytitle", formData.universitytitle);
            payload.append("universitybtmdesc", formData.universitybtmdesc);
            payload.append("universitydesc", formData.universitydesc);
            payload.append("university_id" ,selectedApprovals)
            payload.append("onlinedesc", formData.onlinedesc);
            payload.append("onlinetitle", formData.onlinetitle);
            payload.append("onlines", JSON.stringify(onlines));
            payload.append("experincename", formData.experincename);
            payload.append("experincedesc", formData.experincedesc);
            payload.append("Experinces", JSON.stringify(Experinces));
            payload.append("durationname", formData.durationname);
            payload.append("durationdesc", formData.durationdesc);
            payload.append("Duration", JSON.stringify(Duration));
             payload.append("financialname", formData.financialname);
            payload.append("financialdescription", formData.financialdescription);
             payload.append("curriculum_title", formData.curriculum_title);
             payload.append("curriculum_description", formData.curriculum_description);
            payload.append("curriculm", JSON.stringify(curriculum));
             const fincalceAdds = fincalceAdd.map(item => ({
                name: item.name,
                desc :  item.desc
            }));
            payload.append("fincalceAdds", JSON.stringify(fincalceAdds));
            fincalceAdd.forEach((item, index) => {
                if (item.image) {
                    payload.append(`fincalceAddsimages[${index}]`, item.image);
                }
            });
            payload.append("keyhight", JSON.stringify(facts))
            payload.append("faqs", JSON.stringify(faqs))
            payload.append("institutes", JSON.stringify(institutes))
            payload.append("Careers", JSON.stringify(Careers))
            console.log('faqs', faqs)
            const chooses = choose.map(item => ({
                name: item.name,
            }));
            payload.append("choose", JSON.stringify(chooses));
            choose.forEach((item, index) => {
                if (item.image) {
                    payload.append(`chooseimages[${index}]`, item.image);
                }
            });
            const purpuses = purpuse.map(item => ({
                name: item.name,
                desc: item.desc
            }));
            payload.append("purpuse", JSON.stringify(purpuses));
            purpuses.forEach((item, index) => {
                if (item.image) {
                    payload.append(`purpuseimages[${index}]`, item.image);
                }
            });
            for (let pair of payload.entries()) {
                console.log(pair[0], pair[1]);
            }

            // ✅ IMPORTANT FIX
            const response = await main.AdminProgramsAdd(payload);

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
        { id: "purpuse", label: "PurPuse" },
        { id: "futures", label: "Future" },
        { id: "onlines", label: "Onlines" },
        { id: "experince", label: "Experince" },
        { id: "duration", label: "Duration" },
        { id: "financial", label: "Financial" },
        { id: "keyhighlight", label: "keyhighlight" },
        { id: "curriculum", label: "curriculum" },
        { id: "carrer", label: "Carrer" },
        { id: "partners", label: "Placement" },
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
                                    name="title"
                                    value={formData.title}
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
                                <input
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
                                <textarea
                                    rows={5}
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
                                    Entrace Description{" "}
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


                    {activeTab === "purpuse" && (
                        <>
                            <AddPurpuse formData={formData} handleChange={handleChange} handleQuillChange={handleQuillChange} choose={choose} setchoose={setchoose} purpuse={purpuse} setpurpuse={setpurpuse} />
                        </>
                    )}

                    {activeTab === "futures" && (
                        <AdminOnlineMBA formData={formData} handleChange={handleChange} monthlyData={monthlyData} setMonthlyData={setMonthlyData} handleQuillChange={handleQuillChange} />
                    )}

                    {activeTab === "onlines" && (
                        <AddOnline formData={formData} handleChange={handleChange} onlines={onlines} setOnlines={setOnlines} handleQuillChange={handleQuillChange} />
                    )}

                    {activeTab === "experince" && (
                        <AddExperince Experinces={Experinces} setExperinces={setExperinces} handleQuillChange={handleQuillChange} handleChange={handleChange} formData={formData} />
                    )}
                    {activeTab === "duration" && (
                        <AddDuration Duration={Duration} setDuration={setDuration} handleQuillChange={handleQuillChange} handleChange={handleChange} formData={formData} />
                    )}

                    {activeTab === "financial" && (
                        <ProgramFincalceAdd fincalceAdd={fincalceAdd} setfincalceAdd={setfincalceAdd} handleQuillChange={handleQuillChange} handleChange={handleChange} formData={formData} />
                    )}
                    {activeTab === "partners" && (
                        <>
                            <AddPlacements handleQuillChange={handleQuillChange} handleChange={handleChange} PlacementAdd={PlacementAdd} setPlacementAdd={setPlacementAdd} formData={formData} />
                            <p className="font-poppins text-[18px] font-bold">Top Recruiters</p>
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
                            <AddInstute formData={formData} handleChange={handleChange} institutes={institutes} setinstitutes={setinstitutes} handleQuillChange={handleQuillChange} />
                        </>
                    )}

                    {activeTab === "keyhighlight" && (
                        <AddKeyHighlights facts={facts} setFacts={setFacts} />
                    )}

                    {activeTab === "curriculum" && (
                        <>

                            <div>
                                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                    Name{" "}
                                </label>
                                <input
                                    type="text"
                                    name="curriculum_title"
                                    value={formData.curriculum_title}
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
                                desc={formData.curriculum_description}
                                handleBioChange={(val) => handleQuillChange("curriculum_description", val)}
                            />
                            <Addcurriculum curriculum={curriculum} setCurriculum={setCurriculum} />
                        </>
                    )}

                    {activeTab === "university" && (
                        <>
                            <AllUniversity toggleApproval={toggleApproval} formData={formData} handleChange={handleChange} selectedApprovals={selectedApprovals}/>
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