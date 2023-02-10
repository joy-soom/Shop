import React from "react";
import "../styles/Detail.scss";
import { useNavigate } from "react-router-dom";

function DetailProducts(props) {
  let navigate = useNavigate();
  return (
    <div className="detailBody">
      <div className="detailBox">
        <div className="detalImg col-md-6">
          <img
            onClick={() => {
              navigate("/eachDetail/" + props.bed.id);
            }}
            src={process.env.PUBLIC_URL + "/image/bed" + props.i + ".jpg"}
            width="100%"
          />
        </div>
        <div className="detailDescription col-md-6">
          <h4 className="pt-5">{props.bed.title}</h4>
          <p>{props.bed.content}</p>
          <p>{props.bed.price}원</p>
          <button className="order">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default DetailProducts;
