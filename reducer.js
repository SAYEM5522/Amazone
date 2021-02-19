import { useStateValue } from "./StateProvider";

export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  //const [{ basket }] = useStateValue();
  console.log(action);
  switch (action.type) {
    case "add_to_basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "remove_from_basket":
      return { state };

    default:
      return state;
  }
};
export default reducer;
