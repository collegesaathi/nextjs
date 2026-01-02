import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdClose, MdOutlineCall } from "react-icons/md";

const ContactFloatingButton = () => {
    const [open, setOpen] = useState(false);

    const phone = "9183076543";
    const message = encodeURIComponent("Hello!");
    const whatsappLink = `https://wa.me/${phone}?text=${message}`;
    const callLink = `tel:${phone}`;

    return (
        <div className="fixed left-5 bottom-5 z-50 flex flex-col items-end gap-3">

            {/* OPTIONS */}
                <div className="flex flex-col gap-3 mb-2">
                    {/* CALL */}
                    <a
                        href={callLink}
                        className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 w-14 h-14 rounded-full shadow-lg"
                    >
                        <FaPhoneAlt size={20} />
                        {/* <span className="text-sm font-medium">Call Us</span> */}
                    </a>

                    {/* WHATSAPP */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3  w-14 h-14 rounded-full shadow-lg"
                    >
                        <FaWhatsapp size={22} />
                        {/* <span className="text-sm font-medium">WhatsApp</span> */}
                    </a>
                </div>

            {/* MAIN BUTTON
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center bg-[#FF1B1B] hover:bg-[#c91515] text-white w-14 h-14 rounded-full shadow-xl"
            >
                {open ? (
                    <MdClose size={24}/>
                ) : (
                    <MdOutlineCall size={24}/>
                )}
            </button> */}
        </div>
    );
};

export default ContactFloatingButton;
