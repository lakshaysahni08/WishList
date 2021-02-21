import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};


const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    case DELETE_ITEM:
      return {
        wishList: [...state.wishList.filter(item => item !== action.payload)],
      };
    default:
      return {
        wishList: [...state.wishList],
      };
  }
};

export default reducer;