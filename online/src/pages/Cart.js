import { Table } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartPlus, cartMinus, deleteItem,removeList } from "../store.js";
import "../styles/Cart.scss";

function Cart() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  let [checkItems, setCheckItems] = useState([]); //체크된 아이템 담을 state

  //체크박스 개별
  const selectChecked = (checked, id) => {
    if (checked) {
      setCheckItems([...checkItems, id]);
      console.log("선택 체크");
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
      console.log("선택 체크해제");
    }
  };

  //체크박스 전체
  const allChecked = (checked) => {
    if (checked) {
      const itemList = [];
      state.cart.forEach((el) => itemList.push(el.id));
      setCheckItems(itemList);
      console.log("전체선택");
    } else {
      setCheckItems([]);
      console.log("전체선택 해제");
    }
  };

  //총액 구하기
  const orderPrice = () => {
    let sum = 0;
    for (let i = 0; i < state.cart.length; i++) {
      sum += state.cart[i].price * state.cart[i].count;
    }
    return sum;
  };

  // 장바구니 비었을 때 보여줄 화면
  if (state.cart.length === 0) {
    return (
      <div>
        <div className="empty">장바구니가 비어있습니다.</div>
      </div>
    );
  }

  // 체크 박스 상품id값만 삭제하기
  const deleteSelected = () => {
    if (checkItems.length === 0) {
      alert("삭제할 상품을 선택해주세요");
      console.log('선택할상품 없음')
    } else {
      setCheckItems(checkItems.filter((el) => !checkItems.includes(el.id)));
      console.log('선택 상품 있음')
    }
  };


  return (
    <div className="cartBox">
      <br />
      <div className="freeShip">
        <button className="selectDelete" onClick={() =>deleteSelected(state.cart.id) }>
          Selected Delete
        </button>
        {/* <p className="freeWord">무료배송</p> */}
      </div>

      <Table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name="all-checked"
                onChange={(e) => allChecked(e.target.checked)}
                checked={checkItems.length === state.cart.length ? true : false}
              />
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
                <input
                  type="checkbox"
                  name="selece-checked"
                  onChange={(e) =>
                    selectChecked(e.target.checked, state.cart[i].id)
                  }
                  checked={checkItems.includes(state.cart[i].id) ? true : false}
                />
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
                    dispatch(deleteItem());
                  }}
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />

      <div className="productAmount">
        <div>
          <div className="orderFont">Cart Total</div>
        </div>
        <div>
          <div className="orderFont">{orderPrice()}원</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
