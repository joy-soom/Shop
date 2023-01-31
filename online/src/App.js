import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//아니면 public 폴더에 있는 index.html 의 head안에 css link 복붙헤서 넣음된다
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import data from "./data.js";
//외부 라이브러리는 필요할때 마다 검색해서 쓰면됨
import { Routes, Route, Link } from "react-router-dom"; //react dom에서 가져와서 쓸 컴포넌트들

function App() {
  let [bed] = useState(data);

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">SelectShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">detail</Nav.Link>
            {/* <Link to="/detail">상세페이지</Link> */}
          </Nav>
        </Container>
      </Navbar>
      {/* 페이지 이동 버튼 Link */}

      {/* 라우터로 페이지 나누는 법 route = 여기서 페이지 */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="mainBg">
                <div className="content">
                  <p className="contentWord">Select Your own</p>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  {bed.map((a, i) => {
                    return <Card bed={bed[i]} i={1 + i} key={i}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/detail"
          element={
            <div className="container">
              <div className="detailBodyColor row">
                {bed.map((a, i) => {
                  return <Details bed={bed[i]} i={1 + i} key={i}></Details>;
                })}
              </div>
            </div>
          }
        />
        {/* /detail로 접속하면 페이지를 보여주겠다 
        그리고 /detail로 접속하면 <div>상세페이지임</div>을 보여준다 */}
      </Routes>
      {/* 상품 목록은 메인페이지에만 보여주고 싶을 경우?? 메인페이지에 만들어 놓은 요소들 전부 복사해서 메인페이지의 
      element=에다가 담기 */}
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={process.env.PUBLIC_URL + "/image/bed" + props.i + ".jpg"}
        width="80%"
        alt="침대"
      />{" "}
      <div className="productName">{props.bed.title}</div>{" "}
      <p>{props.bed.price}</p>
    </div>
  );
}

function Details(props) {
  return (
    <div className="detailBody">
    <div className = "detailBox">
      <div className="detalImg col-md-6">
        <img 
          src={process.env.PUBLIC_URL + "/image/bed" + props.i + ".jpg"}
          width="100%"
        />
      </div>
      <div className="detailDescription col-md-6">
        <h4 className="pt-5">{props.bed.title}</h4>
        <p>{props.bed.content}</p>
        <p>{props.bed.price}</p>
        <button className="order">주문하기</button>
      </div>
    </div>
    </div>
  );
}
export default App;

