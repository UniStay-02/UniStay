import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-[#0E1733] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Contact <span className="text-[#F98603]">UniStay</span>
          </h1>

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

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#F98603] hover:bg-orange-500 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition"
            >
              <Send size={20} />
              Send Message
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
                <p className="text-gray-600">
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <Phone className="text-[#F98603]" size={30} />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">
                  +254 712 345 678
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <Mail className="text-[#F98603]" size={30} />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">
                  support@unistay.com
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <Clock className="text-[#F98603]" size={30} />
              <div>
                <h3 className="font-semibold text-lg">
                  Working Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Friday
                </p>
                <p className="text-gray-600">
                  8:00 AM - 5:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
};

export default Contact;