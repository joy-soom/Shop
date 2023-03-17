import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartPlus, cartMinus, deleteItem } from "../store.js";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Cart.scss";

function Cart() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);

  const orderPrice = () => {
    let sum = 0;
    for (let i = 0; i < state.cart.length; i++) {
      sum += state.cart[i].price * state.cart[i].count;
    }
    return sum;
  };

  if (state.cart.length === 0) {
    return (
      <div>
        <div className="empty">
          <p className="emptyWord">Your cart is empty..😪</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cartBox">
      <br />

      <Table>
        <thead>
          <tr>
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
