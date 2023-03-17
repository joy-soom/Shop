import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.js";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage.js";
import EachDetail from "./pages/EachDetail.js";
import Cart from "./pages/Cart.js";

function App() {
  let [bed, setBed] = useState(data);
  let navigate = useNavigate();

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
                navigate("/cart");
              }}
            >
              cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <Routes>
          <Route path="/" element={<MainPage bed={bed} setBed={setBed} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/eachDetail/:id" element={<EachDetail bed={bed} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;
