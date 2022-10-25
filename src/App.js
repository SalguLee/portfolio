import './App.css';
import Box from './component/Box'

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 값이 보임
// 4. 컴터는 랜덤 아이탬
// 5. 3,4 결과를 가지고 승패 결정
// 6. 승패 결과에 따라 테두리 색 변경 = 이기면 초록, 지면 빨강, 비기면 검정

function App() {
  return (
    <div>
      <div className="main">
        <Box title="you"/>
        <Box title="computer"/>
      </div>
      <div className="main">
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div>
  )
}

export default App;
