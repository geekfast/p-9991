import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  Drawer, 
  DrawerContent,
  DrawerTitle,
  DrawerDescription 
} from "@/components/ui/drawer";

const Pay = () => {
  const navigate = useNavigate();

  return (
    <Drawer modal={false} open={true} onOpenChange={() => navigate(-1)}>
      <DrawerContent className="fixed inset-x-0 bottom-0 z-[9999] mt-24 h-[95vh] rounded-t-[10px] border bg-background">
        <DrawerTitle className="sr-only">Pay with QR Code</DrawerTitle>
        <DrawerDescription className="sr-only">
          Scan a QR code to make a payment
        </DrawerDescription>
        
        <div className="bg-background mx-auto w-full max-w-[480px] h-full overflow-auto">
          <header className="bg-[#108ee9] sticky top-0">      
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
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Pay;