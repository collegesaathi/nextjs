import Listing from "@/pages/api/Listing";
import { useEffect, useState } from "react";
import AdminLayout from "../../common/AdminLayout";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import ReactQuillEditor from "@/common/ReactQuillEditor";
import toast from "react-hot-toast";
import ApprovalAndPartner from "@/common/ApprovalAndPartner";
import { useRouter } from "next/router";
import { Loader } from "@/common/Loader";
import Campus from "@/commons/add/AddCampus";
import AddAbout from "@/commons/add/AddAbout";
import SEOAdd from "@/commons/add/SEOAdd";
import FaqAdd from "@/commons/add/FaqAdd";
import AddOnline from "@/commons/add/AddOnline";
import ServicesAdd from "@/commons/add/ServicesAdd";
import AdvantageSectionAdd from "@/commons/add/AdvantageSectionAdd";
import FactAdd from "@/commons/add/FactAdd";
import AddCertificate from "@/commons/add/AddCertificate";
import AddPattern from "@/commons/add/AddPattern";
import FinancialAdd from "@/commons/add/FinancialAdd";
import AddCampus from "@/commons/add/AddCampus";

function Index() {
    const router = useRouter()
    const Id = router.query.slug;
    const [processing, setprocessing] = useState(false);
    const [preview, setPreview] = useState(null);
    const [icons, setIcons] = useState(null);
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
        Id: "",
        servicetitle: "",
        icon_alt: "",
        cover_image_alt: "",
        image_alt: ""
    });
    const [data, setData] = useState("")
    const [selectedApprovals, setSelectedApprovals] = useState([]);
    const [advantages, setAdvantages] = useState([
        { title: "", description: "" }
    ]);
    const [services, setServices] = useState([{ title: "", content: "", image: null, icon: null }]);
    const [selectedPartners, setSelectedPartners] = useState([]);
    const [fees, setFees] = useState([{
        courseName: "", totalFees: "",
        loanAmount: "", tenure: "",
        interest: "", emi: "", description: "",
    }]);
    const [faqs, setFaqs] = useState([{ question: "", answer: "", position: "" }]);
    const [onlines, setOnlines] = useState([{ title: "", content: "" }]);
    const [facts, setFacts] = useState([{ patternName: "", description: "" }]);
    const [patterns, setPatterns] = useState([
        {
            image: "",
            patternName: "",
            percentage: "",
            description: "",
        }]);

    const [campusList, setCampusList] = useState([
        { name: "", image: "" }
    ]);

    const handleDetails = async (Id) => {
        try {
            setprocessing(true);
            const main = new Listing();
            const res = await main.UniveristyGet(Id);
            if (res?.data?.status) {
                setData(res.data.data?.university)
                toast.success(res.data.message);
            } else {
                toast.error(res?.data?.university?.message || "Something went wrong.");
            }
        } catch (error) {
            console.log("error", error)
            console.error("Package Delete Error:", error);
            toast.error(error?.response?.data?.university?.message || "Delete failed");
        } finally {
            setprocessing(false);
        }
    };

    useEffect(() => {
        if (Id) {
            handleDetails(Id)
        }
    }, [Id])
    console.log("data", data)


    useEffect(() => {
        setFormData({
            slug: data?.slug,
            name: data?.name,
            position: data?.position,
            about_title: data?.about?.title,
            about_desc: data?.about?.description,
            approvals_name: data?.approvals?.title,
            approvals_desc: data?.approvals?.description,
            rankings_name: data?.rankings?.title,
            rankings_description: data?.rankings?.description,
            advantagesname: data?.advantages?.title,
            advantagesdescription: data?.advantages?.description,
            factsname: data?.facts?.title,
            certificatedescription: data?.certificates?.description,
            certificatename: data?.certificates?.title,
            certificatemage: data?.certificates?.image,
            image_alt: data?.certificates?.image_alt,
            patternname: data?.examPatterns?.title,
            patterndescription: data?.examPatterns?.description,
            financialname: data?.financialAid?.title,
            financialdescription: data?.financialAid?.description,
            partnersname: data?.partners?.title,
            partnersdesc: data?.partners?.description,
            servicetitle: data?.services?.title,
            servicedesc: data?.services?.description,
            onlinetitle: data?.admissionProcess?.title,
            onlinedesc: data?.admissionProcess?.description,
            bottompatterndesc: data?.examPatterns?.bottompatterndesc,
            meta_title: data?.seo?.meta_title,
            meta_keywords: data?.seo?.meta_keywords,
            meta_description: data?.seo?.meta_description,
            canonical_url: data?.seo?.canonical_url,
            Id: data?.id,
            icon_alt: data?.icon_alt,
            cover_image_alt: data?.cover_image_alt,
            descriptions: data?.description?.length
                ? data.description
                : [{ text: "" }],
        })
        setPreview(data?.cover_image);
        setIcons(data?.icon);
        setSelectedApprovals(data?.approvals?.approval_ids);
        setSelectedPartners(data?.partners?.placement_partner_id);
        setAdvantages(data?.advantages?.advantages?.length ? data?.advantages?.advantages : [{ title: "", description: "" }]);
        setFacts(data?.facts?.facts?.length ? data?.facts?.facts : [{ patternName: "", description: "" }]);
        setPatterns(data?.examPatterns?.patterns?.length ? data?.examPatterns?.patterns : [{ patternName: "", description: "", image: "", percentage: "", pattern_images_alt: "" }]);
        setFees(data?.financialAid?.aid?.length ? data?.financialAid?.aid : [{
            courseName: "",
            totalFees: "",
            loanAmount: "",
            tenure: "",
            interest: "",
            emi: "",
            description: "",
        }])
        setCampusList(data?.universityCampuses?.campus?.length ? data?.universityCampuses?.campus : [{ name: "", image: "", campus_images_alt: "" }])
        setServices(data?.services?.services?.length ? data?.services?.services : [{ title: "", content: "", image: null, icon: null, icons_alt: "", images_alt: "" }])
        setFaqs(data?.faq?.faqs?.length ? data?.faq?.faqs : [{ question: "", answer: "", position: "" }]);
        setOnlines(data?.admissionProcess?.process?.length ? data?.admissionProcess?.process : [{ title: "", content: "" }])
    }, [data])

    const toggleApproval = (id) => {
        if (selectedApprovals.includes(id)) {
            setSelectedApprovals(selectedApprovals.filter(a => a !== id));
        } else {
            setSelectedApprovals([...selectedApprovals, id]);
        }
    };


    const togglePartners = (id) => {
        if (selectedPartners.includes(id)) {
            setSelectedPartners(selectedPartners.filter(a => a !== id));
        } else {
            setSelectedPartners([...selectedPartners, id]);
        }
    };

    const [loading, setLoading] = useState(false);

    // FEES STATE
    console.log("campusList", campusList)

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
    console.log(
        "campusList", campusList
    )
    // ✅ ADD UNIVERSITY
    const handleUpdate = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            const main = new Listing();
            const payload = new FormData();
            payload.append("slug", formData.slug);
            payload.append("name", formData.name);
            payload.append("id", formData.Id);
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
            const response = await main.AdminUniversityUpdate(payload);

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
        { id: "campuses", label: "Campuses" },
        { id: "partners", label: "Partners" },
        { id: "services", label: "Services" },
        { id: "online", label: "Admission Process" },
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
            {processing ? (
                <Loader />
            ) : (
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

                            {/* Right: Save Button */}
                            <button
                                type="button"
                                onClick={handleUpdate}
                                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
                            >
                                {loading ? "Updateing..." : "Update "}
                            </button>
                        </div>

                        {/* Center: Tabs */}
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4 md:px-6 lg:px-6 py-4">
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
                                                className="w-140 h-70 object-cover rounded-md border"
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
                                                className="w-140 h-70 object-contain rounded-md border"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                        University Image Alt{" "}
                                        <span className="text-sm text-gray-500">
                                            ({formData.cover_image_alt?.length}/50)
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="cover_image_alt"
                                        value={formData.cover_image_alt}
                                        onChange={(e) => {
                                            if (e.target.value.length <= 50) handleChange(e);
                                        }}
                                        placeholder="Enter cover image alt"
                                        className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                                        University Icon Alt{" "}
                                        <span className="text-sm text-gray-500">
                                            ({formData.icon_alt?.length}/50)
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="icon_alt"
                                        value={formData.icon_alt}
                                        onChange={(e) => {
                                            if (e.target.value.length <= 50) handleChange(e);
                                        }}
                                        placeholder="Enter cover Icon alt"
                                        className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                                        required
                                    />
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

                                <ReactQuillEditor
                                    label="Description"
                                    desc={formData.rankings_description}
                                    handleBioChange={(val) => handleQuillChange("rankings_description", val)}
                                />




                            </>

                        )}

                        {activeTab === "advantages" && (
                            <>
                                {activeTab === "advantages" && (
                                    <>
                                        <AdvantageSectionAdd advantages={advantages} setAdvantages={setAdvantages}
                                            htitle={"Advantages"} handleChange={handleChange} handleQuillChange={handleQuillChange} formData={formData} />
                                    </>
                                )}
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

                                <FactAdd facts={facts} setFacts={setFacts} />

                            </>

                        )}

                        {activeTab === "certificate" && (
                            <>
                                <AddCertificate
                                    formData={formData}
                                    handleChange={handleChange}
                                    handleImageChange={handleImageChange}
                                    preview={preview}
                                    handleQuillChange={handleQuillChange}
                                />
                            </>

                        )}

                        {activeTab === "pattern" && (
                            <AddPattern setPatterns={setPatterns} patterns={patterns} formData={formData} handleChange={handleChange} handleQuillChange={handleQuillChange} />
                        )}
                        {/* Action Buttons */}
                       {activeTab === "financial" && (
                        <FinancialAdd handleQuillChange={handleQuillChange} handleChange={handleChange} fees={fees} setFees={setFees} formData={formData} />
                    )}

                        {activeTab === "campuses" && (
                            <>
                                <AddCampus campusList={campusList} setCampusList={setCampusList} />
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
            )}

        </AdminLayout>
    </>);
}

export default Index;