// rafce 로 템플릿 생성
import React from 'react';

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img}/>      
      <h2>win</h2>
    </div>
  )
}

export default Box