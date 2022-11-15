// rafce 로 템플릿 생성
import React from 'react';

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼

const Box = (props) => {
  // console.log('props', props)

  return (
    <div className="box">
      <h1>{props.title}</h1>
      {/* 
        리액트의 컴포넌트들은 기본적으로 그려주고 싶은UI를 return을하고 
        만약에 UI를 그릴 당시에 보여주고자 하는 값이 없다면 에러를 일으킨다.
        이런 문제를 해결하기 위해 조건부 렌더링을 할 수 있다.
        자바스크립트에서 true && expression은 항상 expression으로 평가되고 false && expression은 항상 false로 평가됨.
        props.item에 값이 있을때 (null 이 아닐때)만 .img을 보여준다.
        명확한 값을 갖고있는 {props.title} 이런경우는 가드값 즉 조건부랜더링이 필요없지만 useState같이 동적 값을 갖는 애들은 가드값이 필요하다.
      */}
      <img className="item-img" src={props.item && props.item.img}/>   
    </div>
  )
}

export default Box