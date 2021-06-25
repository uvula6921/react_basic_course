import React from "react";

const Nemo = (props) => {
  
  const [count, setCount] = React.useState(3); // 함수형 컴포넌트에서 state 값을 변경하는 법
  const nemo_count = Array.from({length: count}, (item, index) => index) // 함수형 컴포넌트에서는 this를 사용하지 않음.
  
  const addNemo = () => {
    setCount(count + 1); // 매개변수의 값을 count에 할당해주는것임.
  }
  
  const removeNemo = () => {
    setCount(count > 0 ? count - 1 : 0); // 삼항 조건식
  }
  
  return (
    <div className="App">
      {nemo_count.map((num, index) => { // 돔 구조 안에서 map을 이용한 반복문을 사용하기 위해 {} bracket으로 감싸주었음.
          return (
            <div key={index} style={{
              width: '150px',
              height: '150px',
              backgroundColor: '#eee',
              margin: '10px'
            }}>
              nemo
            </div>
          )
        })}
        <button onClick={addNemo}>+</button>
        <button onClick={removeNemo}>-</button>
    </div>
  );
};

export default Nemo;