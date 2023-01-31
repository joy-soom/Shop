import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//아니면 public 폴더에 있는 index.html 의 head안에 css link 복붙헤서 넣음된다
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import data from "./data.js";
//외부 라이브러리는 필요할때 마다 검색해서 쓰면됨
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"; //react dom에서 가져와서 쓸 컴포넌트들
// import DetailProducts from "./components/DetailProducts";
import "./styles/App.scss";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail.js";

function App() {
  let [bed] = useState(data);
  let navigate = useNavigate(); // <- 1.페이지 이동도와주는 usenavigate

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">SelectShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              detail
            </Nav.Link>
            {/* <Link to="/detail">상세페이지</Link> */}
          </Nav>
        </Container>
      </Navbar>
      {/* 페이지 이동 버튼 Link 
      Link는 a태그랑 같기 때문에 별로라면 ,
      Link 태그에  <Nav.Link onClick={() => {navigate ('/detail)}}> 라고 해줌 된다
       
       onClick={() => {navigate ('1')}} 뒤로 한페이지 이동
       onClick={() => {navigate ('-1')}} 앞으로 한페이지 이동
       
       
       */}

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
        <Route path="/detail" element={<Detail bed={bed} />} />
        {/*
        3. Nested Routes
        about이란 링크 뒤에 
            <Route path="/about/member" element={<About />} />
            이렇게 타고 들어가는 다른 링크를 여러개를 생성 하고 싶을 때 
            아래처럼 열고 닫는 route 안에 모두 담아서 라우트를 관리 할 수 있다
            이게 Nested Routes 이다 

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} /> 
          -> 분명 about/member 치면 회사정보임 이거랑 멤버임 두개가 보여야 하는데 
          회사 정보임 만 보인다 왜냐? 이경우에는 멤버임이 어디보여줄지 정해줘야 한다 
          그래서 밑에 만들어놓은 함수에 <Outlet>을 사용해본다
          <Route path="location" element={<About />} />
        </Route>
          Nested Routes의 장점
          1. route 작성이 약간 간단해 질 수도 있다
          2. 뒤로 가기 버튼이 잘 먹는다 (페이지 이동이 쉬움)
          Nested Routes 를 언제 쓰냐 ?
          1. 페이지를 많이 만들 때 
          2. 여러 유사한 페이지 필요할 때 글자 하나 박스 하나씩만 살짝 바껴야 한다 이럴 때
          

          function About() {
             return (
               <div>
                <h4>회사정보임</h4>
                <Outlet></Outlet>
               </div>
              );
            }
        */}

        <Route path="*" element={<NotFound />} />
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

export default App;
