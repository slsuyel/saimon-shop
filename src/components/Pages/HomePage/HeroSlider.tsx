"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    title: "Your One-Stop Shop for Quality Groceries",
    description:
      "Discover a wide selection of fresh produce, pantry staples, and more, all in one place.",
    image:
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/banner-img3.png",
  },
  {
    title: "Freshness Delivered Right to Your Door",
    description:
      "Enjoy the convenience of online grocery shopping and get your items delivered fresh to your doorstep.",
    image:
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/banner-img3.png",
  },
  {
    title: "Exclusive Deals & Savings Just for You",
    description:
      "Unlock incredible discounts and special offers on a variety of products. Shop smart and save!",
    image:
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/banner-img3.png",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-white dark:bg-gray-900">
      <Carousel
        className="bg-[#F2F4F5] dark:bg-gray-800 mt-2 md:mt-6 container mx-auto px-2 md:px-4"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="h-full w-full flex items-center "
            >
              <div className="py-4 px-4 w-full md:p-8 rounded-md flex items-center">
                <div className="w-[55%]">
                  <div className="hidden md:block">
                    <span className="md:py-1.5 py-1 px-2 md:px-4 text-[0.8rem] rounded-md bg-blue-400 text-white dark:bg-blue-600">
                      INTRODUCING
                    </span>
                  </div>
                  <h3 className="text-sm lg:text-xl font-semibold text-gray-900 dark:text-white my-2 md:my-4 md:text-3xl">
                    {slide.title}
                  </h3>
                  <p className="text-[0.9rem] text-gray-700 dark:text-gray-300 mb-4 hidden lg:block">
                    {slide.description}
                  </p>
                  <Link
                    href={"/shop"}
                    className="group flex items-center justify-center gap-2 md:gap-4 px-3 md:px-6 py-1 md:py-2 text-xs md:text-sm bg-[#FA8232] dark:bg-[#DE732D] text-white rounded-md hover:bg-[#DE732D] dark:hover:bg-[#FA8232] transition-all duration-300 w-max"
                  >
                    Shop Now
                    <ArrowRight className="hidden lg:inline group-hover:ml-1 transition-all duration-300" />
                  </Link>
                </div>
                <div className="w-[40%] flex items-center justify-center">
                  <img
                    alt="product/image"
                    src={slide.image}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSlider;
