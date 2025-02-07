
export const NewsSection = () => {
  const news = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/ded4e2e59d74b957dc1e3157aaffff325f355cbaeb8fe8eb4b2bca4391a7f6e0",
      title: "Saldo TikTok Transfer ke DANA",
      subtitle: "Ini cara dapetin & transfernya"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/ded4e2e59d74b957dc1e3157aaffff325f355cbaeb8fe8eb4b2bca4391a7f6e0",
      title: "Ayo Gabung DANA Bisnis",
      subtitle: "Jangkau lebih banyak pelanggan"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/461df4783a9a62270868477cda6099e18342378f7ba2be55d3ce38026a66a426",
      title: "Bantu Warung Tetangga",
      subtitle: "Daftarin disini yuk!"
    }
  ];

  return (
    <section className="px-4 py-3 space-y-3 bg-white mx-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-base font-bold">Terbaru Untukmu</h2>
          <p className="text-xs text-gray-600">Kabar terbaik minggu ini!</p>
        </div>
        <button className="text-blue-600 text-xs font-medium">VIEW ALL</button>
      </div>

      <div className="space-y-3">
        {news.map((item, index) => (
          <div key={index} className="flex space-x-3">
            <img
              src={item.image}
              alt=""
              className="w-20 h-20 rounded-lg object-cover"
              loading="lazy"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
