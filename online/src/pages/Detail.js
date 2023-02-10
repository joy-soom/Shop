import DetailProducts from "../components/DetailProducts";


const Detail = ({bed}) => {

  return (
    <div className="container">
      <div className="detailBodyColor row">
        {bed.map((a, i) => {
          return (
            <DetailProducts bed={bed[i]} i={i} key={i}></DetailProducts>
          );
        })}
      </div>
    </div>
  );
}


export default Detail;
