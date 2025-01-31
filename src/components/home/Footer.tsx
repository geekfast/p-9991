import { useNavigate, useLocation } from "react-router-dom";
import { QrCode } from "lucide-react";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveClass = (path: string) => {
    return location.pathname === path ? "text-blue-600" : "text-gray-600";
  };

  return (
    <footer className="bg-white">
      <div className="px-4 py-3 text-center text-xs text-gray-600 max-w-[480px] mx-auto">
        <p>DANA Indonesia terdaftar serta diawasi</p>
        <p>
          oleh <span className="font-bold">Bank Indonesia</span> dan{" "}
          <span className="font-bold text-gray-500">Komdigi</span>
        </p>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="flex items-center justify-between px-6 py-2 max-w-[480px] mx-auto">
          <button 
            onClick={() => navigate('/')}
            className={`flex flex-col items-center space-y-1 ${getActiveClass('/')}`}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/e20ec1d58a3d4c32ec861d3cd5b81eca098b868bf57a0073bd48f28a0c8ebbdb"
              alt=""
              className="w-5 h-5"
              loading="lazy"
            />
            <span className="text-[10px]">Beranda</span>
          </button>

          <button 
            onClick={() => navigate('/riwayat')}
            className={`flex flex-col items-center space-y-1 ${getActiveClass('/riwayat')}`}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/c97af117ce0690225d31c21d2830549fde97b6c426f16d21ae95204dcff221d4"
              alt=""
              className="w-5 h-5"
              loading="lazy"
            />
            <span className="text-[10px]">Riwayat</span>
          </button>

          <button 
            onClick={() => navigate('/pay')} 
            className="flex flex-col items-center -mt-4"
          >
            <div className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center">
              <QrCode className="w-6 h-6 text-white" />
            </div>
          </button>

          <button 
            onClick={() => navigate('/dompet')}
            className={`flex flex-col items-center space-y-1 ${getActiveClass('/dompet')}`}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/3c8acc73cd36284284c0d8772598c5f455a111a459ff9285a4a0d725646a5266"
              alt=""
              className="w-5 h-5"
              loading="lazy"
            />
            <span className="text-[10px]">Dompet</span>
          </button>

          <button 
            onClick={() => navigate('/saya')}
            className={`flex flex-col items-center space-y-1 ${getActiveClass('/saya')}`}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4a7fe8de0498c7089867ab66fbc7a3cc2d772b163ce857e180152138aa0506b6"
              alt=""
              className="w-5 h-5"
              loading="lazy"
            />
            <span className="text-[10px]">Saya</span>
          </button>
        </div>
      </nav>
    </footer>
  );
};