import React from 'react'
import { useState } from 'react'
import './Gonggo.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

 
const Gonggo = () => {
  
   const gonggolist = ['시정소식' , '시험정도' , '행사안내' , '고시' , '공고']
   const [gonggolist1 , setGonggolist1] = useState(gonggolist)
    
  return (
    <div style={{display:'flex' , justifyContent :'center'}}>
      <div style={{width : '800px' }}>
          <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems:'center'}}>
            <div>
              <ul className='gonggolist-menulist'>
                  {
      
      
                              gonggolist1.map((gonggolist2 , index)=>{
                                  return(
                                      <li key={index}>
                                        {gonggolist2}
                                      </li>
                                  )
                              })
      
      
                  }
              </ul>
            </div >
            <div style={{ display:'flex',height :'30px' , marginRight : '60px'}}>
              <button style={{ border :'none' ,backgroundColor:'transparent'}}>
                  <img style={{width : '30px' , height :'30px'}} src="/box3image/btn-left.png" alt="left" />
              </button>
              <button style={{ border :'none' ,backgroundColor:'transparent' , marginRight :'10px'}}>
                  <img style={{width : '30px' , height :'30px' }} src="/box3image/btn-right.png" alt="right" />
              </button>
              <button style={{borderRadius :'30px' , height :'30px'}}> + 더보기</button>
            </div>
          </div>
          <div style={{display : 'flex' , marginTop : '20px'}}>


          <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,  A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div className='gonggo-box1'>
                  <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
                      <p className='gesifan-span'>2023 시민정원사 양성 초급과정 <br></br>모집완료</p>
                      <p>2023-03-27</p>
      
                  </div>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{marginLeft : '10px'}} className='gonggo-box1'>
              <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                      <p className='gesifan-span'>미세먼지(PM-10) 주의보 발령 해제<br></br>(대전 전지역)</p>
                      <p>2023-03-27</p>
      
                  </div>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{marginLeft : '10px'}} className='gonggo-box1'>
              <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                      <p className='gesifan-span'>2023년 청년도전 지원사업<br></br>참여자 모집</p>
                      <p>2023-03-27</p>
      
                  </div>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{marginLeft : '10px'}} className='gonggo-box1'>
              <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                      <p className='gesifan-span'>2023년 청년도전 지원사업<br></br>참여자 모집</p>
                      <p>2023-03-27</p>
      
                  </div>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{marginLeft : '10px'}} className='gonggo-box1'>
              <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                      <p className='gesifan-span'>2023년 청년도전 지원사업<br></br>참여자 모집</p>
                      <p>2023-03-27</p>
      
                  </div>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{marginLeft : '10px'}} className='gonggo-box1'>
              <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                      <p className='gesifan-span'>2023년 청년도전 지원사업<br></br>참여자 모집</p>
                      <p>2023-03-27</p>
      
                  </div>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{marginLeft : '10px'}} className='gonggo-box1'>
              <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                      <p className='gesifan-span'>2023년 청년도전 지원사업<br></br>참여자 모집</p>
                      <p>2023-03-27</p>
      
                  </div>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{marginLeft : '10px'}} className='gonggo-box1'>
              <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                      <p className='gesifan-span'>2023년 청년도전 지원사업<br></br>참여자 모집</p>
                      <p>2023-03-27</p>
      
                  </div>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{marginLeft : '10px'}} className='gonggo-box1'>
              <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                      <p className='gesifan-span'>2023년 청년도전 지원사업<br></br>참여자 모집</p>
                      <p>2023-03-27</p>
      
                  </div>
              </div>
      </SwiperSlide>

    </Swiper>






             
             
             
          </div>
      </div>
    </div>
  )
}

export default Gonggo