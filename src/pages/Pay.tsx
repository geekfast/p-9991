import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/home/Footer";

const Pay = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background mx-auto max-w-[480px]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#108ee9]">      
        <nav className="px-4 py-3 flex items-center space-x-3 max-w-[480px] mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/20 rounded-full p-1"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-white text-lg font-medium">Pay</h1>
        </nav>
      </header>

      <main className="pt-14 pb-20">
        <div className="p-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Scan QR Code</h2>
            <p className="text-gray-600 text-sm">
              Point your camera at a DANA QR code to pay
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pay;