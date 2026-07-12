import { useState } from "react";
import { CreditCard, Smartphone, Landmark, ShieldCheck } from "lucide-react";

const NAVY = "#0E1733";
const ORANGE = "#F98603";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("mpesa");

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">

        <h1
          className="text-4xl font-bold mb-8"
          style={{ color: NAVY }}
        >
          Checkout
        </h1>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

          {/* Left */}

          <div className="space-y-8">

            <div className="bg-white rounded-2xl shadow p-8">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: NAVY }}
              >
                Tenant Information
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-lg px-4 py-3 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border rounded-lg px-4 py-3 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border rounded-lg px-4 py-3 outline-none"
                />

                <input
                  type="text"
                  placeholder="University"
                  className="border rounded-lg px-4 py-3 outline-none"
                />

              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: NAVY }}
              >
                Payment Method
              </h2>

              <div className="space-y-4">

                <label className="border rounded-xl p-5 flex items-center gap-4 cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "mpesa"}
                    onChange={() => setPaymentMethod("mpesa")}
                  />

                  <Smartphone color={ORANGE} />

                  <div>
                    <h3 className="font-semibold">
                      M-Pesa
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Pay securely using Safaricom M-Pesa
                    </p>
                  </div>
                </label>

                <label className="border rounded-xl p-5 flex items-center gap-4 cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                  />

                  <CreditCard color={ORANGE} />

                  <div>
                    <h3 className="font-semibold">
                      Debit / Credit Card
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Visa or Mastercard
                    </p>
                  </div>
                </label>

                <label className="border rounded-xl p-5 flex items-center gap-4 cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                  />

                  <Landmark color={ORANGE} />

                  <div>
                    <h3 className="font-semibold">
                      Bank Transfer
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Direct bank payment
                    </p>
                  </div>
                </label>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">

              <h2
                className="text-2xl font-bold"
                style={{ color: NAVY }}
              >
                Booking Summary
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">
                  <span>Hostel</span>
                  <span className="font-semibold">
                    Green View Hostel
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Room Type</span>
                  <span>Bedsitter</span>
                </div>

                <div className="flex justify-between">
                  <span>Monthly Rent</span>
                  <span>KES 6,500</span>
                </div>

                <div className="flex justify-between">
                  <span>Booking Fee</span>
                  <span>KES 1,000</span>
                </div>

              </div>

              <hr className="my-6" />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span
                  style={{ color: ORANGE }}
                >
                  KES 7,500
                </span>
              </div>

              <button
                className="w-full mt-8 py-4 rounded-xl text-white font-semibold"
                style={{
                  backgroundColor: NAVY,
                }}
              >
                Confirm Booking
              </button>

              <div className="flex items-center justify-center gap-2 mt-6 text-gray-500 text-sm">

                <ShieldCheck
                  size={18}
                  color="green"
                />

                Secure payment protected by UniStay

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}