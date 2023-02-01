import { useParams } from "react-router-dom";
//유저가URL파라미터에 입력한 거 가져오려면 useParams() 사용

function EachDetail(props) {
  let { id } = useParams();
  let clickProduct = props.bed.find(function (x) {
    return x.id == id;
  });

  return (
    <div className="container">
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
