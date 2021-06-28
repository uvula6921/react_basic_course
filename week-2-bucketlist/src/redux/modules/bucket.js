// bucket.js
import {firestore} from "../../firebase"

const bucket_db = firestore.collection("bucket")

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";
const LOADED = "bucket/LOADED";

const initialState = {
  list: [
    {text: '영화관 가기', completed: false},
    {text: '매일 책읽기', completed: false},
    {text: '수영 배우기', completed: false},
  ],
  is_loaded: false,
  // list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// Action Creators
export const loadBucket = (bucket) => {
  return { type: LOAD, bucket };
};

export const createBucket = (bucket) => {
  return { type: CREATE, bucket };
};

export const deleteBucket = (bucket) => {
  return { type: DELETE, bucket };
};

export const updateBucket = (bucket) => {
  return { type: UPDATE, bucket };
};

export const loadBucketFB = () => {
  return function (dispatch) {
    bucket_db.get().then((docs) => {
      let bucket_data = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          bucket_data = [...bucket_data, {id: doc.id, ...doc.data()}]
        }
      })
      console.log(bucket_data);
      dispatch(loadBucket(bucket_data));
    })
  }
}

export const addBucketFB = (bucket) => {
  return function (dispatch) {
    dispatch(isLoaded(false));
    
    let bucket_data = {text: bucket, completed: false}
    bucket_db.add(bucket_data).then(docRef => {
      bucket_data = {...bucket_data, id: docRef.id};
      dispatch(createBucket(bucket_data))
      
      dispatch(isLoaded(true));
    })
  }
}

export const updateBucketFB = (bucket) => {
  return function (dispatch, getState) {
    // getState -> 이 모듈의 state를 가져와줌. 리덕스에 있는 state 데이터도 firebase load 함수를 통해 가져올수 있다는 뜻
    const _bucket_data = getState().bucket.list[bucket];
    let bucket_data = {..._bucket_data, completed: true};
    
    if (!bucket_data.id) {
      return;
    }
    
    bucket_db.doc(bucket_data.id).update(bucket_data).then(docRef => {
      dispatch(updateBucket(bucket))
    }).catch(error => { // 오류가 났다면 catch로 받아와서 에러를 보여준다.
      console.log(error);
    });
  }
}

export const deleteBucketFB = (bucket) => {
  return function (dispatch, getState) {
    const _bucket_data = getState().bucket.list[bucket];
    
    if (!_bucket_data.id) {
      return;
    }
    
    bucket_db.doc(_bucket_data.id).delete().then(res => {
      dispatch(deleteBucket(bucket));
    }).catch(error => { // 오류가 났다면 catch로 받아와서 에러를 보여준다.
      console.log(error);
    });
  }
}

export const isLoaded = (loaded) => {
  return {type: LOADED, loaded};
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD": {
      if (action.bucket.length) {
        return {...state, list: action.bucket, is_loaded: true};
      }
      return state;
    }

    case "bucket/CREATE":
      const new_bucket_list = [...state.list, action.bucket];
      return {...state, list: new_bucket_list};

    case "bucket/DELETE":
      const bucket_list = state.list.filter((l, idx) => {
        return idx !== action.bucket
      });
      return {...state, list: bucket_list};
      
    case "bucket/UPDATE": {
      const bucket_list = state.list.map((l, idx) => {
        if (idx === action.bucket){
          return {...l, completed: true}
        } else {
          return l;
        }
      })
      return {...state, list: bucket_list};
    }
    
    case "bucket/LOADED": {
      return {...state, is_loaded: action.loaded} // 기존의 state 요소들(list)은 그대로 두고 is_loaded만 action.loaded로 변경해줌
      // reducer의 return은 언제나 ...state를 기본으로 넣어주는것이 좋겠다...
    }

    default:
      return state;
  }
}