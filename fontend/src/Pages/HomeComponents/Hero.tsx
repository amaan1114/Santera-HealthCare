import { useState } from "react"
import { motion } from "motion/react"
export default function Hero(){
    const [open, setOpen] = useState(false)
    return(
        <>
        {/* Navbar and heroSection */}
        <div className="bg-[#064045] overflow-visible">
            <div className="container mx-auto px-4 py-6">
                {/* NavBar */}
                <nav className="flex items-center justify-between">
                    <img src="./assets/images/Logo (1).svg" alt="logo" className="h-10" />

                    <div className="hidden md:flex items-center gap-8 text-white text-lg"> 
                        <motion.a 
                        whileHover={{scale:1.05}}
                        href="/" className="hover:underline">Home</motion.a>
                        <motion.a href="/About" className="text-zinc-200 hover:underline"
                        whileHover={{scale:1.05}}>About</motion.a>
                        <motion.a href="/Services" className="text-zinc-200 hover:underline"
                        whileHover={{scale:1.05}}>Services</motion.a>                    
                    </div>

                    <motion.button 
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                    className="hidden md:inline-flex bg-white gap-3 items-center cursor-pointer px-4 py-2 rounded-full text-[#064045]" onClick={() => window.location.href='/contact'}>
                        <p className="text-sm md:text-base">Contact Us</p>
                        <img src="./assets/images/Frame 32.svg" alt="" className="h-4" />
                    </motion.button>

                    {/* Mobile hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(prev => !prev)}
                            aria-expanded={open}
                            aria-label="Toggle navigation"
                            className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white z-50"
                        >
                            {!open ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile menu (stacked) */}
                {open && (
                    <div className="md:hidden mt-4 z-50">
                        <ul className="flex flex-col gap-3 text-white">
                            <li><a href="/" className="block px-3 py-2 rounded hover:bg-white/10">Home</a></li>
                            <li><a href="/About" className="block px-3 py-2 rounded hover:bg-white/10">About</a></li>
                            <li><a href="/Services" className="block px-3 py-2 rounded hover:bg-white/10">Services</a></li>
                            <li>
                                <a href="/contact" className="block mt-2 bg-white text-[#064045] px-4 py-2 rounded-full w-max">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                )}

                {/* HeroSection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-8">
                        <div className="mt-6 space-y-4">
                            <img src="./assets/images/No1.svg" className="w-24 md:w-36"  alt="" />
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold">Modern <span className="Herotext text-yellow-300">Healthcare Solutions</span> That Puts You First.</h1>
                            <p className="text-white max-w-2xl">From routine checkups to specialized treatments, we combine modern technology with a human touch to keep your loved ones healthy.</p>
                            <motion.button 
                                whileHover={{scale:1.05}}
                                whileTap={{scale:0.95}}
                                onClick={()=>window.location.href="/Contact"}
                                className="bg-white gap-3 items-center cursor-pointer flex flex-row px-4 py-2 rounded-full w-max text-[#064045]">
                                    <p className="text-sm md:text-base">Book appointment</p>
                                    <img src="./assets/images/Frame 32.svg" alt="" className="h-4" />
                            </motion.button >
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <img src="./assets/images/Hero.svg"  className="w-full max-w-md object-contain"  alt="" />
                        </div>
                </div>
                 <h2 className="text-center text-white text-base sm:text-xl mt-8 mb-4">Trusted By All Over The World</h2>
                 <div className="flex justify-center">
                    <img src="./assets/images/client-logos.svg" className="w-full max-w-3xl" alt="" />
                 </div>
            </div>
        </div>
            
        </>
    )
}