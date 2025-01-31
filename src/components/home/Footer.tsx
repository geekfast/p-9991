export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="p-4 text-center text-sm text-gray-600">
        <p>DANA Indonesia terdaftar serta diawasi</p>
        <p>
          oleh <span className="font-bold">Bank Indonesia</span> dan{" "}
          <span className="font-bold text-gray-500">Komdigi</span>
        </p>
      </div>

      <nav className="border-t flex items-center justify-between px-4 py-2">
        <button className="flex flex-col items-center space-y-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/e20ec1d58a3d4c32ec861d3cd5b81eca098b868bf57a0073bd48f28a0c8ebbdb"
            alt=""
            className="w-6 h-6"
            loading="lazy"
          />
          <span className="text-xs">Beranda</span>
        </button>

        <button className="flex flex-col items-center space-y-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/c97af117ce0690225d31c21d2830549fde97b6c426f16d21ae95204dcff221d4"
            alt=""
            className="w-6 h-6"
            loading="lazy"
          />
          <span className="text-xs">Riwayat</span>
        </button>

        <button className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 bg-blue-600 rounded-full" />
        </button>

        <button className="flex flex-col items-center space-y-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/3c8acc73cd36284284c0d8772598c5f455a111a459ff9285a4a0d725646a5266"
            alt=""
            className="w-6 h-6"
            loading="lazy"
          />
          <span className="text-xs">Dompet</span>
        </button>

        <button className="flex flex-col items-center space-y-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4a7fe8de0498c7089867ab66fbc7a3cc2d772b163ce857e180152138aa0506b6?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4a7fe8de0498c7089867ab66fbc7a3cc2d772b163ce857e180152138aa0506b6?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4a7fe8de0498c7089867ab66fbc7a3cc2d772b163ce857e180152138aa0506b6?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4a7fe8de0498c7089867ab66fbc7a3cc2d772b163ce857e180152138aa0506b6?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4a7fe8de0498c7089867ab66fbc7a3cc2d772b163ce857e180152138aa0506b6?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4a7fe8de0498c7089867ab66fbc7a3cc2d772b163ce857e180152138aa0506b6?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4a7fe8de0498c7089867ab66fbc7a3cc2d772b163ce857e180152138aa0506b6?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4a7fe8de0498c7089867ab66fbc7a3cc2d772b163ce857e180152138aa0506b6?placeholderIfAbsent=true"
            alt=""
            className="w-6 h-6"
            loading="lazy"
          />
          <span className="text-xs">Saya</span>
        </button>
      </nav>
    </footer>
  );
};