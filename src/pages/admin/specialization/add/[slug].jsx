import Listing from "@/pages/api/Listing";

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
     <h2>Hello</h2>
    </>);
}

export default Index;