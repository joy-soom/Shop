import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartPlus,
  cartMinus,
  totalPrice,
  deleteItem,
  allPrice,
} from "../store.js";
import "../styles/Cart.scss";

function Cart() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  // let [ckeckItems, setChechItems] = useState([]);

  //4.useDispatch : dispatch란 store.js로 요청을 보내주는 함수이다
  // let [총금액, 합친총금액] = useState(0);
  // useEffect(() => {
  //   return () => {

  //   };
  // }, state.cart.count);

  //   let [fade2, setFade2] = useState("");
  // useEffect (() => {
  //   setFade2("end");
  //   return () => {
  //     ""
  //   }
  // })
  if (state.cart.length === 0) {
    return (
      <div>
        <div className="empty">장바구니가 비어있습니다.</div>
      </div>
    )
  }

  return (
    <div className="cartBox">
      <br />
      <br />

      <Table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>name</th>
            <th>count</th>
            <th>price</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>
                {/* {state.cart[i].id} */}
                <input type="checkbox" />
              </td>
              <td>{state.cart[i].name}</td>
              <td>
                <button
                  className="cartBtn"
                  onClick={() => {
                    {
                      state.cart[i].count == 1
                        ? alert("1개 이상 구매가 가능 합니다")
                        : dispatch(cartMinus(state.cart[i].id));
                    }
                  }}
                >
                  -
                </button>{" "}
                {""} {""}
                {state.cart[i].count} {""} {""}
                <button
                  className="cartBtn"
                  onClick={() => {
                    {
                      state.cart[i].count === 9
                        ? alert("구매 가능 수량은 최대 9개 입니다")
                        : dispatch(cartPlus(state.cart[i].id));
                    }
                  }}
                >
                  +
                </button>
              </td>
              <td className="cartFont">
                {state.cart[i].price * state.cart[i].count} {""}원
              </td>
              <td>
                <button
                  className="deletBtn"
                  onClick={() => {
                    console.log(state.cart.length);
                    dispatch(deleteItem());
                    
                    // {
                    //   state.cart.id.length === 0 ? (
                    //     <div className="alert alert-warning">
                    //       2초 이내 구매시 할인
                    //     </div>
                    //   ) : null;
                    // }
                  }}
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <button className="selectDelete">Selected Delete</button>
      </div>
      <div className="productAmount">
        <div>
          <div>Cart Total</div>
        </div>
        <div>
          <div>원</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
