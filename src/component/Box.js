// rfce 로 템플릿 생성
import React from 'react';

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼

function Box(props) { //엄마창에서 값을 받아오기 위해 props를 사용
  console.log('props', props)
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item.img} alt=""/>
      <h2>WIN</h2>
    </div>
  )
}

// const Box = (props) => {
//   return (
//     <div className="box">
//       <h1>{props.title}</h1>
//       <img className="item-img" src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Limestone-060-RD010-C-SH_by22j3.jpg" alt="rock"/>
//       <img className="item-img" src="http://www.paulkorea.co.kr/shopimages/paulkorea/0110000000042.jpg?1528075901" alt="scissors"/>
//       <img className="item-img" src="https://completesupplies.com.mt/wp-content/uploads/2020/10/46064.jpg" alt="paper"/>
//       
//       <h2>WIN</h2>
//     </div>
//   )
// }

export default Box