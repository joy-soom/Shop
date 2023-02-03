import { useEffect } from "react";
import { useParams } from "react-router-dom";
//유저가URL파라미터에 입력한 거 가져오려면 useParams() 사용
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function EachDetail(props) {
  // let navigate = useNavigate();
  let [modal, setModal] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 2000);
  }, []);

  let { id } = useParams();
  console.log(id);
  let clickProduct = props.bed.find(function (x) {
    return x.id == id;
  });

  return (
    <div className="container">
      {modal == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div>
          <img
            src={
              process.env.PUBLIC_URL + "/image/bed" + id + ".jpg"
            }
            width="100%"
          />
        </div>

        <div>
          <h4 className="pt-5">{clickProduct.title}</h4>
          <p>{clickProduct.content}</p>
          <p>{clickProduct.price}$</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default EachDetail;
