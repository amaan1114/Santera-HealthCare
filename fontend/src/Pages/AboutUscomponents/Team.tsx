export default function Team(){
    return(
        <div className="w-full flex justify-center flex-col items-center my-12 px-4">
            <div className="w-full max-w-5xl flex flex-col justify-center items-center">
                 <h2 className="text-2xl md:text-4xl font-semibold">Meet our <span className="text-[#064045]">expert team</span></h2>
                <p className="text-center text-base md:text-lg mt-4 text-[#737373] max-w-2xl">
                    Our team consists of dedicated healthcare professionals, medical writers, and technology experts who work tirelessly to create and curate trustworthy content.
                </p>
            </div>
            <div className="w-full max-w-6xl mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* card1 */}

                    <div className ="rounded overflow-hidden shadow-lg">
                        <img className="w-full object-contain" src="/assets/images/Ayesha.svg" alt="Ayesha"/>
                        <div className="px-6 py-4">
                            <p className="font-bold text-lg mb-2 text-center">Dr. Ayesha Kabir</p>

                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Endocrinology</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dermatology</span>

                        </div>
                    </div>

                {/* card2 */}

                <div className ="rounded overflow-hidden shadow-lg">
                        <img className="w-full object-contain" src="/assets/images/John.svg" alt="John"/>
                        <div className="px-6 py-4">
                            <p className="font-bold text-lg mb-2 text-center">Dr. John Doe</p>

                        </div>
                        <div className="px-6 pt-4 pb-2 items-center w-full content-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pediatrics</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Gynecologic</span>

                        </div>
                </div>
                
                {/* card3 */}


                <div className ="rounded overflow-hidden shadow-lg">
                        <img className="w-full object-contain" src="/assets/images/Jane.svg" alt="Jane"/>
                        <div className="px-6 py-4">
                            <p className="font-bold text-lg mb-2 text-center">Dr. Jane S.</p>

                        </div>
                        <div className="px-6 pt-4 pb-2 items-center w-full content-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Internal Medicine</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pediatrics</span>

                        </div>
                </div>

                {/* card4 */}

                 <div className ="rounded overflow-hidden shadow-lg">
                        <img className="w-full object-contain" src="/assets/images/Jimmy.svg" alt="Jimmy"/>
                        <div className="px-6 py-4">
                            <p className="font-bold text-lg mb-2 text-center">Dr. Jimmy Smith</p>

                        </div>
                        <div className="px-6 pt-4 pb-2 items-center w-full content-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Gynecologic</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Internal Medicine</span>

                        </div>
                </div>
            </div>


        </div>
    )

}