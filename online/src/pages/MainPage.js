import MainProducts from "../components/MainProducts";
import "../styles/Main.scss";
import axios from "axios";
import { useState } from "react";

const MainPage = ({ bed, setBed }) => {
  let [click, setClick] = useState(true);

  return (
    <>
      <div className="mainBg">
        <div className="content">
          <p className="contentWord">Select Your own</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {bed.map((a, i) => {
            return <MainProducts bed={bed[i]} i={i} key={i}></MainProducts>;
          })}
        </div>
      </div>
      <button
        className={"moreBtn " + (click ? "show" : "hidden")}
        onClick={() => {
          setClick(false);
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((결과) => {
              let copy = [...bed, ...결과.data]; 
              setBed(copy);
            });
        }}
      >
        <p> more</p>
       
      </button>
      <br />
      <br />
      <br />
    </>
  );
};

export default MainPage;
