import React from "react";

const Cat = (props) => {

  console.log(props.match) // route에서 :를 이용해 파라미터를 props로 전달받았는데, match라는 key 값으로 찾아볼 수 있음.

  return (
    <div className="CatMain">
      내 고양이 이름은 {props.match.params.cat_name} {/* url 파라미터 값을 사이트에 넣기 */}
    </div>
  );
};

export default Cat;