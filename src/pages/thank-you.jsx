import Head from "next/head";
import Link from "next/link";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You | CollegeSathi</title>
        <meta
          name="description"
          content="Thank you for submitting your details. Our team will contact you shortly."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <section className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
        <div className="max-w-[520px] w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Text */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            Thank You!
          </h1>

          <p className="text-gray-600 mb-6">
            Your details have been submitted successfully.  
            Our expert counselor will get in touch with you shortly.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-6 py-3 rounded-lg bg-[#EC1E24] text-white font-medium hover:opacity-90 transition"
            >
              Go to Home
            </Link>

            <Link
              href="/courses"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
