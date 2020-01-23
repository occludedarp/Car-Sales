export const initialState = {
  price: ' ',
  name: ' ',
  image: ' '
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_FEATURE':
      return {
        ...state,
        
      }
    default:
      return state;
  }
};