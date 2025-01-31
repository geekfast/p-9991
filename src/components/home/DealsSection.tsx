import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const DealsSection = () => {
  return (
    <section className="px-4 py-3 space-y-3 bg-white max-w-[480px] mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">DANA Deals</h2>
          <p className="text-sm text-gray-600">Voucher terbaik di dekat kamu!</p>
        </div>
        <button className="text-blue-500 text-sm font-medium px-4 py-2 border border-blue-500 rounded-full">
          EXPLORE
        </button>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="basis-[85%] pl-1">
            <div className="relative flex bg-white rounded-xl overflow-hidden shadow">
              <div className="flex-1 bg-red-600 text-white p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/ff7d3611f55f9317438623530d56cb4d8bf049bfaf53615b2537e253c584a59c"
                    alt="Alfamart"
                    className="w-12 h-12 rounded-full bg-white p-1"
                  />
                  <span className="text-lg">Alfamart</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold">Rp30.000</div>
                  <div className="text-sm">Voucher Retail</div>
                </div>
              </div>
              <div className="w-24 flex items-center justify-center bg-white">
                <span className="text-blue-500 font-bold">Rp27.000</span>
              </div>
              <div className="absolute top-0 right-0">
                <div className="bg-green-500 text-white px-2 py-1 text-sm">
                  -10%
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-[85%]">
            <div className="relative flex bg-white rounded-xl overflow-hidden shadow">
              <div className="flex-1 bg-red-600 text-white p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/722218a44d611d58c8e0c1236fd2e82fb0c6ff372bd20d7a4fb2aae05daf0f98"
                    alt="KFC"
                    className="w-12 h-12 rounded-full bg-white p-1"
                  />
                  <span className="text-lg">KFC</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold">Rp50.000</div>
                  <div className="text-sm">Voucher Kuliner</div>
                </div>
              </div>
              <div className="w-24 flex items-center justify-center bg-white">
                <span className="text-blue-500 font-bold">Rp45.000</span>
              </div>
              <div className="absolute top-0 right-0">
                <div className="bg-green-500 text-white px-2 py-1 text-sm">
                  -10%
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-[85%]">
            <div className="relative flex bg-white rounded-xl overflow-hidden shadow">
              <div className="flex-1 bg-red-600 text-white p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/477c70f054d147b5e1de9a4d74b4d4311dfc9fcd74554eda7c911d14b7dbd232"
                    alt="Burger King"
                    className="w-12 h-12 rounded-full bg-white p-1"
                  />
                  <span className="text-lg">Burger King</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold">Rp40.000</div>
                  <div className="text-sm">Voucher Kuliner</div>
                </div>
              </div>
              <div className="w-24 flex items-center justify-center bg-white">
                <span className="text-blue-500 font-bold">Rp36.000</span>
              </div>
              <div className="absolute top-0 right-0">
                <div className="bg-green-500 text-white px-2 py-1 text-sm">
                  -10%
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-[85%]">
            <div className="relative flex bg-white rounded-xl overflow-hidden shadow">
              <div className="flex-1 bg-red-600 text-white p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/e1d498f6a417aba4a9abd8292a1da370849ab38218dcd6e072e8d3c381c1cf2e"
                    alt="Yoshinoya"
                    className="w-12 h-12 rounded-full bg-white p-1"
                  />
                  <span className="text-lg">Yoshinoya</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold">Rp35.000</div>
                  <div className="text-sm">Voucher Kuliner</div>
                </div>
              </div>
              <div className="w-24 flex items-center justify-center bg-white">
                <span className="text-blue-500 font-bold">Rp31.500</span>
              </div>
              <div className="absolute top-0 right-0">
                <div className="bg-green-500 text-white px-2 py-1 text-sm">
                  -10%
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};