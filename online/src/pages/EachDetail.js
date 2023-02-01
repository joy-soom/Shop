import { useParams } from "react-router-dom";

function EachDetail(props) {
  let { id } = useParams();
  console.log(id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + "/image/bed" +[id] + ".jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.bed[id].title}</h4>
          <p>{props.bed[id].content}</p>
          <p>{props.bed[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default EachDetail;
