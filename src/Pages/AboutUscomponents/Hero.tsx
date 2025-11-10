import { div } from "motion/react-client";
import { motion } from "motion/react"
export default function Hero(){
    return(
        <div className="p-5 overflow-hidden">
            <div className="w-80% h-11/12 rounded-2xl flex flex-col" style={{backgroundColor:"#064045"}}>
                {/* NavBar */}
                <nav className="m-5 p-4 flex flex-row  justify-around gap-30 content-center items-center">
                    <img src="./assets/images/Logo (1).svg" alt="logo" />
                    <div className="flex flex-row gap-15  text-2xl text-white"> 
                        <motion.a 
                        whileHover={{scale:1.1}}
                        className="text-zinc-400"
                        href="/">Home</motion.a>
                        <motion.a href="/About"
                        whileHover={{scale:1.1}}>About</motion.a>
                        <motion.a href="/Services" className="text-zinc-400"
                        whileHover={{scale:1.1}}>Services</motion.a>                    
                    </div>

                    <motion.button 
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    className="bg-white gap-3 justify-center items-center cursor-pointer content-center flex flex-row p-2 rounded-4xl  self-end" style={{color:"#064045"}}>
                        <p>Contact Us</p>
                        <img src="./assets/images/Frame 32.svg" alt="" />
                    </motion.button>
                </nav>

                {/* HeroSection */}
                <div className="flex flex-col justify-center align-center items-center overflow-hidden" style={{width:"100vw",height:'50vh'}}>
                    <img src="./assets/images/AboutUs.svg" className="w-[8%] mb-10" alt="" />
                    <h1 className="text-5xl  text-white mb-5">Complete Care, For <span className="Herotext text-yellow-300">Every Patient</span></h1>
                    <p className="text-white mb-30">From preventive checkups to critical treatments, we provide complete healthcare solutions.</p>
                            
                        
                       
                </div>
  
            </div>
        </div>
    )

}