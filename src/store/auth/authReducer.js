const authActionTypes = {
    LOG_IN: "LOG_IN",
    LOG_OUT: "LOG_OUT",
  };
  
  const initialState = {
    email: "",
    isAuthrized: false,
  };
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case authActionTypes.LOG_IN:
        return {
          ...state,
          email: action.payload,
          isAuthrized: true,
        };
      case authActionTypes.LOG_OUT:
        return initialState;
        
      default:
        return state;
    }
  };
  