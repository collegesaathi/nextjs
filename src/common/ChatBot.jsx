import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline, IoSend } from "react-icons/io5";

const ChatBot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hello 👋 How can we help you today?" }
    ]);
    const [input, setInput] = useState("");

    const botReply = (userText) => {
        const text = userText.toLowerCase();
        if (text.includes("course")) return "You can explore all courses from our Courses section.";
        if (text.includes("contact")) return "You can contact us via WhatsApp or phone support.";
        return "Thanks for reaching out. Our team will assist you shortly.";
    };

    const sendMessage = () => {
        if (!input.trim()) return;

        setMessages((prev) => [
            ...prev,
            { from: "user", text: input },
            { from: "bot", text: botReply(input) }
        ]);
        setInput("");
    };

    return (
        <>
            {/* CHAT WINDOW */}
            {open && (
                <div className="fixed bottom-24 right-5 w-[400px] h-[400px] bg-white rounded-xl shadow-2xl z-50 flex flex-col border">

                    {/* HEADER */}
                    <div className="flex justify-between items-center px-4 py-3 border-b">
                        <div>
                            <p className="font-semibold text-gray-800">Live Support</p>
                            <p className="text-xs text-green-500">● Online</p>
                        </div>
                        <button onClick={() => setOpen(false)}>
                            <FaTimes className="text-gray-500 hover:text-gray-800" />
                        </button>
                    </div>

                    {/* MESSAGES */}
                    <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`max-w-[75%] px-4 py-2 text-sm rounded-lg ${
                                    msg.from === "bot"
                                        ? "bg-white text-gray-700 border self-start"
                                        : "bg-[#FF1B1B] text-white self-end ml-auto"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* INPUT */}
                    <div className="p-3 border-t flex items-center gap-2 bg-white">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Type your message..."
                            className="flex-1 text-sm px-3 py-2 border rounded-lg outline-none focus:border-[#FF1B1B]"
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-[#FF1B1B] hover:bg-[#d91616] text-white p-2 rounded-lg"
                        >
                            <IoSend size={18} />
                        </button>
                    </div>
                </div>
            )}

            {/* FLOATING BUTTON */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-[#FF1B1B] hover:bg-[#d91616] text-white shadow-xl flex items-center justify-center z-50"
            >
                <IoChatbubbleEllipsesOutline size={26} />
            </button>
        </>
    );
};

export default ChatBot;
