import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const MinwonList = () => {
  return (
    <div>
      <div>
        민원안내
      </div>  
      <div>
        <p>대전광역시 민원 서비스</p>
      </div>  
      <div style={{display : 'flex' , alignItems : 'center'}}>
        <div>
           <p>내게 필요한 민원 / 생활 / 해택 정보를 확인하세요</p> 
       </div>  
        <div>
           <button>
            서비스 전체보기
           </button>
        </div>  
      </div>  
      <div style={{ width :'1000px' , height:'200px', backgroundColor : '#ebf6fc' , display :'flex' , alignItems :'center'}}>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (4).png" alt="1" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (5).png" alt="2" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (6).png" alt="3" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (7).png" alt="4" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (8).png" alt="5" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (9).png" alt="6" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (10).png" alt="7" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (11).png" alt="8" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (12).png" alt="9" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (13).png" alt="10" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (14).png" alt="11" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (15).png" alt="12" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (16).png" alt="13" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (17).png" alt="14" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (18).png" alt="15" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (19).png" alt="16" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (20).png" alt="17" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:'80px'}} src="service (21).png" alt="18" />
      </SwiperSlide>
      
      
      ...
    </Swiper>
      </div>  
    </div>
  )
}

export default MinwonList