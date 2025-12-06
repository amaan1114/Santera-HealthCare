export default function Partners(){
    return (
        <div className="container mx-auto px-4 py-10 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center md:justify-start">
                    <img src="assets/images/Intersect.svg" className="w-full max-w-sm md:max-w-md object-contain" alt="Partners" />
                </div>

                <div className="flex flex-col justify-center gap-4 p-2 md:p-6">
                    <img src="assets/images/Partners.svg" className="w-40 md:w-48 object-contain" alt="Partners Tag" />
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Take your startup to <span className="text-[#064045]">the next level</span>
                    </h1>
                    <p className="text-[#707677] text-sm sm:text-base max-w-xl">
                        We provide APIs, remote care solutions and custom integrations for hospitals, clinics and startups.
                    </p>
                </div>
            </div>
        </div>
    )

}