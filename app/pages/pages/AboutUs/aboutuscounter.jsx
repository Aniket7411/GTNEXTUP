"use client";
import OdometerCounter from "../../components/OdometerCounter/OdometerCounter";

const AboutusCounter = () => {
    return (
        <div className="relative overflow-hidden bg-black py-12 flex justify-center items-center">
            <div
                style={{ outline: "2px solid #fff" }}
                className="flex flex-wrap justify-center md:justify-between lg:justify-around gap-6 md:gap-8 bg-[#555353] rounded-2xl mx-auto px-4 py-4 w-full max-w-6xl"
            >
                {/* Card 1 */}
                <div className="text-center p-4 flex-1 min-w-[150px] sm:min-w-[200px]">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 text-white">
                        <OdometerCounter value={100} />
                        <span className="text-[#FDEF9E]">+</span>
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base">Company</p>
                </div>

                {/* Card 2 */}
                <div className="text-center p-4 flex-1 min-w-[150px] sm:min-w-[200px]">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 text-white">
                        <OdometerCounter value={7} />

                        <span className="text-[#FDEF9E]">+</span>
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base">Years of Experience</p>
                </div>

                {/* Card 3 */}
                <div className="text-center p-4 flex-1 min-w-[150px] sm:min-w-[200px]">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 text-white">
                        <OdometerCounter value={900} />
                        <span className="text-[#FDEF9E]">+</span>
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base">Digital Hours</p>
                </div>

                {/* Card 4 */}
                <div className="text-center p-4 flex-1 min-w-[150px] sm:min-w-[200px]">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 text-white">
                        <OdometerCounter value={100} />
                        <span className="text-[#FDEF9E]">M+</span>
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base">In Tracked Revenue</p>
                </div>
            </div>
        </div>
    );
};

export default AboutusCounter;
