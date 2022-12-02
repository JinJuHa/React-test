import './App.css';
import { useState } from 'react';

function App() {
  //const blogName = "블로그 제목"
  //위 같은 변수는 값을 변경하더라도 바로 값이 바뀌어서 바인딩 되지 않음
  let [글제목 , b] = useState(['겨울 코트 추천','겨울 음식 추천'])
  let [로고 , setLogo] = useState('React Blog')
  // a: 스테이트에 보관했던 자료
  // b: 스테이트의 변경을 도와주는 함수

  return (
    <div className="App">
      <div className="black-nav">
       <h4>{로고}</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>글 내용</p>
      </div>
    </div>
  );
}

export default App;
