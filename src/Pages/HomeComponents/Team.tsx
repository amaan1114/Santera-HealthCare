import { motion } from "motion/react"
export default function Team(){
    return(
        <div className=" bg-[#F5F7F8] shadow-2xl flex flex-col m-5 mt-30 justify-center items-center rounded-3xl p-10 gap-10">
            <img src="/assets/images/TeamBadge.svg" alt="Team Badge" />

            <h1 className="text-8xl text-center mx-[10%]">
                Committed to your <span className="text-[#064045]"> Health & Long </span>Term-Care
            </h1>

            <p className="text-xl text-center mx-[25%]">
                From diagnosis to recovery and follow-up care, we are committed to standing by you through every stage of your health journey.
            </p>

            <div className="w-[90%] mt-20 mb-10 flex flex-row justify-center items-center gap-10">
                <img src="/assets/images/Image1.svg" className="w-[25%]"  alt="Team Member 1" />
                <img src="/assets/images/Image2.svg" className="w-[25%]" alt="Team Member 2" />
                <img src="/assets/images/Image3.svg" className="w-[25%]" alt="Team Member 3" />
                <img src="/assets/images/Image4.svg" className="w-[25%]" alt="Team Member 4" />
            </div>

            <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                className="bg-[#064045] gap-3 mb-10 justify-center items-center cursor-pointer content-center flex flex-row p-2 rounded-4xl w-[13vw] text-white">
                    <p>Discover More</p>
                    <img src="./assets/images/WhiteArrow.svg" alt="" />
            </motion.button>

        </div>
    )
}