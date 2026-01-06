import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

function FaqAdd({faqs ,  setFaqs}) {

      const addFaq = () => {
        // Only add if no empty one exists
        const hasEmpty = faqs.some(f => !f.question && !f.answer);
        if (!hasEmpty) {
            setFaqs([...faqs, { question: "", answer: "", position: "" }]);
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

    console.log("faqs",faqs)
    return (
        <>
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-[#CC2828]">
                    FAQ Section
                </h2>
            </div>
            {faqs?.map((faq, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 items-center">
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

                    {/* <div>
                        <label className="block text-[#CC2828] font-medium mb-2">Position</label>
                        <input
                            type="number"
                            disabled={faq?._id}
                            value={faq.position}
                            onChange={(e) => handleFaqChange(index, 'position', e.target.value)}
                            placeholder="Enter Position"
                            className="w-full bg-[#F4F6F8] text-[#727272] border border-[#F4F6F8] rounded-[10px] px-4 py-2 focus:outline-none"
                        />
                    </div> */}

                    {/* ANSWER */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-[#CC2828] font-medium">Answer</label>

                            <div className="flex items-center gap-2">

                                <button
                                type="button"
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
      <div className="flex justify-end items-center mb-5">
            

                <button
                type="button"
                    onClick={addFaq}

                    className="border border-[#CC2828] bg-[#CC2828] hover:bg-red-700 text-white px-6 py-2 rounded-[10px] text-base transition"
                >
                    + Add More FAQ
                </button>
            </div>
        </>
    );
}

export default FaqAdd;