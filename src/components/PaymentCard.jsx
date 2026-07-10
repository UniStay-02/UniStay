import {
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
} from "react-icons/fa";

const PaymentCard = ({ payment }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <FaMoneyBillWave className="text-4xl text-[#F98603]" />

        <div>
          <h2 className="text-2xl font-bold text-[#0E1733]">
            Payment Information
          </h2>

          <p className="text-gray-500">View your hostel payment details</p>
        </div>
      </div>

      {!payment ? (
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
          <FaClock className="text-5xl text-gray-400 mx-auto mb-4" />

          <h3 className="text-xl font-semibold text-gray-600">
            No Payments Yet
          </h3>

          <p className="text-gray-500 mt-2">
            Once you book a hostel and make a payment, the details will appear
            here.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Amount Paid</p>
            <p className="font-semibold">Ksh {payment.amount}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Payment Method</p>
            <p className="font-semibold flex items-center gap-2">
              <FaCreditCard className="text-[#F98603]" />
              {payment.method}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Transaction ID</p>
            <p className="font-semibold">{payment.transactionId}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Payment Status</p>
            <p className="font-semibold text-green-600 flex items-center gap-2">
              <FaCheckCircle />
              {payment.status}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentCard;
