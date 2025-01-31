import { X } from "lucide-react";
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
            <nav className="px-4 py-3 flex items-center justify-between">
              <h1 className="text-white text-lg font-medium">Pay</h1>
              <button 
                onClick={() => navigate(-1)}
                className="text-white hover:bg-white/20 rounded-full p-1"
              >
                <X className="h-6 w-6" />
              </button>
            </nav>
          </header>

          <main className="pb-20">
            <div className="bg-white">
              {/* Camera Scanner Simulation */}
              <div className="relative w-full aspect-square bg-black">
                {/* Scanner Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-2 border-white/50 rounded-lg relative">
                    {/* Scanning line animation */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500 animate-[scan_2s_ease-in-out_infinite]" />
                    
                    {/* Corner markers */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-blue-500" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-blue-500" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-blue-500" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-blue-500" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm p-4">
                Point your camera at a DANA QR code to pay
              </p>
            </div>
          </main>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Pay;