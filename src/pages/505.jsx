export default function Custom505() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
            <div className="text-center">

                {/* Big Error Code */}
                <h1 className="text-7xl font-bold text-[#D14B4B]">505</h1>

                <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                    Internal Server Error
                </h2>

                <p className="text-gray-500 mt-2 max-w-md mx-auto">
                    Something went wrong on the server.  
                    Our team is working to fix it. Please try again later.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex items-center justify-center gap-4">
                    <a
                        href="/"
                        className="px-6 py-3 bg-[#D14B4B] text-white rounded-lg shadow-md hover:bg-[#b63f3f] transition"
                    >
                        Go to Home
                    </a>

                    <a
                        href="/contact"
                        className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 shadow hover:bg-gray-50 transition"
                    >
                        Contact Support
                    </a>
                </div>

                {/* Illustration (optional) */}
                <div className="mt-10">
                    <img
                        src="/images/server-error.svg"
                        alt="Server Error"
                        className="w-72 mx-auto opacity-90"
                    />
                </div>
            </div>
        </div>
    );
}
