import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function EachDetail(props) {
  let [modal, setModal] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 2000);
  }, []);

  let { id } = useParams();
  console.log(id);
  let clickProduct = props.bed.find(function (x) {
    return x.id == id;
  });
  //let clickProduct = props.bed.find(x => x.id ==id)랑 같다 이게 신문법

  let [탭, 탭변경] = useState(0); //true or false저장도가능하지만 숫자로 해줘야 3가지 내용을 보여줘야 하는 상황에선 더 자유롭다
  //1이면1번째 내용이 2이면 2번째 내용을 보여준다

  return (
    <div className="container">
      {modal == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/image/bed" + id + ".jpg"}
            width="100%"
          />
        </div>

        <div>
          <h4 className="pt-5">{clickProduct.title}</h4>
          <p>{clickProduct.content}</p>
          <p>{clickProduct.price}$</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        {/* defaultActiveKey="link0" 얘는 옵션인데 해당페이지를 열었을 때
        기본으로 눌려있을 버튼을 말한다 그래서 여기선 link0번 버튼 이래서
        밑에 eventKey도 이름 다다르게지정해줘야 한다 */}
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />

      {/*  {tap == 0 ? <div>내용0</div> : null} 같은 삼항연산자 말고 일반IF 조건문 쓰려면?? HTML안에서는 if문 못쓴다 html 바깥에서 사용가능
       */}
    </div>
  );
}

function TabContent(탭) {
  //컴포넌트는 return 써주는거 필수 if if if 도 되고  if else if else if도된다
  if (탭 === 0) {
    return <div>내용0</div>;
  } if (탭 === 1) {
    return <div>내용1</div>;
  } if (탭 === 2) {
    return <div>내용2</div>;
  }
}

export default EachDetail;
