// reducer function
export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItem = [...state.items, action.payload];
    return {
      ...state,
      items: newItem,
      isModalOpen: true,
      modalContent: "Item Added",
    };
  }

  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please enter alue" };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }

  if (action.type === "REMOVE_ITEM") {
    const newItem = state.items.filter((value) => value.id !== action.payload);

    return {
      ...state,
      items: newItem,
    };
  }

  throw new Error("No new matching action.");
};
