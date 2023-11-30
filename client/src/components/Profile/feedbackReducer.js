
const reducer = (state,action) => {
    switch (action?.type) {
      case 'GET_FEEDBACK':
        return [...action.payload];
      case 'CREATE_FEEDBACK':  
      return [...state,action.payload]
      default:
        return state;
    }
    
  }
  export default reducer;