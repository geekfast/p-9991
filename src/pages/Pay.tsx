import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pay = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4 flex items-center gap-2">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold">Pay</h1>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Scan QR Code</h2>
          <p className="text-gray-600 text-sm">
            Point your camera at a DANA QR code to pay
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pay;