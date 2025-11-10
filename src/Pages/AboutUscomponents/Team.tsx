
export default function Team(){
    return(
        <>
        <div className="flex w-screen justify-center flex-col content-center items-center my-30">
            <div className="flex flex-col w-[80%] justify-center content-center items-center">
                 <h1 className="text-5xl ">Meet our <span className="text-[#064045]">expert team</span></h1>
                <p className="w-30%  text-center text-xl mt-5 text-[#737373]">
                    Our team consists of dedicated healthcare professionals, medical writers, and technology experts who work tirelessly to create and curate trustworthy  content.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

                {/* card1 */}

                    <div className ="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="/assets/images/Ayesha.svg" alt="Sunset in the mountains."/>
                        <div className="px-6 py-4">
                            <p className="font-bold text-xl mb-2 text-center">Dr. Ayesha Kabir</p>

                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Endocrinology</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dermatology</span>

                        </div>
                    </div>

                {/* card2 */}

                <div className ="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="/assets/images/John.svg" alt="Sunset in the mountains."/>
                        <div className="px-6 py-4">
                            <p className="font-bold text-xl mb-2 text-center">Dr. John Doe</p>

                        </div>
                        <div className="px-6 pt-4 pb-2 items-center w-full content-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pediatrics</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Gynecologic</span>

                        </div>
                </div>
                
                {/* card3 */}


                <div className ="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="/assets/images/Jane.svg" alt="Sunset in the mountains."/>
                        <div className="px-6 py-4">
                            <p className="font-bold text-xl mb-2 text-center">Dr. Jane S.</p>

                        </div>
                        <div className="px-6 pt-4 pb-2 items-center w-full content-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Internal Medicine</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pediatrics</span>

                        </div>
                </div>

                {/* card4 */}

                 <div className ="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="/assets/images/Jimmy.svg" alt="Sunset in the mountains."/>
                        <div className="px-6 py-4">
                            <p className="font-bold text-xl mb-2 text-center">Dr. Jimmy Smith</p>

                        </div>
                        <div className="px-6 pt-4 pb-2 items-center w-full content-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Gynecologic</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Internal Medicine</span>

                        </div>
                </div>
                

                
            
            
            
            
               
                
            </div>
           

        </div>
        </> 
    )

}