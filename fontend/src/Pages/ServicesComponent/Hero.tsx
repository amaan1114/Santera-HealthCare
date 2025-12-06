import { useState } from "react"
import { motion } from "motion/react"
export default function Hero(){
    const [open, setOpen] = useState(false)
    return(
        <div className="bg-[#064045] overflow-visible">
            <div className="container mx-auto px-4 py-10">
                <nav className="flex items-center justify-between">
                    <img src="./assets/images/Logo (1).svg" alt="logo" className="h-10" />

                    <div className="hidden md:flex items-center gap-8 text-zinc-200 text-lg"> 
                        <motion.a 
                        whileHover={{scale:1.05}}
                        className="hover:underline"
                        href="/">Home</motion.a>
                        <motion.a href="/About" className="text-zinc-200 hover:underline"
                        whileHover={{scale:1.05}}>About</motion.a>
                        <motion.a href="/Services" className="text-white hover:underline"
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

                {/* Centered hero content */}
                <div className="flex flex-col items-center justify-center gap-4 mt-8 text-center py-20">
                    <img src="./assets/images/Services.svg" className="w-28 md:w-32 object-contain" alt="Services" />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold">Comprehensive <span className="Herotext text-yellow-300">HealthCare</span> Services</h1>
                    <p className="text-white max-w-2xl">From routine checkups to specialized treatments, we combine modern technology with a human touch to keep your loved ones healthy.</p>
                </div>
            </div>
        </div>
    )

}