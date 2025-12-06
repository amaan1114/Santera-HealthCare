export default function Insights(){

    return(
        <>
            <div className="container mx-auto px-4 py-8 space-y-12">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="flex justify-center md:justify-start">
                        <img src="./assets/images/medical-advance.svg" alt="Medical Advance" className="w-full max-w-sm object-contain" />
                    </div>
                    <div className="flex flex-col justify-center gap-3">
                        <h2 className="text-2xl md:text-4xl font-bold">Key Insights on Latest</h2>
                        <h2 className="text-2xl md:text-4xl font-bold text-[#064045]">Medical Advances</h2>
                        <p className="mt-4 text-sm md:text-base text-[#707677]">Discover personalized support, expert guidance, and tools to help you manage stress, improve emotional balance, and build resilience for a healthier, more fulfilling mental and emotional life.</p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="flex flex-col justify-center gap-3 order-2 md:order-1">
                        <h2 className="text-2xl md:text-4xl font-bold">Empowering Your</h2>
                        <h2 className="text-2xl md:text-4xl font-bold text-[#064045]">Mind and Emotional</h2>
                        <p className="mt-4 text-sm md:text-base text-[#707677]">Stay updated with expert analysis, recent research, and clinical updates that guide patients and healthcare professionals in making better decisions.</p>
                        <ul className="mt-4 space-y-2 text-[#707677]">
                            <li className="flex items-center gap-3 text-sm md:text-base"><img src="./assets/images/checklist.svg" alt="check" className="h-5"/> Profesional Counseling</li>
                            <li className="flex items-center gap-3 text-sm md:text-base"><img src="./assets/images/checklist.svg" alt="check" className="h-5"/> Cognitive Behavioral Therapy (CBT)</li>
                            <li className="flex items-center gap-3 text-sm md:text-base"><img src="./assets/images/checklist.svg" alt="check" className="h-5"/> Stress & Wellness Programs</li>
                        </ul>
                    </div>

                    <div className="flex justify-center md:justify-end order-1 md:order-2">
                        <img src="./assets/images/Mind.svg" alt="Mind" className="w-full max-w-sm object-contain" />
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="flex justify-center md:justify-start">
                        <img src="./assets/images/Why-Us.svg" alt="Why Us" className="w-full max-w-sm object-contain" />
                    </div>
                    <div className="flex flex-col justify-center gap-3">
                        <h2 className="text-2xl md:text-4xl font-bold">Why Choose</h2>
                        <h2 className="text-2xl md:text-4xl font-bold text-[#064045]">Our Care</h2>
                        <p className="mt-4 text-sm md:text-base text-[#707677]">Stay updated with expert analysis, recent research, and clinical updates that guide patients and healthcare professionals in making better decisions.</p>
                        <ul className="mt-4 space-y-2 text-[#707677]">
                            <li className="flex items-center gap-3 text-sm md:text-base"><img src="./assets/images/checklist.svg" alt="check" className="h-5"/> Profesional Counseling</li>
                            <li className="flex items-center gap-3 text-sm md:text-base"><img src="./assets/images/checklist.svg" alt="check" className="h-5"/> Cognitive Behavioral Therapy (CBT)</li>
                            <li className="flex items-center gap-3 text-sm md:text-base"><img src="./assets/images/checklist.svg" alt="check" className="h-5"/> Stress & Wellness Programs</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}