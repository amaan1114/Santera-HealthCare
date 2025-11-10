import { motion } from "motion/react"
export default function Hero(){
    return(
        <>
        {/* Navbar and heroSection */}
        <div className="p-5">
            <div className="w-80% h-11/12 rounded-2xl flex flex-col" style={{backgroundColor:"#064045"}}>
                {/* NavBar */}
                <nav className="m-5 p-4 flex flex-row  justify-around gap-30 content-center items-center">
                    <img src="./assets/images/Logo (1).svg" alt="logo" />
                    <div className="flex flex-row gap-15  text-2xl text-white"> 
                        <motion.a 
                        whileHover={{scale:1.1}}
                        href="/">Home</motion.a>
                        <motion.a href="/About" className="text-zinc-400"
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
                <div className="flex flex-row justify-around" style={{width:"100sw"}}>
                        <div className="flex mt-10 gap-10  flex-col w-4/12">
                            <img src="./assets/images/No1.svg" className="w-[15vw]"  alt="" />
                            <h1 className="text-5xl  text-white">Modern <span className="Herotext text-yellow-300">Healthcare Solutions</span> That Puts You First.</h1>
                            <p className="text-white">From routine checkups to specialized treatments, we combine modern technology with a human touch to keep your loved ones healthy.</p>
                            <motion.button 
                                whileHover={{scale:1.1}}
                                whileTap={{scale:0.9}}
                                className="bg-white gap-4  items-center cursor-pointer content-center flex flex-row p-2 rounded-4xl justify-center" style={{color:"#064045",width:'15vw'}}>
                                    <p>Book appointment</p>
                                    <img src="./assets/images/Frame 32.svg" alt="" />
                            </motion.button>
                        </div>
                        <img src="./assets/images/Hero.svg"  className="w-[30vw]"  alt="" />
                </div>
                 <h1 className="text-center text-white text-xl mt-10 mb-5">Trusted By All Over The World</h1>
                 <img src="./assets/images/client-logos.svg" className="self-center mb-10" style={{width:"90%"}} alt="" />
            </div>
        </div>
            
        </>
    )
}