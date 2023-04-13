import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './JuyoHengSA.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const JuyoHengSA = () => {
  return (
    <div style={{display :'flex' ,justifyContent :'center'}}>
      <div >
          <div><p>주요행사안내</p></div>
          <div style={{display : 'flex' , alignItems : 'center'}}>
              <div style={{width:'400px', textAlign : 'right'}}>
                  <p>즐거움을 <strong>대전과 함께!</strong></p>
                  <p>대전시민들을 위해 준비한 소소한 행복</p>
                  <p>4월 한 달도 시민들과 <strong>함께하는 대전</strong></p>
                  <p>함께해서 더 따뜻한 <strong>지역사회 소통공간, 대전</strong></p>
                  <button>자세히보기</button>
              </div>
              <div style={{width :'400px' , height:'200px' , margin :'30px'}}>
              <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img  style={{width :'400px' , height:'200px' }} src="북토크.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width :'400px' , height:'200px' }} src="대전시티투어.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width :'400px' , height:'200px' }} src="마스크해제.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width :'400px' , height:'200px' }} src="식목일 행사.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width :'400px' , height:'200px' }} src="자동차 탄소중립포인트.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width :'400px' , height:'200px' }} src="정부풀연연구기관.jpg" alt="" />
        </SwiperSlide>
      
        ...
      </Swiper>
              </div>
          </div>
      </div>
    </div>
  )
}

export default JuyoHengSA