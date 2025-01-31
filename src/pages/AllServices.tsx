import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AllServices = () => {
  const navigate = useNavigate();
  
  const services = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/bb1805e30d090866a6ae2d9ac5ad5352fc66a2a643cc1c5eadcb25c79419231b", title: "Pulsa & Data" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/e7313d5b6816e8a29aa4e5f02689a20d91bea6e9e8b3887ac72808586fd24a6e", title: "DANA Deals" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/d7ee606a21943a3c78c354ccdc85a353366c5fa8b7a010600acb1c74c54bac6f", title: "My Bills" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/38a426adff699ac06b73eda83607a96ac86d7b4e96015644be8f1f7032be002c", title: "A+ Rewards" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/1510b4bb21eff743d6ef1716fcae6a4b3096eb791a4f2b774e17278cc81f312f", title: "DANA Kaget" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4b45361fb7f849e81ee9f1572fd8d702a32d56f9c2bb7568b361fb6d08016e43", title: "Uang Elektronik" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/2b4946d5c069b369b982bb9c481dbca56cadb57ef847cb006d8e87eb7ad088b7", title: "Internet & TV Kabel" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/bb1805e30d090866a6ae2d9ac5ad5352fc66a2a643cc1c5eadcb25c79419231b", title: "Games" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/e7313d5b6816e8a29aa4e5f02689a20d91bea6e9e8b3887ac72808586fd24a6e", title: "Voucher Digital" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/d7ee606a21943a3c78c354ccdc85a353366c5fa8b7a010600acb1c74c54bac6f", title: "Donasi" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/38a426adff699ac06b73eda83607a96ac86d7b4e96015644be8f1f7032be002c", title: "Asuransi" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/1510b4bb21eff743d6ef1716fcae6a4b3096eb791a4f2b774e17278cc81f312f", title: "Investasi" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4b45361fb7f849e81ee9f1572fd8d702a32d56f9c2bb7568b361fb6d08016e43", title: "Pinjaman" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/2b4946d5c069b369b982bb9c481dbca56cadb57ef847cb006d8e87eb7ad088b7", title: "Tiket Event" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/bb1805e30d090866a6ae2d9ac5ad5352fc66a2a643cc1c5eadcb25c79419231b", title: "Hotel" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/e7313d5b6816e8a29aa4e5f02689a20d91bea6e9e8b3887ac72808586fd24a6e", title: "Tiket Pesawat" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#108ee9]">      
        <nav className="px-4 py-3 flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-white text-lg font-medium">Semua Layanan</h1>
        </nav>
      </header>

      <main className="pt-14 p-4">
        <div className="grid grid-cols-4 gap-4">
          {services.map((service, index) => (
            <button
              key={index}
              className="flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow-sm"
            >
              <img
                src={service.icon}
                alt=""
                className="w-12 h-12"
                loading="lazy"
              />
              <span className="text-xs text-center font-medium text-gray-700">
                {service.title}
              </span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllServices;