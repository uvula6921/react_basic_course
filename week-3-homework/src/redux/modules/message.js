// message.js

// Actions
const LOAD = "message/LOAD";
const CREATE = "message/CREATE";
const DELETE = "message/DELETE";

const initialState = {
  list: ["사랑짱은 용맹해", "사랑 짱짱걸"],
};

// Action Creators
export const loadMessage = (message) => {
  return { type: LOAD, message };
};

export const createMessage = (message) => {
  return { type: CREATE, message };
};

export const deleteMessage = (message) => {
  return { type: DELETE, message };
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    case "message/LOAD":
      return state;

    case "message/CREATE":
      const new_message_list = [...state.list, action.message];
      return {list: new_message_list};

    case "message/DELETE":
      const message_list = state.list.filter((l, idx) => {
        return idx !== action.message
      });
      return {list: message_list};

    default:
      return state;
  }
}