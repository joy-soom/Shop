import MainProducts from "../components/MainProducts";
import "../styles/App.scss";
import axios from "axios";
import { useState } from "react";

const MainPage = ({ bed,setBed }) => {
  // let [beds, setBeds] = useState(bed);
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
            return <MainProducts bed={bed[i]} i={1 + i} key={i}></MainProducts>;
          })}
          
        </div>
      </div>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((결과) => {
              // console.log(결과.data);
              //위의data를 사용해서 html생성해주세요 리액트-> 스위치 조작
              //bed에 데이터 몇개 추가해주세요~ 그럼 html도 알아서 생성될듯
              // console.log(beds);
              console.log(결과.data);
              console.log(bed);
              let copy = [...bed, ...결과.data]; //복사본 소장
              console.log(copy);
              setBed(copy);
              console.log(setBed);
             
            });
        }}
      >
        더보기
      </button>
    </>
  );
};

export default MainPage;
