// bucket.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";

const initialState = {
  list: ['영화관 가기', '매일 책읽기', '수영 배우기']
}

// Action Creators
export const loadBucket = (bucket) => {
  return {type: LOAD, bucket};
}

export const createBucket = (bucket) => {
  return {type: CREATE, bucket};
}

// Reducer
export default function reducer(state = initialState, actionCreator = {}) {
  switch (actionCreator.type) {
    case LOAD: {
      return state
    }
    case CREATE: {
      const new_bucket_list = [...state.list, actionCreator.bucket]
      return {list: new_bucket_list}
    }
    default: return state;
  }
}