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
  const [result, setResult] = useState(""); // 결과값

  // 3. 버튼을 클릭하면 값이 보임 : 메인 함수
  const play = (userChoice) => { // 클릭할 때 들어오는 인자값을 매개변수로 사용
    console.log('userChoice', userChoice); // 그 매개변수를 보여줘보자
    setUserSelect(choice[userChoice]); // 내가 선택한 아이탬(choice[userChoice]) 이미지로 동적 변경
    let computerChoice = randomChoice(); // 함수를 바로 세터함수에 넣을수 없기때문에 한번 더 선언해서 사용
    setComputerSelect(computerChoice); // 컴터선택한 값(computerChoice)을 랜덤으로 보여줌

    // 5. 3,4 결과를 가지고 승패 결정할수 있는 함수를 만들어보자!!
    setResult(judgment(choice[userChoice], computerChoice)); // judgment 함수에 매개변수로 사용할 수 있도록 choice[userChoice], computerChoice의 인자값을 설정 한 후에 결과값 uesState에 넣어서 호출
  }

  // 4. 컴터의 랜덤 아이템
  const randomChoice = () => {
    // Math.random() : 랜덤값
    // Math.floor() : 소숫점 날려주기
    // Object.keys : 키값 뽑아서 배열로 만들어주기
    // 각 값을 변수에 담아서 사용
    let itemArray = Object.keys(choice); // 객체 번호를 랜덤하게 뿌리기 위해 배열로 뽑음
    // 그 배열을 랜덤으로 뿌리기위해 Math.floor(Math.random()) 사용
    // Math.random()을 그냥 사용하면 소숫점으로 나오기 때문에 객체만큽 곱한 후 소숫점을 떼면 원하는 배열이 나옴
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log('item Array', itemArray);
    console.log('randomItem', randomItem);
    // 이제 최종적으로다가 숫자를 아이템으로 반환
    let final = itemArray[randomItem];
    console.log('final', final);
    return choice[final];
  }

  //결과값을 비교한 후에 비교값을 어딘가 뿌려줘야되는데 
  const judgment = (user, computer) => { // 위에서 설정한 인자값을 매개변수로 받아서 사용, 근데 로그파일을 보면 배열로 받아와진다
    console.log('user', user, 'computer', computer)
    /*
      승패를 결정하는 게임
      {user}
      scissors : scissors = tie
      scissors : paper = win
      scissors : rock = lose
      rock : rock = tie
      rock : scissors = win
      rock : paper = lose
      paper : paper = tie
      paper : rock = win
      paper : scissors = lose
      */
    if(user.name === computer.name){ // 그래서 배열의 이름을 비교할라믄 .name로 비교해야함
      return "tie"
    }
    else if(user.name === "Scissors") return computer.name === "Paper" ? "Win" : "Lose";
    else if(user.name === "Rock") return computer.name === "Scissors" ? "Win" : "Lose";
    else if(user.name === "Paper") return computer.name === "Rock" ? "Win" : "Lose";
  }

  return (
    <div>
      <div className="main">
        {/* 선언한 item을 Box.js에서 사용 */}
        <Box title="you" item={userSelect} result={result}/>
        <Box title="computer" item={computerSelect} result={result}/>
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