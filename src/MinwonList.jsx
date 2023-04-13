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
    <div style={{display:'flex' , justifyContent :'center'}}>
      <div>
        <div>
          <p style={{width:'120px',height:'30px',borderRadius : '30px' , fontWeight :'bold',backgroundColor :'#ebf6fc',display :'flex' ,justifyContent:'center', alignItems :'center' ,marginLeft:'120px'}}>민원안내</p>
        </div>
        <div>
          <p style={{fontSize :'32px', marginLeft :'125px'}}>대전광역시 <strong>민원 서비스</strong></p>
        </div>
        <div style={{display : 'flex' ,  marginTop:'-40px',alignItems:'center' }}>
          <div>
             <p style={{fontWeight :'bold' , fontSize:'20px',marginLeft:'125px'}}>내게 필요한 민원 / 생활 / 해택 정보를 확인하세요</p>
          </div>
          <div>
             <button style={{border:'none',backgroundColor:'transparent',marginLeft:'250px' ,fontWeight:'bold'}}>
              서비스 전체보기 <img style={{width:'12px'}} src="/box3image/enlargement-icon.png" alt="big" />
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
          <img style={{width:'80px'}} src="/box3image/service (4).png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (5).png" alt="2" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (6).png" alt="3" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (7).png" alt="4" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (8).png" alt="5" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (9).png" alt="6" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (10).png" alt="7" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (11).png" alt="8" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (12).png" alt="9" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (13).png" alt="10" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (14).png" alt="11" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (15).png" alt="12" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (16).png" alt="13" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (17).png" alt="14" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (18).png" alt="15" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (19).png" alt="16" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (20).png" alt="17" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'80px'}} src="/box3image/service (21).png" alt="18" />
        </SwiperSlide>
      
      
        ...
      </Swiper>
        </div>
      </div>
    </div>
  )
}

export default MinwonList