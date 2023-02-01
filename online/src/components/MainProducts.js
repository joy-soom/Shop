import {useNavigate } from "react-router-dom";

function MainProducts(props) {
  let navigate = useNavigate();

  return (
    <div className="col-md-4">
      <img
        onClick={() => {
          navigate("/eachDetail/" +props.i);
        }}
        src={process.env.PUBLIC_URL + "/image/bed" + props.i + ".jpg"}
        width="80%"
        alt="침대"
      />{" "}
      <div className="productName">{props.bed.title}</div>{" "}
      <p>{props.bed.price}</p>
    </div>
  );
}

export default MainProducts;
