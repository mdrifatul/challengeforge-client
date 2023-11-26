// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { useQuery } from '@tanstack/react-query';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import useaxiosPublic from './../../Hooks/useaxiosPublic';
import SectionTitle from './../Shared/SectionTitle';

const BestCreator = () => {
  const axiospublic = useaxiosPublic();
  const {data:creator=[]} = useQuery({
    queryKey: ['creator'],
    queryFn: async() =>{
      const res = await axiospublic.get('/creator')
      return res.data
    }
  })


  return (
    <div className='w-10/12 md:w-11/12 mx-auto my-28'>
      <div className='mb-20'>
      <SectionTitle heading='Best Contest Creator'></SectionTitle>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate:50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          creator.map(item => (
            <>
            <SwiperSlide >
          <div key={item?._id} className='h-80 '>
          <img className='h-40 w-full absolute' src={item?.image} />
          <div className='px-3'>
          <p className='relative top-40 text-gray-900 font-bold text-lg'>{item?.name}</p>
          <p className='relative top-40 text-gray-800 font-semibold'>{item?.contestname}</p>
          <p className='relative top-40 text-gray-600'>{item?.description}</p>
          </div>
          </div>
        </SwiperSlide>
            </>
          ))
        }
      
      </Swiper>
    </div>
  );
};

export default BestCreator