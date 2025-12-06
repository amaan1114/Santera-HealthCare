export default function Footer(){
    return (
        <footer className="bg-[#064045] text-white py-8 px-4" role="contentinfo">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="flex flex-col items-start gap-4">
                    <img src="/assets/images/Logo%20(1).svg" alt="HealthCare logo" className="h-12 block" />
                    <p className="text-sm max-w-md text-white/95">
                        HealthCare provides modern, compassionate healthcare solutions. We combine experienced professionals with the latest medical technology to deliver reliable care.
                    </p>
                </div>

                <nav aria-label="Quick Links" className="md:col-span-1 flex md:justify-center">
                    <ul className="flex flex-col md:flex-row gap-3 md:gap-6 m-0 p-0">
                        <li><a href="/" className="text-white no-underline font-medium opacity-95 hover:opacity-100 hover:underline transition">Home</a></li>
                        <li><a href="/about" className="text-white no-underline font-medium opacity-95 hover:opacity-100 hover:underline transition">About us</a></li>
                        <li><a href="/services" className="text-white no-underline font-medium opacity-95 hover:opacity-100 hover:underline transition">Services</a></li>
                        <li><a href="/contact" className="text-white no-underline font-medium opacity-95 hover:opacity-100 hover:underline transition">Contact us</a></li>
                    </ul>
                </nav>

                <div className="md:col-span-1 flex items-end md:items-start justify-start md:justify-end">
                    <div className="text-sm text-white/90">© 2025 HealthCare. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}