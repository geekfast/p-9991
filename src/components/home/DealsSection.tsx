import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const DealsSection = () => {
  return (
    <section className="px-4 py-3 space-y-3 bg-white">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-base font-bold">DANA Deals</h2>
          <p className="text-xs text-gray-600">Voucher terbaik di dekat kamu!</p>
        </div>
        <button className="text-blue-600 text-xs font-medium">EXPLORE</button>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/ff7d3611f55f9317438623530d56cb4d8bf049bfaf53615b2537e253c584a59c"
              alt="Deal 1"
              className="w-full aspect-[4/3] object-cover rounded-lg"
              loading="lazy"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/722218a44d611d58c8e0c1236fd2e82fb0c6ff372bd20d7a4fb2aae05daf0f98"
              alt="Deal 2"
              className="w-full aspect-[4/3] object-cover rounded-lg"
              loading="lazy"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/477c70f054d147b5e1de9a4d74b4d4311dfc9fcd74554eda7c911d14b7dbd232"
              alt="Deal 3"
              className="w-full aspect-[4/3] object-cover rounded-lg"
              loading="lazy"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/e1d498f6a417aba4a9abd8292a1da370849ab38218dcd6e072e8d3c381c1cf2e"
              alt="Deal 4"
              className="w-full aspect-[4/3] object-cover rounded-lg"
              loading="lazy"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};