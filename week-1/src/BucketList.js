// 리액트 패키지를 불러옵니다.
import React from 'react'; 

// 함수형 컴포넌트는 이렇게 쓸 수도 있고
// function Bucketlist(props){
//     return (
//         <div>버킷 리스트</div>
//     );
// }

// 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
// 저희는 앞으로 화살표 함수를 사용할거예요.
// 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
// js 함수가 값을 받아오는 것과 똑같이 받아오네요.
const BucketList = ({arr}) => { // props 객체들 중 arr 키를 가져오겠다는 뜻.
    // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
    const my_lists = arr

    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <div className="lists">
             {
                // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요. 
                // 자세한 사용법은 아래 링크를 확인해주세요.
                // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                my_lists.map((list, index) => {
                    // 콘솔을 확인해봅시다 :)
                    console.log(list, index);
                    return (<div className="list-item" key={index}>{list}</div>);
                    // key prop은 해당 요소의 id 같은 값이다. 리액트에서는 변경된 요소에 대해서만 업데이트를 해주는데, key를 통해 변경된 요소를 구분한다.
                    // 아래에 추가하는 경우 index를 사용하고, 위로 추가하는 경우 해당요소의 id 값을 사용함
                })
             }
        </div>
    );
}

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;