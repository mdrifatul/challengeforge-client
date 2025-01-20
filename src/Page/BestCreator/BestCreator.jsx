import { useQuery } from "@tanstack/react-query";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useaxiosPublic from "./../../Hooks/useaxiosPublic";
import SectionTitle from "./../Shared/SectionTitle";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const BestCreator = () => {
  const axiospublic = useaxiosPublic();
  const { data: creator = [], isLoading } = useQuery({
    queryKey: ["creators"],
    queryFn: async () => {
      const res = await axiospublic.get("/creator");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="mx-auto my-16">
        <div className="mb-20">
          <SectionTitle heading="Best Contest Creator" />
        </div>
        <div className="h-80 animate-pulse bg-gray-200 rounded-lg"></div>
      </div>
    );
  }

  return (
    <div data-aos="fade-right" className="mx-auto my-16">
      <div className="mb-20">
        <SectionTitle heading="Best Contest Creator" />
      </div>
      <Swiper
        key={`creator-swiper-${creator.length}`}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {creator.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="h-80">
              <img 
                className="h-40 w-full absolute object-cover" 
                src={item?.image} 
                alt={item?.name}
              />
              <div className="px-3">
                <p className="relative top-40 text-gray-900 font-bold text-lg">
                  {item?.name}
                </p>
                <p className="relative top-40 text-gray-800 font-semibold">
                  {item?.contestname}
                </p>
                <p className="relative top-40 text-gray-600 line-clamp-3">
                  {item?.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestCreator;