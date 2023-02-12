const initState = {
  users: [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
