import React from "react";
import { createRoot } from "react-dom/client";
import { useState, useReducer } from "react";
import { reducer } from "./reducer";
import Modal from "./Modal";
import "./index.css";

const defaultState = {
  items: [],
  isModalOpen: false,
  modalContent: "",
};

function Index() {
  const [item, setItem] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item) {
      const newItem = { id: new Date().getTime().toString(), item };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setItem("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <React.Fragment>
      <div className="container">
        {state.isModalOpen && (
          <Modal closeModal={closeModal} modalContent={state.modalContent} />
        )}

        <form onSubmit={handleSubmit} className="form">
          <div>
            <input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <button type="submit">Insert</button>
        </form>

        {state.items.map((value) => {
          return (
            <div key={value.id} className="item">
              <h4>{value.item}</h4>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: value.id })
                }
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Index />);
