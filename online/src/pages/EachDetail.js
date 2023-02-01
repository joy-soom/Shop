import { useEffect } from "react";
import { useParams } from "react-router-dom";
//유저가URL파라미터에 입력한 거 가져오려면 useParams() 사용
import { useState } from "react";

function EachDetail(props) {
  useEffect(() => {
    console.log("안녕");
  });
  let [alert, setAlert] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  let { id } = useParams();
  let clickProduct = props.bed.find(function (x) {
    return x.id == id;
  });

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              process.env.PUBLIC_URL + "/image/bed" + clickProduct.id + ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{clickProduct.title}</h4>
          <p>{clickProduct.content}</p>
          <p>{clickProduct.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default EachDetail;
