import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartPlus, cartMinus } from "../store.js";
import "../styles/Cart.scss";

function Cart() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  // console.log(state.cart);
  //4.useDispatch : dispatch란 store.js로 요청을 보내주는 함수이다

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>상품 고유번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
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
                {state.cart[i].price} {""}원
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="productAmount">
        <div className="productPlus">
          <div>상품 합계</div>
          <br />
          <div>배송비</div>
        </div>
        <div className="allPrice">
          <div>500000원</div>
          <br />
          <div>500000원</div>
        </div>
      </div>
      <hr />
      <div className="finalPrice">
        <h4>총 결제금액</h4>
        <p className="totalPrice">3462362 원</p>
      </div>
    </div>
  );
}

export default Cart;
