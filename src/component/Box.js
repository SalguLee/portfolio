// rafce 로 템플릿 생성
import React from 'react';

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼

const Box = (props) => {

  let result;
  if (
    props.title === "computer" && // 카드가 computer카드인가?
    props.result !== "tie" && // 그리고 결과가 비긴건 아닌가? = 안비겼을 때
    props.result !== "" // props.result에 값이 있는가? = 값이 없을 때
  ) {
    result = props.result === "Win" ? "Lose" : "Win"; // 결과는 밖에서 받아온 유저의 결과를 반대로 하는 삼항연산자로 컴터의 결과값을 박아준다
  } else {// 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }

  return (
    // css를 불러올 때도 스크립트형식을 사용할 수 있음
    // {}스크립트 형태를 불러와서 템플릿 리터널 형식으로 result 값을 불러옴
    // result 값으로 css 분기처리하면 빨초검으로 ui 타입 구현 가능
    <div className={`box ${result}`}> 
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img}/>      
      <h2>{result}</h2>
    </div>
  )
}

export default Box