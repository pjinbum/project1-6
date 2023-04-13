import React from 'react'
import { useState } from 'react'
import './Gonggo.css'

const Gonggo = () => {
  
   const gonggolist = ['시정소식' , '시험정도' , '행사안내' , '고시' , '공고']
   const [gonggolist1 , setGonggolist1] = useState(gonggolist)
    
  return (
    <div style={{display:'flex' , justifyContent :'center'}}>
      <div style={{width : '1000px' }}>
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
                  <img style={{width : '30px' , height :'30px'}} src="btn-left.png" alt="left" />
              </button>
              <button style={{ border :'none' ,backgroundColor:'transparent' , marginRight :'10px'}}>
                  <img style={{width : '30px' , height :'30px' }} src="btn-right.png" alt="right" />
              </button>
              <button style={{borderRadius :'30px' , height :'30px'}}> + 더보기</button>
            </div>
          </div>
          <div style={{display : 'flex' , marginTop : '20px'}}>
              <div className='gonggo-box1'>
                  <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
                      <p className='gesifan-span'>2023 시민정원사 양성 초급과정 <br></br>모집완료</p>
                      <p>2023-03-27</p>
      
                  </div>
              </div>
              <div style={{marginLeft : '10px'}} className='gonggo-box1'>
              <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                      <p className='gesifan-span'>미세먼지(PM-10) 주의보 발령 해제<br></br>(대전 전지역)</p>
                      <p>2023-03-27</p>
      
                  </div>
              </div>
              <div style={{marginLeft : '10px'}} className='gonggo-box1'>
              <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                      <p className='gesifan-span'>2023년 청년도전 지원사업<br></br>참여자 모집</p>
                      <p>2023-03-27</p>
      
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Gonggo