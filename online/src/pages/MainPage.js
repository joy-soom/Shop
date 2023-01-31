import MainProducts from "../components/MainProducts";
import "../styles/App.scss";

const MainPage = ({ bed }) => {
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
    </>
  );
};

export default MainPage;
