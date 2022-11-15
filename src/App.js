// // 3-3. 버튼을 클릭하면 값이 보임 - 내가 뭘 선택했는지 보여위해 ui가 바뀌게 하고싶다면? 리엑트의 hook인 userState를 사용한다!!!
import {useState} from 'react';
import './App.css';
import Box from './component/Box'

// 1. 박스 2개(타이틀, 사진, 결과) - Box.js
// 2. 가위 바위 보 버튼 - Box.js
// 3. 버튼을 클릭하면 값이 보임
// 4. 컴터는 랜덤 아이탬
// 5. 3,4 결과를 가지고 승패 결정
// 6. 박스 컬러 바꾸기

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

  // 4. 컴터는 랜덤 아이탬
  const [computerSelet, setComputerSelet] = useState(null)

  // 5. 3,4 결과를 가지고 승패 결정
  const [result, setResult] = useState("") // 값을 보여줘야해서 스트링타입으로 남겨준다.

  // 3-2. 버튼을 클릭하면 값이 보임 - 버튼 클릭
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]); // 매개변수에 담았던 값을 입력해서 choice에서 그 값과 같은 객체의 값을 가져옴
    // userSelect = choice[userChoice] 변수 선언하듯 하면 안됨

    // 4-1 컴터가 아이탬을 랜덤하게 뿌려
    let cpmputerChoice = ramdomChoice() // ramdomChoice()의 실행값을 cpmputerChoice 변수에 일단 넣어봄

    // 4-2-4 레알 최종... 이제 컴터값을 동적으로 변경시켜본다~
    setComputerSelet(cpmputerChoice);

    // 5-1 값을 판단하는 함수로 결과값을 전달해보자 : judgement(유저 선택값, 컴터 선택값)
    setResult(judgement(choice[userChoice], cpmputerChoice));
  }

  // 4-2 랜덤으로 값을 만들어보자고 : math.random
  const ramdomChoice = () => {
    // 4-2-1 choice를 배열로 만들어보자
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length) // 4-2-2 인덱스 번호 하나만 랜덤으로 갖고와보자, itemArray의 소수점 값에 length를 곱해서 0,1,2을 갖고와본다. 그리고 Math.floor로 소숫점 뒷자리를 사정없이 날려보자!! 4-2-3  고고
    console.log('randomItem value', randomItem); // 실행하면 숫자들이 좔좔 나오는데 이걸 item에 배열과 매칭시켜서 이미지를 뿌려야 제대로 된 이미지가 프린트 된다요. 그래서 Object.keys()를 사용해서 키값만 뽑아 배열로 만들어준다. 4-2-1 로~
    
    console.log('item array', itemArray);

    // 4-2-3 최종적으로다가 숫자를 아이템 이름으로 반환해준다
    let final = itemArray[randomItem]
    console.log('final', final); // final값에 이름이 잘 들어갔는지 확인 후 최최종적으로 choic에 final값을 반환하고 턴을 종료한다
    return choice[final]; // 이렇게 4-1에 선언한 ramdomChoice() 값에 최최종값을 쏙!! 4-2-4로~
  }

  // 5-2 값을 판단하는 함수
  const judgement = (user, computer) => {
    console.log('user', user, 'computer', computer);

    // 게임 로직을 생각해보자
    // user == computer -> tie 비김
    // user == rock, com == scissors -> user win
    // user == rock, com == paper -> user lose
    // user == scissors, com == paper -> user win
    // user == scissors, com == rock -> user lose
    // user == paper, com == rock -> user win
    // user == paper, com == scissors -> user lose

    // 유저와 컴터 자체를 통(객채기땜에)으로 비교할수 없기 때문에 user.name, computer.name을 비교해야함
    if(user.name == computer.name){
      return "tie"
    } else if(user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose"
    // {
    //   if(computer == "scissors"){
    //     return "win"
    //   } else {
    //     return "lose"
    //   }
    // }    
    else if(user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose"
    else if(user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose"
  }

  return (
    <div>
      <div className="main">
        {/* 3-4-1 박스에 userSelect 값을 넘겨줌 */}
        <Box title="you" item={userSelect} result={result}/> {/* 5. 결과값도 연결해준다 */}
        <Box title="computer" item={computerSelet} result={result}/> {/* 5. 결과값도 연결해준다 */}
      </div>
      <div className="resultBox">
        {/* 
          onClick={함수명()} => 리엑트는 이런 함수를 onClick과 상관없이 바로 랜더링 해버린다. 그래서 콜백함수 형식으로 작성해야 onClick이 제대로 작동한다요
           : {() => 함수명()}        
        */}
        <button onClick={() => play("scissors")}>가위</button> {/* 선택한 값이 어떤건지 알려주는 매개변수를 넣을꺼임 */}
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
        <h2>You : {result}</h2>
      </div>
    </div>
  )
}

export default App;