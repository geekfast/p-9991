export const SecurityWidget = () => {
  return (
    <div className="bg-white p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252"
            alt=""
            className="w-6 h-6"
            loading="lazy"
          />
          <span className="text-sm">[x] aktivitas terlindungi!</span>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/f64d271010a9ff00fb21a4b94edb53117716dc2ffcdd0f07bec426321a60dd1d"
          alt=""
          className="w-6 h-6"
          loading="lazy"
        />
      </div>

      <div className="flex items-center space-x-2">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/de5a159128716e8c2ad868f39685d3deac7c0152d1249f6f59bdc271e5c307a5"
          alt=""
          className="w-6 h-6"
          loading="lazy"
        />
        <span className="text-sm">Ada yang kirim link mencurigakan?</span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/484887ae35e9218e0edd288e718ea7e2550fa6321c8f2d79a8ca4f109fef576a"
            alt=""
            className="w-6 h-6"
            loading="lazy"
          />
          <span className="font-bold">100%</span>
        </div>
        <button className="px-4 py-1 bg-green-500 text-white rounded-full text-sm">
          TERLINDUNGI
        </button>
      </div>
    </div>
  );
};