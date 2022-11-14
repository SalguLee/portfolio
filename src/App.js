// // 3-3. 버튼을 클릭하면 값이 보임 - 내가 뭘 선택했는지 보여위해 ui가 바뀌게 하고싶다면? 리엑트의 hook인 userState를 사용한다!!!
import {useState} from 'react';
import './App.css';
import Box from './component/Box'

// 1. 박스 2개(타이틀, 사진, 결과) - Box.js
// 2. 가위 바위 보 버튼 - Box.js
// 3. 버튼을 클릭하면 값이 보임
// 4. 컴터는 랜덤 아이탬
// 5. 3,4 결과를 가지고 승패 결정
// 6. 승패 결과에 따라 테두리 색 변경 = 이기면 초록, 지면 빨강, 비기면 검정

// 3-1. 버튼을 클릭하면 값이 보임 - choice에 어떤것들이 들어갈껀지 객체를 만들어줌
const choice = {
  rock:{
    name:"Rock",
    img:"https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Limestone-060-RD010-C-SH_by22j3.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"http://www.paulkorea.co.kr/shopimages/paulkorea/0110000000042.jpg?1528075901"
  },
  paper:{
    name:"Paper",
    img:"https://completesupplies.com.mt/wp-content/uploads/2020/10/46064.jpg"
  }
}

function App() {
    // 3-4. 버튼을 클릭하면 값이 보임 - 내가 뭘 선택했는지 이미지로 보여주기
  // userState는 const [userSelct, setUserSelect] 요런 형식으로 값, 변경값을 배열형태로 userState에 넣어주고 초기값을 셋팅
  // hook은 최상위 단위에서 선언할수 없기 때문에 함수 구성요소나 사용자 정의가 된 함수 안에서 사용해야 함
  const [userSelect, setUserSelect] = useState(null) // userState에 처음 값은 선택된것이 없기 때문에 null로 지정
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]); // 매개변수에 담았던 값을 입력해서 choice에서 그 값과 같은 객체의 값을 가져옴
  }

  // 3-2. 버튼을 클릭하면 값이 보임 - 버튼 클릭
  // const play = (userChoice) => {
  //   console.log('선택됨', userChoice);
  // }

  /* 기존타입 */
  function plays(userChoice){
    console.log('선택됨', userChoice);
  }
 


  return (
    <div>
      <div className="main">
        {/* 3-4-1 박스에 userSelect 값을 넘겨줌 */}
        <Box title="you" item={userSelect}/> 
        <Box title="computer"/>
      </div>
      <div className="main">
        {/* 
          onClick={함수명()} => 리엑트는 이런 함수를 onClick과 상관없이 바로 랜더링 해버린다. 그래서 콜백함수 형식으로 작성해야 onClick이 제대로 작동한다요
           : {() => 함수명()}        
        */}
        <button onClick={()=>play("Scissors")}>가위</button> {/* 선택한 값이 어떤건지 알려주는 매개변수를 넣을꺼임 */}
        <button onClick={()=>play("Rock")}>바위</button>
        <button onClick={()=>play("Paper")}>보</button>

        {/* 기존 타입 */}
        <div>
          <button onClick={()=>plays("Scissors")}>가위</button>
          <button onClick={()=>plays("Rock")}>바위</button>
          <button onClick={()=>plays("Paper")}>보</button>
        </div>        
      </div>
    </div>
  )
}

export default App;
