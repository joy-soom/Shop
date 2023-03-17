import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { addList } from "../store.js";
import { useDispatch} from "react-redux";
import "../styles/Eachdetail.scss";

function EachDetail(props) {
  let dispatch = useDispatch();
  let [modal, setModal] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 2000);
  }, []);

  let [fade2, setFade2] = useState("");

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  let { id } = useParams();
  let clickProduct = props.bed.find(function (x) {
    return x.id == id;
  });

  let [tap, setTap] = useState(0);

  return (
    <div className={"container start " + fade2}>
      {modal == true ? <div className="alert">2초 이내 구매시 할인</div> : null}
      <div className="detailContent">
        <div className="imgContent">
          <img
            src={process.env.PUBLIC_URL + "/image/bed" + id + ".jpg"}
            width="100%"
          />
        </div>
        <br />
        <br />
        <div className="detailText">
          <h4 className="eachTitle">{clickProduct.title}</h4>
          <p>{clickProduct.content}</p>
          <p>
            {clickProduct.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </p>
          <button
            className="cardOrderBtn"
            onClick={() => {
              dispatch(
                addList({
                  id: clickProduct.id,
                  name: clickProduct.title,
                  price: clickProduct.price,
                  count: 1,
                })
              );
            }}
          >
            담기
          </button>
        </div>
      </div>
      <br />
      <br />

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(0);
            }}
            eventKey="link0"
          >
            상세페이지
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(1);
            }}
            eventKey="link1"
          >
            문의사항
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(2);
            }}
            eventKey="link2"
          >
            배송안내
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tap={tap} clickProduct={clickProduct} id={id} />
    </div>
  );
}
function TabContent({ tap, id, clickProduct }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tap]);
  return (
    <div className={"start " + fade}>
      {
        [
          <div>
            <h3 className="notice">상세페이지</h3>
            <br />
            <br />
            <div className="detailCut">
              <img
                className="noticeImg"
                src={process.env.PUBLIC_URL + "/image/bed" + id + ".jpg"}
                width="400px"
              />
              <div className="detailTable">
                <Table clickProduct={clickProduct} />
              </div>
            </div>
          </div>,
          <div>
            <h3 className="notice">문의사항</h3>
            <div className="noticeIssue">
              <p>상품 문의와 환불, 교환 및 기타 문의 사항이 있으실 경우 </p>
              <p>아래 연락처로 문의 주시면 친절히 답변 드리겠습니다.</p>
              <p>selecshop@gmail.com</p>
              <p>📞02-111-222</p>
              <img
                src={process.env.PUBLIC_URL + "/image/question.jpg"}
                alt="문의"
                height="350px"
              />
            </div>
          </div>,
          <div>
            <h3 className="notice">배송 안내</h3>
            <div className="shipment">
              <p>평균적인 배송시간은 주문 접수 후 2~3일 이후 출발 하게 되며</p>
              <p>
                영업일 기준 (주말 제외) 약 5~7일 정도 소요 됩니다. 참고
                부탁드립니다.
              </p>
              <img
                src={process.env.PUBLIC_URL + "/image/ship.jpg"}
                alt="배송"
                height="400px"
              />
            </div>
          </div>,
        ][tap]
      }
    </div>
  );
}

function Table({ clickProduct }) {
  return (
    <table
      className="detailTableContent"
      border={1}
      cellPadding={5}
      cellSpacing={10}
    >
      <thead>
        <tr>
          <th>상품명</th>
          <th>상세내용</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{clickProduct.title}</td>
          <td className="productContent">{clickProduct.content}</td>
          <td>{clickProduct.price}원</td>
        </tr>
      </tbody>
    </table>
  );
}

export default EachDetail;
