const initialState = {
  modalState: {
    login: false,
    signUp: false,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_MODAL":
      return {
        ...state,
        modalState: { ...state.modalState, login: action.payload },
      };

    default:
      return state;
  }
};
