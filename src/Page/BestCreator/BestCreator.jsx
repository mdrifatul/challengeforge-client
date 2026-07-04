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
      <div className="w-full max-w-7xl mx-auto my-20 px-4">
        <div className="mb-16">
          <SectionTitle heading="Best Contest Creator" />
        </div>
        <div className="h-96 animate-pulse bg-gray-100 rounded-2xl"></div>
      </div>
    );
  }

  return (
    <div data-aos="fade-up" className="w-full max-w-7xl mx-auto my-20 px-4">
      <div className="mb-16">
        <SectionTitle heading="Best Contest Creator" />
      </div>
      <Swiper
        key={`creator-swiper-${creator.length}`}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper py-10"
      >
        {creator.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full transform transition-transform hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover" 
                  src={item?.image} 
                  alt={item?.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">{item?.name}</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-[#0776a6] font-bold text-sm tracking-wide uppercase mb-2">
                  {item?.contestname}
                </p>
                <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
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