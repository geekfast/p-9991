import { Button } from "@/components/ui/button";
import { ChevronLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AllServices = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Add animation class when component mounts
    document.body.classList.add('animate-slide-in-right');
    
    // Clean up animation classes when component unmounts
    return () => {
      document.body.classList.remove('animate-slide-in-right');
      document.body.classList.remove('animate-slide-out-right');
    };
  }, []);

  const categories = [
    {
      title: "Favorit Saya",
      services: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/bb1805e30d090866a6ae2d9ac5ad5352fc66a2a643cc1c5eadcb25c79419231b", title: "Pulsa & Data" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/e7313d5b6816e8a29aa4e5f02689a20d91bea6e9e8b3887ac72808586fd24a6e", title: "My Bills" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/d7ee606a21943a3c78c354ccdc85a353366c5fa8b7a010600acb1c74c54bac6f", title: "Cicilan" }
      ]
    },
    {
      title: "Transfer",
      services: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/bb1805e30d090866a6ae2d9ac5ad5352fc66a2a643cc1c5eadcb25c79419231b", title: "DANA Kaget" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/e7313d5b6816e8a29aa4e5f02689a20d91bea6e9e8b3887ac72808586fd24a6e", title: "Tarik Saldo" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/d7ee606a21943a3c78c354ccdc85a353366c5fa8b7a010600acb1c74c54bac6f", title: "Kirim ke Bank" }
      ]
    },
    {
      title: "Layanan Digital",
      services: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/bb1805e30d090866a6ae2d9ac5ad5352fc66a2a643cc1c5eadcb25c79419231b", title: "Pulsa & Data" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/e7313d5b6816e8a29aa4e5f02689a20d91bea6e9e8b3887ac72808586fd24a6e", title: "Digital Item" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/d7ee606a21943a3c78c354ccdc85a353366c5fa8b7a010600acb1c74c54bac6f", title: "Voucher Digital" }
      ]
    },
    {
      title: "Tagihan",
      services: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/bb1805e30d090866a6ae2d9ac5ad5352fc66a2a643cc1c5eadcb25c79419231b", title: "My Bills" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/e7313d5b6816e8a29aa4e5f02689a20d91bea6e9e8b3887ac72808586fd24a6e", title: "Listrik" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/d7ee606a21943a3c78c354ccdc85a353366c5fa8b7a010600acb1c74c54bac6f", title: "Air" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#108ee9]">      
        <nav className="px-4 py-3 flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => {
              document.body.classList.add('animate-slide-out-right');
              setTimeout(() => {
                navigate(-1);
              }, 100);
            }}
            className="text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-white text-lg font-medium">Semua Layanan</h1>
        </nav>

        <div className="px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari layanan"
              className="w-full h-9 pl-9 pr-4 rounded-full bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-white/30"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
          </div>
        </div>
      </header>

      <main className="pt-24 pb-4">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-6">
            <h2 className="px-4 mb-3 text-sm font-semibold text-gray-900">
              {category.title}
            </h2>
            <div className="grid grid-cols-4 px-4">
              {category.services.map((service, serviceIndex) => (
                <button
                  key={serviceIndex}
                  className="flex flex-col items-center group pb-4"
                >
                  <div className="w-14 h-14 mb-1.5 rounded-2xl bg-white shadow-sm p-2.5 flex items-center justify-center group-hover:shadow-md transition-shadow duration-200">
                    <img
                      src={service.icon}
                      alt=""
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] text-center font-medium text-gray-700 leading-tight px-1">
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AllServices;