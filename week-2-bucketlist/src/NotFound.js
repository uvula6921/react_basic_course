import React from "react";

const NotFound = (props) => {
  
  return (
    <div className="NotFoundMain">
      주소가 올바르지 않아요!
      <button onClick={() => {
        props.history.goBack();
      }}>뒤로 가기</button>
    </div>
  );
};

export default NotFound;