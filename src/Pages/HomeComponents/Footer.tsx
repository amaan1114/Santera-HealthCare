export default function Footer(){
    return (
        <footer className="bg-[#064045] text-white py-12 px-4" role="contentinfo">
            <div className="max-w-6xl mx-auto flex items-start justify-between gap-6 flex-wrap">
                <div className="flex flex-col items-start gap-10 min-w-[220px]">
                    <img src="/assets/images/Logo%20(1).svg" alt="HealthCare logo" className="h-14 block" />
                    <p className="text-sm max-w-md text-white/95">
                        HealthCare provides modern, compassionate healthcare solutions. We combine experienced professionals with the latest medical technology to deliver reliable care.
                    </p>
                </div>

                <nav aria-label="Quick Links" className="flex items-center">
                    <ul className="flex gap-6 m-0 p-0">
                        <li><a href="/" className="text-white no-underline font-medium opacity-95 hover:opacity-100 hover:underline transition">Home</a></li>
                        <li><a href="/about" className="text-white no-underline font-medium opacity-95 hover:opacity-100 hover:underline transition">About us</a></li>
                        <li><a href="/services" className="text-white no-underline font-medium opacity-95 hover:opacity-100 hover:underline transition">Services</a></li>
                        <li><a href="/contact" className="text-white no-underline font-medium opacity-95 hover:opacity-100 hover:underline transition">Contact us</a></li>
                    </ul>
                </nav>

                <div className="w-full mt-6 pt-4 border-t border-white/10 text-center text-sm text-white/90">© 2025 HealthCare. All rights reserved.</div>
            </div>
        </footer>
    )
}