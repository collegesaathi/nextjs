import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Listing from "@/pages/api/Listing";
import { toast } from "react-hot-toast";

function EnquiryBox() {
  return (
    <div className="max-w-[1230px] px-2 md:px-6 py-6   ">
    <div className="lg:w-full mt-8 rounded-[18px] min-h-[400px] bg-gradient-to-br from-[#fef0f0] to-[#fbdbdc]  grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

      {/* Left Image */}
      <div className="hidden md:flex justify-center">
        <img
          src="/images/formimage.png"
          alt="course form"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Form Box */}
      <div className="w-full ">
            <FormBox />
      </div>
  
    </div>
    </div>
  );
}

/* ------------------ FORM ------------------ */
function FormBox() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone_number: "",
    email: "",
    content: "",
    otp: "",
    course_id: "",
    city: "jaipur",
    state: "rajasthan",
    page_name: router?.pathname
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const main = new Listing();
      const response = await main.ContactAdd({
        ...form,
        otp: form?.otp || "1234"
      });

      if (response?.data?.status) toast.success(response.data.message);
      else toast.error(response.data.message);

      setForm({
        name: "",
        phone_number: "",
        email: "",
        otp: "",
        page_name: router?.pathname
      });

    } catch (error) {
      console.error("API error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="w-full p-4 flex justify-center md:justify-start">
      <div className="w-full max-w-sm">

        {/* Logos */}
        <div className="flex gap-2 justify-center border-b border-gray-300 pb-2 mb-3">
          <Image src="/images/university/course/4.png" alt="course logo" width={90} height={40} className="object-contain" />
          <Image src="/images/university/course/5.png" alt="course logo" width={90} height={40} className="object-contain" />
          <Image src="/images/university/course/6.png" alt="course logo" width={90} height={40} className="object-contain" />
        </div>

        <h3 className="font-semibold mb-3 text-lg">Enquire Now</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <Input label="Your Name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} />

          <Input label="Email" name="email" placeholder="example@gmail.com" value={form.email} onChange={handleChange} />

          <Input
            label="Phone"
            name="phone_number"
            placeholder="+91 0000000000"
            value={form.phone_number}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 10)
                handleChange({ target: { name: "phone_number", value } });
            }}
          />

          <Input label="OTP" name="otp" placeholder="xxxx" value={form.otp} onChange={handleChange} />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-red-600 text-white text-sm w-full py-2 rounded-full hover:bg-red-700 transition"
        >
          {loading ? "Loading.." : "Submit"}
        </button>
      </div>
    </div>
  );
}

/* ------------------ INPUT COMPONENT ------------------ */
function Input({ label, placeholder, name, value, onChange }) {
  return (
    <div>
      <label className="text-[10px] text-gray-600">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        className="w-full h-[32px] bg-white border border-gray-400 rounded-full px-3 text-[12px]"
        placeholder={placeholder}
      />
    </div>
  );
}

export default EnquiryBox;
