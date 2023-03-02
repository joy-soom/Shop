import { Table } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartPlus, cartMinus, deleteItem} from "../store.js";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="empty">
          <p className="emptyWord">🔊 장바구니가 비어있습니다.</p>
        </div>
      </div>
    );
  }

  // 체크 박스 상품id값만 삭제하기
  const deleteSelected = () => {
    if (checkItems.length === 0) {
      alert("삭제할 상품을 선택해주세요");
      console.log("선택한 상품 없음");
      console.log(checkItems.length);
    } else {
      const checkArray = checkItems.filter((el) => el.id == state.cart.id);
      console.log(checkArray.length);
      setCheckItems(checkArray);
    }
  };

  return (
    <div className="cartBox">
      <br />

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
            <th>product</th>
            <th>title</th>
            <th>count</th>
            <th>price</th>
            <th>delivery</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  name="select-checked"
                  onChange={(e) =>
                    selectChecked(e.target.checked, state.cart[i].id)
                  }
                  checked={checkItems.includes(state.cart[i].id) ? true : false}
                />
              </td>
              <td>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/image/bed" +
                    state.cart[i].id +
                    ".jpg"
                  }
                  width="60%"
                  alt="침대"
                />
              </td>
              <td>{state.cart[i].name}</td>
              <td>
                <div className="btnDoble">
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
                  </button>
                  <div>{state.cart[i].count}</div>
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
                </div>
              </td>
              <td className="cartFont">
                {(state.cart[i].price * state.cart[i].count)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                {""}원
              </td>
              <td>
                <p>[Free]</p>
              </td>
              <td>
                <button
                  className="deletBtn"
                  onClick={() => {
                    dispatch(deleteItem());
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />

      <div className="freeShip">
        <button
          className="selectDelete"
          onClick={() => {
            deleteSelected();
          }}
        >
          Selected Delete
        </button>
      </div>

      <div className="productAmount">
        <div>
          <div className="orderFont">Cart Total</div>
        </div>
        <div>
          <div className="orderFont">
            {orderPrice()
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
