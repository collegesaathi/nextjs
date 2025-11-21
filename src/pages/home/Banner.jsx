import Navbar from "../components/Navbar";
import Group from "../asserts/home/Group.png"
export default function Banner() {
    return (
        <div className="relative">
            <section className="w-full md:h-[400px] lg:h-[426px]">
                <img
                    src={Group?.src}
                    alt="Team Banner"
                    className="w-full h-full object-cover"
                />
            </section>
        </div>
    );
}
