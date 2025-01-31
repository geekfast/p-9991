import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/home/Footer";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

const Pay = () => {
  const navigate = useNavigate();

  return (
    <Drawer open={true} onOpenChange={() => navigate(-1)}>
      <DrawerContent className="max-h-[95vh]">
        <div className="bg-background mx-auto w-full max-w-[480px]">
          <header className="bg-[#108ee9]">      
            <nav className="px-4 py-3 flex items-center space-x-3">
              <button 
                onClick={() => navigate(-1)}
                className="text-white hover:bg-white/20 rounded-full p-1"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <h1 className="text-white text-lg font-medium">Pay</h1>
            </nav>
          </header>

          <main className="pb-20">
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
      </DrawerContent>
    </Drawer>
  );
};

export default Pay;