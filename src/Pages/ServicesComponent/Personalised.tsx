
import { motion } from "motion/react"
export default function Personalised(){
    return(
        <>
        <div className="flex flex-col gap-10 justify-center items-center w-screen my-20">
            <div className="w-[90%] text-center flex flex-col gap-6 bg-[#F5F7F8] rounded-2xl py-20">
                <h1 className="text-5xl">Explore our <span className="text-[#064045]">Healthcare Services</span></h1>
                <div className="flex flex-row justify-center w-full gap-10 px-10 py-10">
                    <div className="w-[25%] bg-[#ffff] rounded-2xl p-4">
                        <img src="./assets/images/GeneralConsultation.svg" alt="General Consultation" />
                        <h2 className="text-2xl text-left py-3">General Consultation</h2>
                        <p className="text-left text-[#707677] text-sm">Get expert medical advice for common health issues or routine checkups.</p>

                    </div>
                    <div className="w-[25%] bg-[#ffff] rounded-2xl p-4">
                        <img src="./assets/images/HealthCare.svg" alt="Health Care" />
                        <h2 className="text-2xl text-left py-3">Health Care</h2>
                        <p className="text-left text-[#707677] text-sm">Nursing support, physiotherapy, and medicine delivery services right at your doorstep.</p>

                    </div>
                    <div className="w-[25%] bg-[#ffff] rounded-2xl p-4">
                        <img src="./assets/images/ExternalHC.svg" alt="External Health Care" />
                        <h2 className="text-2xl text-left py-3">Personal Health Assesmentn</h2>
                        <p className="text-left text-[#707677] text-sm">Comprehensive body checkups, leb tests, and continuous health monitoring.</p>

                    </div>
                </div>

            </div>

           
           
        </div>
       
        </>
    )
}