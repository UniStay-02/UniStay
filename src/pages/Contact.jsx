import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const SUBJECT_OPTIONS = [
  { value: "", label: "Select a subject..." },
  { value: "booking", label: "Booking a Hostel" },
  { value: "listing", label: "Listing My Property" },
  { value: "payment", label: "Payment or Refund Issue" },
  { value: "report", label: "Report a Problem" },
  { value: "account", label: "Account Help" },
  { value: "partnership", label: "Partnership / Business Inquiry" },
  { value: "other", label: "Something Else" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    customSubject: "",
    message: "",
  });

  // "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const missingCustomSubject =
      formData.subject === "other" && !formData.customSubject.trim();

    if (!formData.name || !formData.email || !formData.message || missingCustomSubject) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      // TODO: replace with your real endpoint, e.g.
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      await new Promise((resolve) => setTimeout(resolve, 900));

      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", customSubject: "", message: "" });

      // Reset the success banner after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0E1733] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Contact</h1>

          <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto">
            Have a question about finding a hostel or need assistance?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-[#0E1733] mb-6">
            Send us a Message
          </h2>

          {/* Success feedback */}
          {status === "sent" && (
            <div className="mb-6 flex items-start gap-3 bg-green-50 border border-green-200 text-green-700 rounded-lg p-4">
              <CheckCircle2 size={22} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Message sent!</p>
                <p className="text-sm text-green-600">
                  Thanks for reaching out — we'll get back to you shortly.
                </p>
              </div>
            </div>
          )}

          {/* Error feedback */}
          {status === "error" && (
            <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">
              <AlertCircle size={22} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Something went wrong</p>
                <p className="text-sm text-red-600">
                  Please fill in your name, email and message, then try again.
                </p>
              </div>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
            />

            <div>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F98603] text-gray-700"
              >
                {SUBJECT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <p className="mt-1.5 ml-1 text-xs text-gray-400">
                Not sure? Pick the closest match — you can explain more below.
              </p>
            </div>

            {formData.subject === "other" && (
              <input
                type="text"
                name="customSubject"
                placeholder="Briefly describe what this is about"
                value={formData.customSubject}
                onChange={handleChange}
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
              />
            )}

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#F98603] hover:bg-orange-500 disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg flex items-center gap-2 transition"
            >
              <Send size={20} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

        {/* Contact Information */}
        <div>

          <h2 className="text-3xl font-bold text-[#0E1733] mb-8">
            Get in Touch
          </h2>

          <div className="space-y-6">

            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <MapPin className="text-[#F98603]" size={30} />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <Phone className="text-[#F98603]" size={30} />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+254 712 345 678</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <Mail className="text-[#F98603]" size={30} />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">support@unistay.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <Clock className="text-[#F98603]" size={30} />
              <div>
                <h3 className="font-semibold text-lg">Working Hours</h3>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-gray-600">8:00 AM - 5:00 PM</p>
              </div>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
};

export default Contact;