import { motion } from "motion/react"
export default function Team(){
    return(
        <div className="bg-[#F5F7F8] shadow-inner flex flex-col m-4 md:m-8 mt-8 md:mt-12 justify-center items-center rounded-3xl p-6 md:p-10 gap-6">
            <img src="/assets/images/TeamBadge.svg" alt="Team Badge" className="h-12 md:h-16" />

            <h2 className="text-2xl md:text-4xl lg:text-5xl text-center mx-4 md:mx-20 font-semibold">
                Committed to your <span className="text-[#064045]"> Health & Long </span>Term-Care
            </h2>

            <p className="text-sm md:text-lg text-center mx-4 md:mx-32 max-w-2xl">
                From diagnosis to recovery and follow-up care, we are committed to standing by you through every stage of your health journey.
            </p>

            <div className="w-full max-w-4xl mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-center">
                <img src="/assets/images/Image1.svg" className="w-full object-contain"  alt="Team Member 1" />
                <img src="/assets/images/Image2.svg" className="w-full object-contain" alt="Team Member 2" />
                <img src="/assets/images/Image3.svg" className="w-full object-contain" alt="Team Member 3" />
                <img src="/assets/images/Image4.svg" className="w-full object-contain" alt="Team Member 4" />
            </div>

            <motion.button 
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                className="bg-[#064045] gap-3 mb-6 justify-center items-center cursor-pointer flex flex-row px-4 py-2 rounded-full text-white" onClick={() => window.location.href='/About'}>
                    <p className="text-sm md:text-base">Discover More</p>
                    <img src="./assets/images/WhiteArrow.svg" alt="" className="h-4" />
            </motion.button>

        </div>
    )
}