import { useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"; //react dom에서 가져와서 쓸 컴포넌트들
// import DetailProducts from "./components/DetailProducts";

import "bootstrap/dist/css/bootstrap.min.css";
//아니면 public 폴더에 있는 index.html 의 head안에 css link 복붙헤서 넣음된다
import data from "./data.js";
//외부 라이브러리는 필요할때 마다 검색해서 쓰면됨
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail.js";
import MainPage from "./pages/MainPage.js";
import EachDetail from "./pages/EachDetail.js";


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
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<MainPage bed={bed} />} />
        <Route path="/detail" element={<Detail bed={bed} />} />
        {/* :id 는 아무거나 라는 뜻 그래서eachDetail뒤에 뭘 쓰던 eachDetail페이지 보여줌 
        (참고) URL파라미터 만들 때 - 여러개 가능*/}
        <Route path="*" element={<NotFound />} />
        
        
        
        
        
        
        <Route path="/eachDetail/:id" element={<EachDetail bed={bed} />} />
      </Routes>
    </div>
  );
}

export default App;
