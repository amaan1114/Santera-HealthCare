export default function Services(){
    return(
        <>
        <div className="w-full flex justify-center my-12 md:my-20 flex-col gap-8 items-center overflow-hidden">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
                <div className="flex justify-center md:justify-start">
                    <img src="/assets/images/Lefelong.svg" className="w-48 md:w-64 object-contain" alt="lifeLong" />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-2xl md:text-4xl font-semibold mt-4 md:mt-0">Care Plans for <span className="text-[#064045]">Lifelong Wellness</span></h2>
                    <p className="mt-4 text-sm md:text-base text-[#737373] max-w-xl">We understand the importance of preventive care in maintaining optimal health. Our dedicated team of healthcare professionals offers comprehensive preventive care services to help you identify potential risks early and manage long-term wellness.</p>
                </div>
            </div>

             <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
                <div className="flex flex-col order-2 md:order-1">
                    <h2 className="text-2xl md:text-4xl font-semibold mt-4 md:mt-0">Personalized Support for <span className="text-[#064045]">Body & Mind</span></h2>
                    <p className="mt-4 text-sm md:text-base text-[#737373] max-w-xl">Our multidisciplinary approach ensures personalized care plans that address both physical and mental health needs, promoting holistic well-being.</p>
                </div>
                    <div className="flex justify-center md:justify-end order-1 md:order-2">
                        <img src="/assets/images/BodyMind.svg" className="w-48 md:w-64 object-contain" alt="Body Mind" />
                    </div>
            </div>
        </div>
        </>
    )
}