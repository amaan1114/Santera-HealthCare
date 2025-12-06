import { useState } from "react"
import axios from "axios"
export default function ContactForm(){
  const[sending,setSending]=useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    setSending(true);

    try {
      const response = await axios.post('http://localhost:3000/sendemail', formData);
      console.log('Email sent successfully:', response.data);
      alert('Your message has been sent successfully!');
      setSending(false);


    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <section className="w-full flex justify-center py-12 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#064045] mb-2">Contact Us</h2>
        <p className="text-sm text-gray-600 mb-6">Have a question or need support? Send us a message and we’ll get back to you shortly.</p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">Name</span>
              <input
                name="name"
                type="text"
                required
                className="mt-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#064045]/30"
                placeholder="Your full name"
                aria-label="Full name"
                value={formData.name}
                onChange={(e) =>setFormData({...formData,name:e.target.value})}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                name="email"
                type="email"
                required
                className="mt-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#064045]/30"
                placeholder="you@example.com"
                aria-label="Email address"
                value={formData.email}
                onChange={(e) =>setFormData({...formData,email:e.target.value})}
              />
            </label>

            <label className="flex flex-col md:col-span-2">
              <span className="text-sm font-medium text-gray-700">Phone (optional)</span>
              <input
                name="phone"
                type="tel"
                className="mt-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#064045]/30"
                placeholder="+1 555 555 5555"
                aria-label="Phone number"
                onChange={(e) =>setFormData({...formData,phone:e.target.value})}
              />
            </label>

            <label className="flex flex-col md:col-span-2">
              <span className="text-sm font-medium text-gray-700">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#064045]/30"
                placeholder="Tell us about your question or issue"
                aria-label="Message"
                value={formData.message}
                onChange={(e) =>setFormData({...formData,message:e.target.value})}
              />
            </label>

          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
           
            <button
              type="submit"
              
              className="inline-flex items-center cursor-pointer justify-center gap-2 rounded-full bg-[#064045] text-white px-5 py-2 text-sm font-medium hover:bg-[#053637]"
              onClick={() => handleSubmit}
              disabled={sending}

            >
              {sending ? "Sending..." : "Send message"}
              
            </button>

            <div className="text-sm text-gray-500">Or call us: <a href="tel:+1234567890" className="text-[#064045] font-medium">+1 234 567 890</a></div>
          </div>
        </form>
      </div>
    </section>
  )
}
