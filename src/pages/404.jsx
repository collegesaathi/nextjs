export default function Custom404() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
            <div className="text-center">
                {/* Big 404 */}
                <h1 className="text-7xl font-bold text-[#D14B4B]">404</h1>

                <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mt-2 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
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

                {/* Decoration */}
                <div className="mt-10">
                    <img
                        src="/images/404-illustration.svg"
                        alt="Not Found"
                        className="w-80 mx-auto opacity-90"
                    />
                </div>
            </div>
        </div>
    );
}
