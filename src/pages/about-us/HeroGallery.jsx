import Image from "next/image";

export default function HeroGallery() {
    const images = [
        "/about/team.png",
        "/about/team.png",
        "/about/team.png",
        "/about/team.png",
        "/about/team.png",
        "/about/team.png",
        "/about/team.png",
        "/about/team.png",
        "/about/team.png",
        "/about/team.png",
        "/about/team.png",
        "/about/team.png",
        "/about/team.png",
    ];

    return (
        <div className="w-full bg-white pb-20">

            {/* IMAGE GRID */}
            <div className="relative max-w-7xl mx-auto px-4 pt-10 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">

                {images?.map((img, i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-xl shadow-md bg-white
              animate-dropIn opacity-0 hover:scale-105 transition-all duration-500"
                        style={{
                            animationDelay: `${i * 0.5}s`,
                            animationFillMode: "forwards",
                        }}
                    >
                        <Image
                            src={img}
                            alt={`Image ${i}`}
                            width={400}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* HERO TEXT */}
            <div className="text-center max-w-4xl mx-auto px-4 mt-16">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                    Your Trusted Companion for
                    <br /> Online University & Career Decisions.
                </h1>

                <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    At Collegesathi, we're not just an education platform — we're your companion
                    in making life-changing decisions. We provide the clarity and confidence you
                    need to choose the right path, so you never feel lost or alone.
                </p>
            </div>
        </div>
    );
}
