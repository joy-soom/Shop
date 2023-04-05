import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartPlus(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },
    cartMinus(state, action) {
      let 마이너스 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[마이너스].count--;
    },
    deleteItem(state, action) {
      state = state.splice(action.payload, 1);
    },
    addList(state, action) {
      const index = state.findIndex((e) => e.id === action.payload.id);
      if (index > -1) {
        alert("장바구니에 담겨 있는 상품입니다.");
      } else {
        state.push(action.payload);
        alert("1개의 상품이 장바구니에 담겼습니다.");
      }
    },

    checkDelete(state, action) {
      const index = state.findIndex((el) => el.id == action.payload);
      if (index.length > -1) {
        console.log(index);
        alert("선택됨");
      } else {
        alert("암것도 없잖아");
      }
    },
  },
});

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});

export let { cartPlus, cartMinus, totalPrice, deleteItem, allPrice, addList } =
  cart.actions;
