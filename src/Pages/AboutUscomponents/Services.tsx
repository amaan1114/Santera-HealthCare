export default function Services(){
    return(
        <>
        <div className="w-full flex justify-center my-20 flex-col gap-10 content-center items-center overflow-hidden">
            <div className="flex w-[90%] flex-row gap-10 justify-around">
                <img src="/assets/images/Lefelong.svg" className="self-start" alt="lifeLong" />
                <div className="flex flex-col">
                    <h1 className="text-6xl mt-20 mb-10  mx-20 ">Care Plans for <span className="text-[#064045]">Lifelong Wellness</span></h1>
                    <p className="mx-20 text-[#737373]">we understand the importance of preventive care in maintaining optimal health. Our dedicated team of healthcare professionals offers comprehensive preventive care services to help you identify potential.</p>
                </div>
            </div>

             <div className="flex w-[90%] flex-row gap-10 justify-around">
            
                <div className="flex flex-col">
                    <h1 className="text-6xl mt-20 mb-10  mx-20 ">Care Plans for <span className="text-[#064045]">Lifelong Wellness</span></h1>
                    <p className="mx-20 text-[#737373]">we understand the importance of preventive care in maintaining optimal health. Our dedicated team of healthcare professionals offers comprehensive preventive care services to help you identify potential.</p>
                </div>
                    <img src="/assets/images/BodyMind.svg" className="self-start" alt="lifeLong" />
            </div>
        </div>
        </>
    )
}