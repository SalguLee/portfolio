import { useState } from 'react';
import './App.css';
import Box from './component/Box'

// 재료
// https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Limestone-060-RD010-C-SH_by22j3.jpg
// http://www.paulkorea.co.kr/shopimages/paulkorea/0110000000042.jpg?1528075901
// https://completesupplies.com.mt/wp-content/uploads/2020/10/46064.jpg

// 1. 박스 2개(타이틀, 사진, 결과) - Box.js
// 2. 가위 바위 보 버튼 - Box.js
// 3. 버튼을 클릭하면 값이 보임
// 3-1. 유저가 클릭할 값 할당 = 객채로 작성, 이때 useState 를 쓴다
// 3-2. 유저가 클릭한 값에 해당하는 이미지를 박스에 불러옴
// 4. 컴터는 랜덤 아이탬
// 5. 3,4 결과를 가지고 승패 결정
// 6. 박스 컬러 바꾸기

// 3-1. 유저가 클릭할 값 할당 = 객채로 작성
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
  // 3-1. 유저가 클릭할 값 할당 = 객채로 작성, 이때 useState 를 쓴다
  const [userSelect, setUserSelect] = useState(null); // user : 유저값이 바껴야되는 곳에 userSelect 이거를 함수로 선언해서 사용
  const [computerSelect, setComputerSelect] = useState(null); // computer

  // 3. 버튼을 클릭하면 값이 보임
  const play = (userChoice) => {
    console.log('userChoice', userChoice);
    setUserSelect(choice[userChoice]); // 내가 선택한 아이탬 이미지로 동적 변경
    setComputerSelect(randomChoice); // 컴터 랜덤
  }

  // 4. 컴터의 랜덤 아이템
  const randomChoice = () => {
    // Math.random() : 랜덤값
    // Math.floor() : 소숫점 날려주기
    // Object.keys : 키값 뽑아서 배열로 만들어주기
    // 각 값을 변수에 담아서 사용
    let itemArray = Object.keys(choice);
    console.log('itemArray', itemArray);
  }

  return (
    <div>
      <div className="main">
        {/* 선언한 item을 Box.js에서 사용 */}
        <Box title="you" item={userSelect}/>
        <Box title="computer" item={random}/>
      </div>
      <div className="resultBox">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  )
}

export default App;