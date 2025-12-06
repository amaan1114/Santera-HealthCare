import { motion } from "motion/react"
export default function Personalised(){
    return(
        <>
        <div className="flex flex-col gap-10 justify-center items-center w-full my-12 px-4">
            <div className="w-full max-w-6xl text-center flex flex-col gap-6 bg-[#F5F7F8] rounded-2xl py-12 px-6">
                <h2 className="text-2xl md:text-4xl">Explore our <span className="text-[#064045]">Healthcare Services</span></h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <img src="./assets/images/GeneralConsultation.svg" alt="General Consultation" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">General Consultation</h3>
                        <p className="text-[#707677] text-sm">Get expert medical advice for common health issues or routine checkups.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <img src="./assets/images/HealthCare.svg" alt="Health Care" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Health Care</h3>
                        <p className="text-[#707677] text-sm">Nursing support, physiotherapy, and medicine delivery services right at your doorstep.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <img src="./assets/images/ExternalHC.svg" alt="External Health Care" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Personal Health Assessment</h3>
                        <p className="text-[#707677] text-sm">Comprehensive body checkups, lab tests, and continuous health monitoring.</p>
                    </div>
                </div>

            </div>

        </div>
       
        </>
    )
}