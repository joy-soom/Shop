import { configureStore, createSlice } from "@reduxjs/toolkit";

//state 하나를 slice라고 한다
let user = createSlice({
  name: "user",
  initialState: "kim",

  //state 수정하는법
  //1. state 수정해주는 함수 만들기 (이름길면 안됨)
  reducers: {
    changeName(state) {
      //파라미터로 넣은 state는 기존state를 의미한다
      return "john kim"; //return 'john' + state 해도 같음
    },
    함수2() {
      //여러개만들 수 있다 이렇게
    },
  },
});

//2. 함수를 export해준다 다른 곳에서 사용 할 수 있도록
export let { changeName } = user.actions; //오른쪽 자료를 변수로 빼는 문법일 뿐
//3. 만든 함수 import해서 사용

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0,
      name: "Beige and Purple",
      count: 2,
      price: 150000,
    },
    {
      id: 2,
      name: "Brown and Beige",
      count: 1,
      price: 200000,
    },
  ],
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
    addItem(state, action) {
      state.unshift(action.payload);
    },
    deleteItem(state, action) {
      state = state.splice(action.payload, 1);
    },

    addList(state, action) {
      const index = state.findIndex((e) => e.id === action.payload.id);
      if (index > -1) {
        // state[index].count++;
        alert('장바구니에 담겨 있는 상품입니다.')
      } else {
        state.push(action.payload);
      }
    },
    removeList(state, action) {
      const index = state.findIndex((e) => e.id === action.payload.id);
      console.log(index);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default configureStore({
  reducer: {
    //위에 작성한 state를 여기에 등록 해야 사용 가능
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});

export let {
  cartPlus,
  cartMinus,
  addItem,
  totalPrice,
  deleteItem,
  allPrice,
  addList,
  removeList,
} = cart.actions;
